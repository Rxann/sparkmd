# sparkmd

A lightweight and speedy Markdowns renderer for the console

## Installation

`npm install sparkmd`

## Example Usage

Sparkmd exports both CJS and ESM Files
ESM:

```ts
import spark from "sparkmd";
spark("example.md");
```

CJS:

```js
const spark = require("sparkmd");
spark("example.md");
```

## Supported Markdown Syntax

Currently supported features are:

```
Headers up to - ###
Bold
Italic
Strikethrough
Code
```

Coming soon features:

```
Links
```

## Contributing

Please fork the repository and submit a pull request.
