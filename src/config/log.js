const log4js = require('log4js');

log4js.configure({
    appenders: {
        logfile: {
            type: 'dateFile',
            filename: 'logs/all-logs.log',
            pattern: "yyyy-MM-dd",
            maxLogSize: 1024 * 1024 * 8,
            backups: 7,
            compress: true,
            alwaysIncludePattern: true,
            keepFileExt: true
        },
        display: {
            type: 'console'
        }
    },
    categories: {
        default: {
            appenders: ['logfile', 'display'],
            level: 'INFO'
        }
    },
    // "pm2": true
});

const logger = log4js.getLogger();
logger.debug('WILL BE LOGGED IN all-logs.log')

module.exports = logger;