process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdin.on('data', function(chunk){
    process.stdout.write('data! -> ' + chunk);
});

process.stdin.on('end', function(){
    process.stderr.write('End!\n');
});

process.on('SIGTERM', function(){
    process.stderr.write('why you trying to kill me, yo?!');
});

console.log("node is running as process #" + process.pid);