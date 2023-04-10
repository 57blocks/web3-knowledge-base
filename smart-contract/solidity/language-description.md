# Language Description

_bin@57blocks.com_

## [Layout of a Solidity Source File](https://docs.soliditylang.org/en/latest/layout-of-source-files.html)

Source files can contain an arbitrary number of [SPDX License Identifier](https://docs.soliditylang.org/en/latest/layout-of-source-files.html#spdx-license-identifier), [pragmas](https://docs.soliditylang.org/en/latest/layout-of-source-files.html#pragmas), [imports](https://docs.soliditylang.org/en/latest/layout-of-source-files.html#importing-other-source-files) and [comments](https://docs.soliditylang.org/en/latest/layout-of-source-files.html#comments).

> Each <font size=5>[Subtile]()</font> and [key words]() can be clicked to see details.

## [Structure of a Contract](https://docs.soliditylang.org/en/latest/structure-of-a-contract.html#structure-of-a-contract)

Contracts in Solidity are similar to classes in object-oriented languages. Each contract can contain declarations of [State Variables](https://docs.soliditylang.org/en/latest/structure-of-a-contract.html#state-variables), [Functions](https://docs.soliditylang.org/en/latest/structure-of-a-contract.html#functions), [Function Modifiers](https://docs.soliditylang.org/en/latest/structure-of-a-contract.html#function-modifiers), [Events](https://docs.soliditylang.org/en/latest/structure-of-a-contract.html#events), [Errors](https://docs.soliditylang.org/en/latest/structure-of-a-contract.html#errors), [Struct Types](https://docs.soliditylang.org/en/latest/structure-of-a-contract.html#struct-types) and [Enum Types](https://docs.soliditylang.org/en/latest/structure-of-a-contract.html#enum-types). Furthermore, contracts can inherit from other contracts.

## [Types](https://docs.soliditylang.org/en/latest/types.html#types)

Solidity is a statically typed language, which means that the type of each variable (state and local) needs to be specified. Solidity provides several elementary types which can be combined to form complex types.

### [1. Value Types](https://docs.soliditylang.org/en/latest/types.html#value-types)

The following are called value types because their variables will always be passed by value, i.e. they are always copied when they are used as function arguments or in assignments.

[Booleans](https://docs.soliditylang.org/en/latest/types.html#booleans), [Integers](https://docs.soliditylang.org/en/latest/types.html#integers), [Fixed Point Numbers](https://docs.soliditylang.org/en/latest/types.html#fixed-point-numbers), [**Address**](https://docs.soliditylang.org/en/latest/types.html#address), [**Contract Types**](https://docs.soliditylang.org/en/latest/types.html#contract-types), [Enums](https://docs.soliditylang.org/en/latest/types.html#enums), Literals([Address Literals](https://docs.soliditylang.org/en/latest/types.html#address-literals), [Rational and Integer Literals](https://docs.soliditylang.org/en/latest/types.html#rational-and-integer-literals), [Hexadecimal Literals](https://docs.soliditylang.org/en/latest/types.html#hexadecimal-literals), [String Literals and Types](https://docs.soliditylang.org/en/latest/types.html#string-literals-and-types), [Unicode Literals](https://docs.soliditylang.org/en/latest/types.html#unicode-literals))

> **Bold** types are unique in Solidity.

### [2. Reference Types](https://docs.soliditylang.org/en/latest/types.html#reference-types)

Values of reference type can be modified through multiple different names. Contrast this with value types where you get an independent copy whenever a variable of value type is used. Because of that, reference types have to be handled more carefully than value types. Currently, reference types comprise structs, arrays and mappings.

#### [a. Data location](https://docs.soliditylang.org/en/latest/types.html#data-location)

Every reference type has an additional annotation, the “data location”, about where it is stored. There are three data locations: memory, storage and calldata. If you use a reference type, you always have to explicitly provide the data area where the type is stored: <font color='red'>memory</font> (whose lifetime is limited to an external function call), <font color='red'>storage</font> (the location where the state variables are stored, where the lifetime is limited to the lifetime of a contract) or <font color='red'>calldata</font> (special data location that contains the function arguments).

> This part is very important and needs to be read and understood carefully.

#### [b. Arrays](https://docs.soliditylang.org/en/latest/types.html#arrays)

Arrays can have a compile-time fixed size, or they can have a dynamic size.

The type of an array of fixed size k and element type T is written as T[k], and an array of dynamic size as T[].

#### [c. Structs](https://docs.soliditylang.org/en/latest/types.html#structs)

Solidity provides a way to define new types in the form of structs.

#### [d. Mapping Types](https://docs.soliditylang.org/en/latest/types.html#mapping-types)

Mapping types use the syntax <font color='red'>mapping(KeyType KeyName? => ValueType ValueName?)</font> and variables of mapping type are declared using the syntax <font color='red'>mapping(KeyType KeyName? => ValueType ValueName?) VariableName</font>. The <font color='red'>KeyType</font> can be any built-in value type, <font color='red'>bytes</font>, <font color='red'>string</font>, or any contract or enum type. Other user-defined or complex types, such as mappings, structs or array types are not allowed. <font color='red'>ValueType</font> can be any type, including mappings, arrays and structs. <font color='red'>KeyName</font> and <font color='red'>ValueName</font> are optional (so <font color='red'>mapping(KeyType => ValueType)</font> works as well) and can be any valid identifier that is not a type.

## [Control Structures](https://docs.soliditylang.org/en/latest/control-structures.html#control-structures)

Most of the control structures known from curly-braces languages are available in Solidity:

There is: `if, else, while, do, for, break, continue, return`, with the usual semantics known from C or JavaScript.

Solidity also supports exception handling in the form of `try/catch`-statements, but only for external function calls and contract creation calls. Errors can be created using the revert statement.

### [1. Function Calls](https://docs.soliditylang.org/en/latest/control-structures.html#function-calls)

#### [a. Internal Function Calls](https://docs.soliditylang.org/en/latest/control-structures.html#internal-function-calls)

Functions of the current contract can be called directly (“internally”), also recursively. These function calls are translated into simple jumps inside the EVM. This has the effect that the current memory is not cleared, i.e. passing memory references to internally-called functions is very efficient. Only functions of the same contract instance can be called internally.

#### [b. External Function Calls](https://docs.soliditylang.org/en/latest/control-structures.html#external-function-calls)

Functions can also be called using the `this.g(8)`; and `c.g(2)`; notation, where `c` is a contract instance and `g` is a function belonging to `c`. Calling the function `g` via either way results in it being called “externally”, using a message call and not directly via jumps. Please note that function calls on `this` cannot be used in the constructor, as the actual contract has not been created yet.

Functions of other contracts have to be called externally. For an external call, all function arguments have to be copied to memory.

## [Contracts](https://docs.soliditylang.org/en/latest/contracts.html#contracts)

Contracts in Solidity are similar to classes in object-oriented languages. They contain persistent data in state variables, and functions that can modify these variables. Calling a function on a different contract (instance) will perform an EVM function call and thus switch the context such that state variables in the calling contract are inaccessible. A contract and its functions need to be called for anything to happen. There is no “cron” concept in Ethereum to call a function at a particular event automatically.

> This part is very important and needs to be read and understood carefully.

### [1. State Variable Visibility - public, internal, private](https://docs.soliditylang.org/en/latest/contracts.html#state-variable-visibility)

### [Function Visibility - external, public, internal, private](https://docs.soliditylang.org/en/latest/contracts.html#function-visibility)

### [2. Getter Functions](https://docs.soliditylang.org/en/latest/contracts.html#getter-functions)

The compiler automatically creates getter functions for all public state variables.

### [3. Function Modifiers](https://docs.soliditylang.org/en/latest/contracts.html#function-modifiers)

Modifiers can be used to change the behaviour of functions in a declarative way. For example, you can use a modifier to automatically check a condition prior to executing the function.

### [4. Constant and Immutable State Variables](https://docs.soliditylang.org/en/latest/contracts.html#constant-and-immutable-state-variables)

State variables can be declared as constant or immutable. In both cases, the variables cannot be modified after the contract has been constructed. For constant variables, the value has to be fixed at compile-time, while for immutable, it can still be assigned at construction time.

### [5. Functions](https://docs.soliditylang.org/en/latest/contracts.html#functions)

Functions can be defined inside and outside of contracts.

### [6. Events](https://docs.soliditylang.org/en/latest/contracts.html#events)

Solidity events give an abstraction on top of the EVM’s logging functionality. Applications can subscribe and listen to these events through the RPC interface of an Ethereum client.

### [7. Errors and the Revert Statement](https://docs.soliditylang.org/en/latest/contracts.html#errors-and-the-revert-statement)

Errors in Solidity provide a convenient and gas-efficient way to explain to the user why an operation failed. They can be defined inside and outside of contracts (including interfaces and libraries).

### [8. Inheritance](https://docs.soliditylang.org/en/latest/contracts.html#inheritance)

Solidity supports multiple inheritance including polymorphism.

### [9. Abstract Contracts](https://docs.soliditylang.org/en/latest/contracts.html#abstract-contracts)

Contracts must be marked as abstract when at least one of their functions is not implemented or when they do not provide arguments for all of their base contract constructors. Even if this is not the case, a contract may still be marked abstract, such as when you do not intend for the contract to be created directly.

### [10. Interfaces](https://docs.soliditylang.org/en/latest/contracts.html#interfaces)

Interfaces are similar to abstract contracts, but they cannot have any functions implemented.

### [11. Libraries](https://docs.soliditylang.org/en/latest/contracts.html#libraries)

Libraries are similar to contracts, but their purpose is that they are deployed only once at a specific address and their code is reused using the DELEGATECALL (CALLCODE until Homestead) feature of the EVM.

### [12. Using For](https://docs.soliditylang.org/en/latest/contracts.html#using-for)

The directive using A for B can be used to attach functions (A) as operators to user-defined value types or as member functions to any type (B). The member functions receive the object they are called on as their first parameter (like the self variable in Python). The operator functions receive operands as parameters.
