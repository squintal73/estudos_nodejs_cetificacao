/**
 * Description: Create https server and show lifecycle-events.
 * You need write in your browser: https://localhost:443/
 */

/** Import generics dependences */
import https from 'https';
import fs from 'fs';
import path from 'path';
import 'pretty-console-colors';

/** Define configuration */
const config = {
  port: 443,
};

const __dirname = path.resolve();

// Create server instance.
const server = https.createServer({
  key: fs.readFileSync(`${__dirname}/src/http2/localhost-privkey.pem`),
  cert: fs.readFileSync(`${__dirname}/src/http2/localhost-cert.pem`),
});

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
    response.end(null, 'utf8', () => {
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
