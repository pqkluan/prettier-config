# @pqkluan/prettier-config

[![Publish Action Status](https://github.com/pqkluan/prettier-config/actions/workflows/npm-publish.yml/badge.svg)](https://github.com/pqkluan/prettier-config/actions/workflows/npm-publish.yml)

Personal prettier config for javascript projects

## How-to-use

Install this module as dev dependency

```bash
yarn add --dev @pqkluan/prettier-config
```

(Optional) Remove exists prettier config file.

To apply this module config, add "prettier" key in your `package.json` file.

```
{
  // ...
  "prettier": "@pqkluan/prettier-config"
}
```

(Optional) Update Visual Studio Code setting so editor rules will be the same with Prettier formatting rules

```json
"editor.rulers": [100],
"editor.tabSize": 2,
"editor.insertSpaces": true
```
