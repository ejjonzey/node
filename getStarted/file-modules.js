var callback = require('./callback');
var processResults = function(err, results, time){
    if (err){
        console.log("Error " + err.message);
    } else {
        console.log("The results are : " + results + " (" + time + " ms)");
    }
};

for (var i = 0; i<10;i++){
    console.log("Calling 'evenDoubler' with parameter '" + i + "'")
    callback.evenDoubler(i, processResults);
}

console.log("-----");

console.log("The foo variable from module callback = " + callback.foo);

console.log("the maxTime variable is not exported: " + callback.maxTime);