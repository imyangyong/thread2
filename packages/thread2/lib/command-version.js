var utils = require('./backend-utils/utils')

module.exports = {
    execute: function(opts) {
        opts = opts || {}

        var packageInfo = require('../package.json')

        utils.log(['info: thread2 版本 ' + packageInfo.version])
    }
}