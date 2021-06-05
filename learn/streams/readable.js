const { Readable } = require('stream');

const inStream = new Readable({
  read() {}
});

inStream.push('XYZ');
inStream.push('ABC');

inStream.push(null);

inStream.pipe(process.stdout);

const inStream2 = new Readable({
  read(size) {
    this.push(String.fromCharCode(this.currentCharCode++));
    if(this.currentCharCode > 90) {
      this.push(null);
    }
  }
});

inStream2.currentCharCode = 65;

inStream2.pipe(process.stdout);