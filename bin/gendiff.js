#!/usr/bin/env node
import { Command } from 'commander/esm.mjs';
import makeDiff from '../index.js';

const program = new Command();
program
  .version('0.0.1')
  .description('Compares two configuration files and shows a difference')
  .arguments('<filepath1> <filepath2>')
  .action((file1, file2) => {
      console.log(makeDiff(file1, file2))
  })
  .option('-f, --format [type]', 'output format');

program.parse(process.argv);