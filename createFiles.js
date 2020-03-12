fs = require('fs');

fs.mkdir('./foo', { recursive: true }, (err) => {
  if (err) throw err;
});

for (var i = 0; i < 300; i++) {
  fs.writeFile(`./foo/a${i}.txt`, 'random text', (err) => {
    if (err) throw err;
  });
}