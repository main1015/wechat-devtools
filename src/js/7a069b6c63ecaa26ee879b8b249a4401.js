"use strict";
let curReport = (..._args) => { };
module.exports = {
    setReporter: (reporter) => {
        curReport = reporter;
    },
    report: (...args) => {
        curReport(...args);
    },
};
