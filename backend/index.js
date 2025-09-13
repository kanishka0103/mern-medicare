// index.js at project root
const { exec } = require('child_process');
exec('node backend/server.js', (err, stdout, stderr) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(stdout);
  console.error(stderr);
});
