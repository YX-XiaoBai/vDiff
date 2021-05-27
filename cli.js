#!/usr/bin/env node

const {Command} = require('commander');
// const logger = require('./src/config/log');
const { urlCompareUrl, pathComparePath, pathCompareUrl } = require('./src/lib/compare');
const program = new Command();

function errorColor(str) {
  // Add ANSI escape codes to display text in red.
  return `\x1b[31m${str}\x1b[0m`;
}

program
  .configureOutput({
    writeOut: (str) => process.stdout.write(`[OUT]: ${str}`),
    writeErr: (str) => process.stdout.write(`[ERR]: ${str}`),
    outputError: (str, write) => write(errorColor(str))
  })

program
  .usage('[options]')
  .version('0.0.1', '-v, --version', 'output the current version')
  .description('Description:\n  A ViewDiff Tool\n\nAuthor:\n  YX-XiaoBai')

/**
 * @command
 * @usage diffUrl <url> <url2>
 */
program
  .command('diffUrl <url> <url2>')
  .description('input two urls, contrast visual differences.')
  .action(function diffUrl(url, url2){
    urlCompareUrl(url, url2)
  })

/**
 * @command
 * @usage diffUrl <path> <path>
 */
program
  .command('diffPath <path> <path>')
  .description('input two paths, contrast visual differences.')
  .action(function diffPath(path, path){
    pathComparePath(path, path)
})

/**
 * @command
 * @usage diffPU <path> <url>
 */
program
  .command('diffPU <path> <url>')
  .description('input one path and one url, contrast visual differences.')
  .action(function diffPU(path, url){
    pathCompareUrl(path, url)
})


program.parse(process.argv)

