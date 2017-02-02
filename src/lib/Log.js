// Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE_Logger in the project root for license information.
// ORIGINAL: https://github.com/IdentityModel/oidc-client-js (found no other source)

// Modified by Mario Giugno. Applied (most of) the projects easlint rules.

const nopLogger = {
    warn() { },
    info() { },
    error() { }
};

const NONE = 0;
const ERROR = 1;
const WARN = 2;
const INFO = 3;

let logger;
let level;

export default class Log {
    static get NONE() { return NONE }
    static get ERROR() { return ERROR }
    static get WARN() { return WARN }
    static get INFO() { return INFO }

    static reset(){
        level = INFO;
        logger = nopLogger;
    }

    static get level(){
        return level;
    }

    static set level(value){
        if (NONE <= value && value <= INFO){
            level = value;
        } else {
            throw new Error("Invalid log level");
        }
    }

    static get logger(){
        return logger;
    }

    static set logger(value){
        if (value.info && value.warn && value.error){
            logger = value;
        } else {
            throw new Error("Invalid logger");
        }
    }

    static info(...args){
        if (level >= INFO){
            logger.info(...args)
        }
    }
    static warn(...args){
        if (level >= WARN){
            logger.warn(...args);
        }
    }
    static error(...args){
        if (level >= ERROR){
            logger.error(...args)
        }
    }

    /* Modified (added) */
    static infoIf(condition, args){
        if(condition){
            Log.info(args);
        }
    }
    static warnIf(condition, args){
        if(condition){
            Log.warn(args);
        }
    }
    static errorIf(condition, args){
        if(condition){
            Log.error(args);
        }
    }

    /* Mod end */
}

Log.reset();