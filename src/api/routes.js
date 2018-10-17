'use strict'

const Glob = require('glob')

exports.plugin = {
    name: 'routes',
    register: function (server, options) {
        Glob.sync('**/route.js', {cwd: __dirname, ignore: 'routes.js'})
            .forEach(x => server.route(require('./' + x)))
    }
}
