/**
 * Description: In try/catch with async and sync functions.
 */

/** Import generics dependences */
import { readFile, readFileSync } from 'fs';
import 'pretty-console-colors';

const withTryCatch = () => {
  try {
    readFile('/any.file', (err, data) => {
      if (err) {
        // Mistaken assumption: throwing here...
        throw err;
      }
      console.log(data);
    });
  } catch (err) {
    // This console will not work.
    console.error('[withTryCatch]', 'There was an error', err);
  }
};
/* This will not work. The JavaScript try/catch mechanism cannot be used 
 * to intercept errors generated by asynchronous APIs
 */
withTryCatch();

const withTryCatchSync = () => {
  try {
    const data = readFileSync('/any.file');
    console.log(data);
  } catch (err) {
    console.error('[withTryCatchSync]', 'There was an error', err);
  }
};
withTryCatchSync();
