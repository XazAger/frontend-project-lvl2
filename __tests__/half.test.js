import fs from 'fs';
import path from 'path';
import genDiff from '../index';

const getFixuturePath = (name) => path.join(__dirname, '__fixtures__', name);

const pathJson1 = getFixuturePath('file1.json');
const pathJson2 = getFixuturePath('file2.json');
const resultPath = getFixuturePath('finish.json');

const resultJson = JSON.parse(fs.readFileSync(resultPath, 'utf-8'));

test('test', () => {
  expect(genDiff(pathJson1, pathJson2)).toEqual(JSON.stringify(resultJson, null, 2));
});
