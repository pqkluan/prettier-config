# @pqkluan/prettier-config

[![build][publish-badge]][publish-action]
[![version][version-badge]][package]
[![MIT License][license-badge]][license]

Personal prettier config for javascript projects

## How to use

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

## License

MIT

[publish-badge]: https://github.com/pqkluan/prettier-config/actions/workflows/npm-publish.yml/badge.svg
[publish-action]: https://github.com/pqkluan/prettier-config/actions/workflows/npm-publish.yml
[version-badge]: https://img.shields.io/npm/v/@pqkluan/prettier-config.svg
[package]: https://www.npmjs.com/package/@pqkluan/prettier-config
[license-badge]: https://img.shields.io/npm/l/@pqkluan/prettier-config.svg
[license]: https://github.com/pqkluan/prettier-config/blob/master/LICENSE
