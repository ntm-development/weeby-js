<div align="center">
  <br />
  <p>
    <a href="https://weebyapi.xyz/"><img src="https://cdn.weebyapi.xyz/img/static/WeebyJSLogo.png" width="546" alt="weebyjs logo" /></a>
  </p>
  <br />
  <p>
    <a href="https://discord.gg/G2rb53z"><img src="https://img.shields.io/discord/602830493536223232?color=5865F2&logo=discord&logoColor=white" alt="Discord server" /></a>
    <a href="https://www.npmjs.com/package/weeby-js"><img src="https://img.shields.io/npm/v/weeby-js.svg?maxAge=3600" alt="NPM version" /></a>
    <a href="https://www.npmjs.com/package/weeby-js"><img src="https://img.shields.io/npm/dt/weeby-js.svg?maxAge=3600" alt="NPM downloads" /></a>
    <a href="https://github.com/ntm-development/weeby-js/actions"><img src="https://github.com/ntm-development/weeby-js/workflows/Node.js%20CI/badge.svg" alt="Build status" /></a>
    <a href="https://www.buymeacoffee.com/ntmnathan"><img src="https://img.shields.io/badge/donate-Buy%20me%20a%20coffee-F96854.svg" alt="Donate" /></a>
  </p>
</div>

# Weeby-JS
Weeby-JS is the official JavaScript API Wrapper which is powerful and allows easy interaction with the [Weeby API](https://weebyapi.xyz/) endpoints. Actively maintained by [NTM Development](https://dev.ntmcentral.xyz/) and community members, Weeby-JS receives new updates shortly after new features have been released to the API.

## Features
- Super simple and easy to use
- Built in documentation
- Includes all methods from Weeby API
- Object-Oriented
- Beginner friendly
- Support for TypeScript

## Installation
```bash
npm install weeby-js --save
```

## Authentication
`weeby-js` requires an authorization token which can be obtained by doing one of the following methods: 
- Joining the [NTM Central Discord Server](https://weebyapi.xyz/discord), and then running the `/apply` command with the Weeby API bot. 
- Logging into the [Dashboard](https://weebyapi.xyz/dashboard) and then using the [application form](https://weebyapi.xyz/dashboard/apply) and filling in the required fields.

To learn more in deep about the application process, please visit the [Getting Started](https://weebyapi.xyz/gettingstarted) page. 

> Upon being accepted into Weeby API. It is very important to **never** show this token to anybody.

## Example Usage

```js
const WeebyAPI = require('weeby-js');
const weeby = new WeebyAPI('YOUR_TOKEN');

const image = await weeby.generators.oneImage({ type: '3000years', image: 'https://i.imgur.com/qgKvcQv.png' });
message.channel.send({files: [{ attachment: image }]}); // -> Image Buffer
```

## Support
If you have found an issue while using this wrapper or have any suggestions? Feel free to join the [NTM Discord Server](https://weebyapi.xyz/discord), send an [issue](https://github.com/ntm-development/weeby-js/issues/new) or [pull request](https://github.com/ntm-development/weeby-js/pulls). We'll be happy to help and take a look! 

## Thanks!
Thanks for checking out `weeby-js`, a NPM module development and maintained by NTM Development.

I am currently maintaining this during my spare time, so if you would like to support me, Feel free to do so by donating [here](https://buymeacoffee.com/ntmnathan) on Buy me a coffee.

Also, don't forget to star the repo! 😋

## ⚖️ License
The `GNU General Public License v3.0` applies to this repository. Please see the `LICENSE` file to learn more.