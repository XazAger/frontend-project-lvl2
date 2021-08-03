import _ from 'lodash';
import parser from './src/parser.js';

export default (filepath1, filepath2) => {

  const obj1 = parser(filepath1);
  const obj2 = parser(filepath2);

  const operators = ['+', '-'];

  const keys1 = _.keys(obj1);
  const keys2 = _.keys(obj2);
  const allKeys = _.union(keys1, keys2);
  const keysByAlphabet = allKeys.sort();

  const newObject1 = keysByAlphabet.reduce((result, key) => {
    if (_.has(obj2, key) && obj1[key] !== obj2[key]) {
      result[`${operators[0]} ${key}`] = obj2[key];
    } else if (!_.has(obj2, key) && obj1[key] === obj2[key]) {
      result[`${operators[0]} ${key}`] = obj1[key];
    } else if ((_.has(obj1, key) && _.has(obj2, key) && obj1[key] === obj2[key])) {
      result[`  ${key}`] = obj1[key];
    }
    return result;
  }, {});

  const newObject2 = keysByAlphabet.reduce((result, key) => {
    if (_.has(obj1, key) && obj2[key] !== obj1[key]) {
      result[`${operators[1]} ${key}`] = obj1[key];
    } else if (!_.has(obj1, key) && obj2[key] === obj1[key]) {
      result[`${operators[1]} ${key}`] = obj2[key];
    } else if ((_.has(obj1, key) && _.has(obj2, key) && obj2[key] === obj1[key])) {
      result[`  ${key}`] = obj2[key];
    }
    return result;
  }, {});

  const unionResults = Object.assign(newObject2, newObject1);

  return JSON.stringify(unionResults, null, 2);
};
