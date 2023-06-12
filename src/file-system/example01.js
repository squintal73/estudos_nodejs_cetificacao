/**
 * Description: Open and close file by name with concrete path.
 */

/** Import generics dependences */
import fs from 'fs';
import path from 'path';
import 'pretty-console-colors';

const __dirname = path.resolve();

// Declare mail function for open and close file by name.
const getFileByName = (fileName) => {
  fs.open(`${__dirname}/src/file-system/${fileName}`, 'r', (err, fd) => {
    console.info('[getFileByName] fd', fd);
  });
};

// Get file with json extension.
getFileByName('file.json');

// Get file with txt extension.
getFileByName('file.txt');

// Get file with txt extension but return error, file no found.
getFileByName('file-nofound.txt');
