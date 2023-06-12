/**
 * Description: Read folder and file content with readdirSync and readFileSync functions.
 */

/** Import generics dependences */
import fs from 'fs';
import 'pretty-console-colors';

const contentFolderSync = (pathName) => {
  try {
    const content = fs.readdirSync(`${pathName}`);
    console.log('[contentFolderSync]', content);
  } catch (err) {
    console.error('[contentFolderSync] err', err);
  } finally {
    console.info('[contentFolderSync] finish');
  }
};

contentFolderSync('test');

const contentFileSync = (pathName) => {
  try {
    const content = fs.readFileSync(`${pathName}`);
    console.log('[contentFileSync]', Buffer.from(content).toString());
  } catch (err) {
    console.error('[contentFileSync] err', err);
  } finally {
    console.info('[contentFileSync] finish');
  }
};

contentFileSync('test/file1.txt');
