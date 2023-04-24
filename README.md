# IdentityVaultErrorLatest

This repo is to reproduce an issue with importing from @ionic-enterprise/identity-vault.

Running

`nx run mobile-authentication:test`

Will result in an error like this:

```
  ● Test suite failed to run

    Jest encountered an unexpected token

    Jest failed to parse a file. This happens e.g. when your code or its dependencies use non-standard JavaScript syntax, or when Jest is not configured to support such syntax.

    Out of the box Jest supports Babel, which will be used to transform your files into valid JS based on your Babel configuration.

    By default "node_modules" folder is ignored by transformers.

    Here's what you can do:
     • If you are trying to use ECMAScript Modules, see https://jestjs.io/docs/ecmascript-modules for how to enable it.
     • If you are trying to use TypeScript, see https://jestjs.io/docs/getting-started#using-typescript
     • To have some of your "node_modules" files transformed, you can specify a custom "transformIgnorePatterns" in your config.
     • If you need a custom transformation specify a "transform" option in your config.
     • If you simply want to mock your non-JS modules (e.g. binary assets) you can stub them out with the "moduleNameMapper" config option.

    You'll find more details and examples of these config options in the docs:
    https://jestjs.io/docs/configuration
    For information about custom transformations, see:
    https://jestjs.io/docs/code-transformation

    Details:

    /Users/wilgert/Projects/vattenfall/identity-vault-error-latest/node_modules/@ionic-enterprise/identity-vault/dist/index.js:1864
    export { AndroidBiometricCryptoPreference, AuthMode, BiometricPermissionState, BiometricSecurityStrength, BrowserVault, Device, DeviceErrorCodes, DeviceSecurityType, SupportedBiometricType, Vault, VaultErrorCodes, VaultMigrator, VaultType };
    ^^^^^^

    SyntaxError: Unexpected token 'export'

      1 | import { Injectable } from '@angular/core';
    > 2 | import {BrowserVault, Vault, VaultType} from '@ionic-enterprise/identity-vault';
        | ^
      3 |
      4 |
      5 | @Injectable({

      at Runtime.createScriptFromCode (../../../node_modules/@jest/core/node_modules/jest-runtime/build/index.js:1495:14)
      at Object.<anonymous> (src/lib/mobile-auth.service.ts:2:1)
      at Object.<anonymous> (src/lib/mobile-auth.service.spec.ts:2:1)

Test Suites: 1 failed, 1 total
Tests:       0 total
Snapshots:   0 total
Time:        2.72 s
Ran all test suites.
```
