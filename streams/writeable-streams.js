console.log("stdout is writeable? " + process.stdout.writeable);

process.stdout.write("hello");
process.stdout.write("world");
