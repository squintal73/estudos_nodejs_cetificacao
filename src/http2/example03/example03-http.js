/**
 * Description: Create http server and return static file.
 * See that the connection open and close for each request.
 * You need write in your browser: http://localhost:3000/
 */

/** Import generics dependences */
import http from 'http';
import fs from 'fs';
import path from 'path';
import 'pretty-console-colors';

const __dirname = path.resolve();

/** Define configuration */
const config = {
  host: '127.0.0.1',
  port: 3000,
};

// Create server instance.
const server = http.createServer();

// Set listen function and set config.
server.listen(config, () => {
  console.log(`🚀 Server   | Running on: ${config.host} and port: ${config.port}`);
});
// [1] Server Event for show listening server.
server.on('listening', () => {
  console.log('👂 Server   | Listening\n');
});
// [2] Server Event for show connection http.
server.on('connection', () => {
  console.log('🔗 Server   | Connection ⤵️');
  console.log('---------- | -------------');
});
// [-] Server Event if server has an error.
server.on('close', () => {
  console.log('🚪 Server   | Close');
});
// [-] Server Event if server has an error.
server.on('error', (err) => {
  console.log('❌ Server   | Error', err);
});
// [3] Server Event when received and request http.
server.on('request', (request, response) => {
  console.log('👉 Server   | Request ⤵️');

  request.on('resume', () => {
    console.log('👀 Request  | Resume ⤵️');
  });
  request.on('data', () => {
    console.log('👀 Request  | Data ⤵️');
  });
  request.on('end', () => {
    console.log('👀 Request  | End ⤵️');

    // Set statusCode and data for end response.
    response.statusCode = 200;
    response.setHeader('Content-Type', 'image/jpeg');
    const result = fs.readFileSync(`${__dirname}/src/http2/example03/statics/jae-park-7GX5aICb5i4-unsplash.jpg`);
    response.end(result, 'utf8', () => {
      console.log('👀 Response | End ⤵️');
    });
  });
  request.on('close', () => {
    console.log('🚪 Request  | Close ⤵️');
  });
  request.on('error', () => {
    console.log('❌ Request  | Error');
  });

  response.on('close', () => {
    console.log('🚪 Response | Close 🏁');
  });
  response.on('finish', () => {
    console.log('👈 Response | Finish ⤵️');
  });
});
