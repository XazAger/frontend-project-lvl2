import { test, expect } from '@jest/globals';
import path from 'path';
import genDiff from '../index';
import parser from '../src/parser.js';

const getFixuturePath = (name) => path.join(__dirname, '__fixtures__', name);

const pathJson1 = getFixuturePath('file1.json');
const pathJson2 = getFixuturePath('file2.json');
const resultPathJson = getFixuturePath('result.json');

const pathYaml1 = getFixuturePath('file1.yaml');
const pathYaml2 = getFixuturePath('file2.yaml');
const resultPathYaml = getFixuturePath('result.yaml');

const resultJson = parser(resultPathJson);
const resultYaml = parser(resultPathYaml);

test('test', () => {
  expect(genDiff(pathJson1, pathJson2)).toEqual(JSON.stringify(resultJson, null, 2));
  expect(genDiff(pathYaml1, pathYaml2)).toEqual(JSON.stringify(resultYaml, null, 2));
});
