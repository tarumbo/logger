/**
 * @typedef LoggerOptions
 * @type {Object}
 * @property {Object} [colors] The colors for the logger
 * @property {String} [colors.error] The error color
 * @property {String} [colors.success] The success color
 * @property {String} [colors.info] The info color
 * @property {String} [colors.warning] The warning color
 * @property {Number} [defaultLogLevel] The default log level, defaults to info. 0: Info, 1: Success, 2: Warning, 3: Error
 */
/*
Logger
*/
class Logger {
    /**
     * 
     * @param {LoggerOptions} options 
     */
    constructor(options) {
        this.defaults = {
            info: `blue`,
            warning: `yellow`,
            error: `red`,
            success: `green`
        }
        this.options = options || {};
        if(!this.options.colors) this.options.colors = {
            info: this.defaults.info,
            warning: this.defaults.warning,
            error: this.defaults.error,
            success: this.defaults.success
        }; else {
            Object.entries(this.options.colors).map((prop) => this.options.colors[prop[0]] = prop[1]);
            Object.entries(this.defaults).filter(prop => !this.options.colors[prop[0]]).map((prop) => this.options[prop[0]] = prop[1])
        }
        console.log(this.options);
        this.chalk = require('chalk');
        this.logsymbols = require('log-symbols');
        this.logLevels = {
            0: "info",
            1: "success",
            2: "warning",
            3: "error"
        };
        if(this.options.defaultLogLevel) this.level = this.logLevels[this.options.defaultLogLevel || 0]; else this.level = "info";
    }
    get base() {
        return this.chalk.bold.underline
    }
    compile(txt, color, start) {
        return `${start} ${this.chalk[color] ? this.base[color](txt) : this.base.hex(color)(txt)}`
    }
    error(msg) {
        return console.log(this.compile(msg, this.options.colors.error || `red`, this.logsymbols.error));
    }
    info(msg) {
        return console.log(this.compile(msg, this.options.colors.info || `blue`, this.logsymbols.info));
    }
    warning(msg) {
        return console.log(this.compile(msg, this.options.colors.warning || `yellow`, this.logsymbols.warning));
    }
    success(msg) {
        return console.log(this.compile(msg, this.options.colors.success || `green`, this.logsymbols.success));
    }
    log(msg) {
        return console.log(this.compile(msg, this.options.colors[this.level] || this.defaults[this.level], this.logsymbols[this.level]));
    };
};
module.exports = Logger;