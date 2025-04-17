<h1 align="center">Tiny Error</h1>

<p align="center">A minimal library for throwing errors in development mode only.</p>

<p align="center">
  <!-- prettier-ignore-start -->
  <!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
  <a href="#contributors" target="_blank"><img alt="👪 All Contributors: 1" src="https://img.shields.io/badge/%F0%9F%91%AA_all_contributors-1-21bb42.svg" /></a>
  <!-- ALL-CONTRIBUTORS-BADGE:END -->
  <!-- prettier-ignore-end -->
  <a href="https://github.com/lukaszkowalik2/tiny-error/blob/main/.github/CODE_OF_CONDUCT.md"
    target="_blank"><img alt="🤝 Code of Conduct: Kept"
      src="https://img.shields.io/badge/%F0%9F%A4%9D_code_of_conduct-kept-21bb42" /></a>
  <a href="https://codecov.io/gh/lukaszkowalik2/tiny-error" target="_blank"><img alt="🧪 Coverage"
      src="https://img.shields.io/codecov/c/github/lukaszkowalik2/tiny-error?label=%F0%9F%A7%AA%20coverage" /></a>
  <a href="https://github.com/lukaszkowalik2/tiny-error/blob/main/LICENSE.md" target="_blank"><img
      alt="📝 License: MIT"
      src="https://img.shields.io/badge/%F0%9F%93%9D_license-MIT-21bb42.svg" /></a>
  <a href="http://npmjs.com/package/tiny-error" target="_blank"><img alt="📦 npm version"
      src="https://img.shields.io/npm/v/tiny-error?color=21bb42&label=%F0%9F%93%A6%20npm" /></a>
  <img alt="💪 TypeScript: Strict"
    src="https://img.shields.io/badge/%F0%9F%92%AA_typescript-strict-21bb42.svg" />
</p>

## Description

`tiny-error` lets you throw an `Error` when a condition fails, but only when
`process.env.NODE_ENV !== 'production'`. In production builds all calls to
`error(...)` become no‑ops, adding zero bytes to your final bundle.

### Benefits

- Clear error messages during development
- No bundle size impact in production
- No need for manual `if (process.env.NODE_ENV !== 'production')` guards

## Features

- Throw errors only in development
- Tiny footprint (few bytes after minification + gzip)
- Zero dependencies
- Fully tree‑shakable

## Installation

```bash
npm install tiny-error
# or
yarn add tiny-error
# or
pnpm add tiny-error
```

## Usage

```js
import error from "tiny-error";

function divide(a, b) {
	// In dev, if b === 0, throws: Error("Cannot divide by zero")
	error(b !== 0, "Cannot divide by zero");
	return a / b;
}

// In production, the above call is stripped out:
// function divide(a, b) { return a / b; }
```

## API

### error(condition: boolean, message: string): void

- **condition** – if falsy, an `Error` is thrown
- **message** – the text for `Error.message`

Example:

```js
error(user != null, "No authenticated user found");
```

### Why tiny-error?

- Minimal size and zero dependencies
- Straightforward and readable API
- Easily replaceable or customizable in the future

## Development

See [`.github/CONTRIBUTING.md`](./.github/CONTRIBUTING.md), then [`.github/DEVELOPMENT.md`](./.github/DEVELOPMENT.md).
Thanks! 💖
