const prog = require('caporal')

prog
    .version('0.0.1')
    .command('deploy', 'Deploy an application')
    .argument('<app>', 'App to deploy', /^myapp|their-app$/)
    .argument('[env]', 'Environment to deploy on', /^dev|staging|production$/, 'local')
    .option('--tail <lines>', 'Tail <lines> lines of logs after deploy', prog.INT)
    .action((args, options, logger) => {
        console.log(require('util').inspect(args))
    });

prog.parse(process.argv)

