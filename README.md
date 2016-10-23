## Build Status

[![npm version](https://badge.fury.io/js/ng2-google-recaptcha.svg)](https://badge.fury.io/js/ng2-google-recaptcha)

**Master Branch**

[![Build Status](https://travis-ci.org/leewinder/ng2-google-recaptcha.svg?branch=master)](https://travis-ci.org/leewinder/ng2-google-recaptcha) 
[![Dependency Status](https://dependencyci.com/github/leewinder/ng2-google-recaptcha/badge)](https://dependencyci.com/github/leewinder/ng2-google-recaptcha)

**Develop Branch**

[![Build Status](https://travis-ci.org/leewinder/ng2-google-recaptcha.svg?branch=develop)](https://travis-ci.org/leewinder/ng2-google-recaptcha) 

<br>

## Overview

An Angular 2 module implementing Google's reCAPTCHA that actually works, requires no additional dependancies and only needs a single import.

<br>

![](https://cloud.githubusercontent.com/assets/1649415/18009234/3c180d48-6ba3-11e6-9f21-c71d3b1f7bd8.gif)

## Dependancies
Currently built against Angular ^2.0.0

ng2-google-recaptcha has the following additional dependancies
- [Typings](https://www.npmjs.com/package/tslerp): `npm install typings --global`

<br>

## Installation
1. Add the package to your 'dependencies' list in `package.json` and run `npm install`

  `"ng2-google-recaptcha": "^1.0.0"`
  
  Optionally, you can manually install the package using the npm command line

  `npm install ng2-google-recaptcha --save`
  
2. Add ng2-google-recaptcha to both your `map` and `packages` structures in `systemjs.config.js`

  ```javascript
  var map = {
    ...
    'ng2-google-recaptcha': 'node_modules/ng2-google-recaptcha'
  };
  ```
  
  ```javascript
  var packages = {
    ...
    'ng2-google-recaptcha': { main: 'index.js', defaultExtension: 'js' },
  };
  ```
  
3. Optionally, add the `rootDir` option to `tsconfig.json` to make sure TypeScript's default root path algorithm doesn't pull in the `node_modules` folder

<br>

## Usage

All the examples shown below are taken from the [samples application](https://github.com/leewinder/ng2-google-recaptcha/tree/master/samples).

### Building and Running the Sample Application
Check out the repository, browse to the './samples' folder and run `npm install` to install all the required dependancies.

**Note**: Running `npm install` on the sample project requires that Python 2.7.x is available on the command line as it runs a couple of Python scripts to correctly set up the npm_modules folder.

ng2-google-recaptcha is developed in [Visual Studio Code](https://code.visualstudio.com/) so once `npm install` has finished you should be able to open the './samples' folder in VS Code and it will run out of the box (by default it uses lite-server which is installed as part of `npm install`).

If you are not using Visual Studio Code, browse to the './samples' folder and run `tsc` to build the application.  Then open your local server of choice pointing to ./samples as the root directory.

### Importing The 'ng2-google-recaptcha' Module
To use ng2-google-recaptcha, you need to import the Ng2GoogleRecaptchaModule into the relevent module in your application.  In the sample application this is done in the entry module - [app.module.ts](https://github.com/leewinder/ng2-google-recaptcha/blob/master/samples/src/app/app.module.ts)

```TypeScript
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { Ng2GoogleRecaptchaModule }  from 'ng2-google-recaptcha';

@NgModule({
    imports: [
        BrowserModule,
        Ng2GoogleRecaptchaModule,
    ],

    bootstrap: [
        AppComponent,
    ],
})
export class AppModule { }
```

<br>

## Change Log

### 1.0.0
* Initial release
