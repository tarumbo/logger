const logger = require('.');
const Logger = new logger({
    defaultLogLevel: 1,
    colors: {
        error: `213`
    }
});
Logger.log("text") // Will log using the defaultLogLevel system
Logger.warning("test") // Always warning system
Logger.success("text") // Always success system
Logger.error("text") // Always error system
Logger.info("text") // Always info system