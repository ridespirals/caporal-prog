const prog = require('caporal')
const pkg = require('../package.json')

prog
    .version(pkg.version)
    .command('deploy', 'Deploy an application')
    .argument('<app>', 'App to deploy', /^myapp|their-app$/)
    .argument('[env]', 'Environment to deploy on', /^dev|staging|production$/, 'local')
    .option('--tail <lines>', 'Tail <lines> lines of logs after deploy', prog.INT)
    .action((args, options, logger) => {
        console.log(require('util').inspect(args))
    });

module.exports = prog
