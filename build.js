const fs = require('fs');
const path = require('path');
const archiver = require('archiver');

// Create dist directory
const distDir = path.join(__dirname, 'dist');
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

// Create zip file for Lambda
const output = fs.createWriteStream(path.join(distDir, 'hello.zip'));
const archive = archiver('zip', { zlib: { level: 9 } });

output.on('close', () => {
  console.log('✅ Lambda function packaged: hello.zip');
});

archive.on('error', (err) => {
  throw err;
});

archive.pipe(output);
archive.file(path.join(__dirname, 'src/hello/index.js'), { name: 'index.js' });
archive.finalize();
