import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

export default (filepath) => {
    const extension = path.extname(filepath).split('.')[1];

    switch(extension) {
        case 'json':
            return JSON.parse(fs.readFileSync(filepath, 'utf-8'));
        case 'yml':
        case 'yaml':
            return yaml.load(fs.readFileSync(filepath, 'utf-8'));
    }
}