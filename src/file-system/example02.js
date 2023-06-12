/**
 * Description: Open and close with Url and Buffer.
 */

/** Import generics dependences */
import fs from 'fs';
import 'pretty-console-colors';

// Declare mail function for open and close file by name.
const getFileByUrl = (fileName) => {
  fs.open(`${fileName}`, 'r', (errOpen, fd) => {
    if (errOpen) throw errOpen;
    fs.close(fd, (errClose) => {
      if (errClose) throw errClose;
    });
  });
};

// Get file with json extension with Url.
getFileByUrl('file.json');

// Declare mail function for open and close file by name.
const getFileByBuffer = (fileName) => {
  fs.open(Buffer.from(`${fileName}`), 'r', (errOpen, fd) => {
    if (errOpen) throw errOpen;
    fs.close(fd, (errClose) => {
      if (errClose) throw errClose;
    });
  });
};

// Get file with json extension with Buffer.
getFileByBuffer('file.json');
