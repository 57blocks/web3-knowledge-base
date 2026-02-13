// Patch `gitbook-plugin-mermaid-gb3` to avoid clipped labels after PJAX navigation.
// GitBook triggers `page.change` before layout/fonts are stable; Mermaid may mis-measure
// text width and generate too-small node boxes, causing text to be clipped.
//
// This script is intentionally dependency-free and idempotent.
//
// Usage:
//   node scripts/patch-mermaid-gb3.js
const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();
const targets = [
  path.join(ROOT, 'node_modules/gitbook-plugin-mermaid-gb3/book/plugin.js'),
  path.join(ROOT, 'node_modules/gitbook-plugin-mermaid-gb3/dist/book/plugin.js'),
];

const MARKER = '__gitbookDeferredInitScheduled';

function patchContent(content) {
  if (content.includes(MARKER)) return { changed: false, content };

  const requireOpen = "], function (gitbook) {";
  if (!content.includes(requireOpen)) {
    throw new Error('Unexpected plugin.js format: cannot find require() open.');
  }

  const helpers = `
  function raf(cb) {
    var r = window.requestAnimationFrame;
    return typeof r === 'function' ? r(cb) : setTimeout(cb, 16);
  }

  function onceMermaidReady(cb) {
    var maxAttempts = 120; // ~3s at 25ms
    var intervalMs = 25;
    var attempts = 0;

    function tick() {
      attempts += 1;
      if (window.mermaid && typeof window.mermaid.init === 'function') return cb(window.mermaid);
      if (attempts >= maxAttempts) return;
      setTimeout(tick, intervalMs);
    }

    tick();
  }

  function scheduleMermaidInit(mermaid) {
    // Avoid running Mermaid while layout/fonts are still stabilizing on PJAX navigation,
    // otherwise Mermaid may mis-measure labels and clip text in nodes.
    if (mermaid.${MARKER}) return;
    mermaid.${MARKER} = true;

    function run() {
      mermaid.${MARKER} = false;
      mermaid.init();
    }

    function schedule() {
      raf(function () {
        raf(function () {
          setTimeout(run, 0);
        });
      });
    }

    if (document.fonts && document.fonts.ready && typeof document.fonts.ready.then === 'function') {
      document.fonts.ready.then(schedule, schedule);
    } else {
      schedule();
    }
  }
`;

  const eventRegex =
    /gitbook\.events\.bind\('page\.change',\s*function\s*\(\)\s*\{\s*[\s\S]*?\s*\}\s*\);\s*/m;
  if (!eventRegex.test(content)) {
    throw new Error("Unexpected plugin.js format: cannot find gitbook.events.bind('page.change', ...).");
  }

  const newEvent = `gitbook.events.bind('page.change', function () {\n    onceMermaidReady(scheduleMermaidInit);\n  });\n`;

  let next = content;
  next = next.replace(requireOpen, requireOpen + helpers);
  next = next.replace(eventRegex, newEvent);

  return { changed: next !== content, content: next };
}

function patchFile(filePath) {
  if (!fs.existsSync(filePath)) {
    console.log(`skip: ${path.relative(ROOT, filePath)} (not found)`);
    return;
  }

  const before = fs.readFileSync(filePath, 'utf8');
  const { changed, content } = patchContent(before);

  if (!changed) {
    console.log(`ok:   ${path.relative(ROOT, filePath)} (already patched)`);
    return;
  }

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`patch:${path.relative(ROOT, filePath)}`);
}

for (const filePath of targets) patchFile(filePath);

