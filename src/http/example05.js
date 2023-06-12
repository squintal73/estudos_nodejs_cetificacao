/**
 * Description: Request to url with method POST and port 80 send and received JSON object.
 */

/** Import generics dependences */
import http from 'http';
import 'pretty-console-colors';

// Create request method.
const req = http.request({
  hostname: 'jsonplaceholder.typicode.com',
  port: 80,
  path: '/posts',
  method: 'POST',
}, (res) => {
  console.log('👉 Request   | Response ⤵️ ');
  console.log('👀 Response  | statusCode ⤵️ ', res.statusCode);
  console.log('👀 Response  | statusMessage ⤵️ ', res.statusMessage);

  // Get received content.
  res.on('data', (content) => {
    console.log('👀 Response  | data ⤵️ ', JSON.parse(content));
  });
  // Event close.
  res.on('close', () => {
    console.log('🚪 Response  | close 🏁');
  });
});

// Event error.
req.on('error', (e) => {
  console.log('❌ Request   | error', e.message);
});
// Event close.
req.on('close', () => {
  console.log('🚪 Request   | close 🏁');
});

// Send request.
req.write(JSON.stringify({
  title: 'My first content',
}));
req.end();
