var fs = require('fs');

if(fs.existsSync('temp')){
    console.log('directory exists, removing...');
    if(fs.existsSync('temp/new.txt')){
        fs.unlinkSync('temp/new.txt');
    }
    fs.rmdirSync('temp');
}

fs.mkdirSync('temp');
if(fs.existsSync('temp')){
    process.chdir('temp');
    fs.writeFileSync('test.txt', 'this is test text for file');
    fs.renameSync('test.txt', 'new.txt');
    console.log('file has size: ' + fs.statSync('new.txt').size + ' bytes');
    console.log('file contents: ' + fs.readFileSync('new.txt').toString());
}