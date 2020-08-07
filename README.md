***logger - Tarumbo***<br>
<p align="center"> <img src="https://salvage.is-inside.me/jZBiLtUZ.png" width=250 height=250/> </p>

****

**Welcome to logger -  A project by [Tarumbo](https://github.com/Tarumbo)**

****

**logger** is a **module** designed to **log anything on demand.**

****

**Code examples**

* Requiring
> Requiring the module is required.
```js
const logger = require('@tarumbo/logger');
```
* Creating a logger
> This allows us to create an instance of our logger. Options are optional. The default log level is **info**
```js
const Logger = new logger(options?);
```
> Create a logger with default log system setup.
```js
const Logger = new logger({
    defaultLogLevel: 0 // Defaults to 0, 0 is info, 1 is success, 2 is warning, 3 is error
});
```
> Create a logger with custom colors. All entries are optional.
```js
const Logger = new logger({
    colors: {
        error: `error color`,
        info: `info color`,
        warning: `warning color`,
        success: `success color`
    },
})
```
* Logging
> This demonstrates how to use some of the methods for logging.
```js
Logger.log("text") // Will log using the defaultLogLevel system
Logger.warning("test") // Always warning system
Logger.success("text") // Always success system
Logger.error("text") // Always error system
Logger.info("text") // Always info system
```
* Dev functions
> These functions aren't meant to be used, yet can be if needed.
```js
Logger.compile(`text`, `color`, `start-text`) // => start-text text (Would be styled)
Logger.base // Returns a chalk instance with properties used for logging
```