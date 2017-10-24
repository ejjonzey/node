var maxTime = 1000;
// if input is even, double it
// if input is odd, error
//(call takes random amount of time < 1sec)
var evenDoubler = function(v, callback){
    var waitTime = Math.floor(Math.random()*(maxTime+1));
    if (v%2){
        setTimeout(function(){
            callback(new Error("Odd Input"));
        }, waitTime);
    } else {
        setTimeout(function(){
            callback(null, v*2, waitTime);
        }, waitTime);
    }
};
var count = 0;

// for (var i = 0;i<10;i++){
//     console.log("calling evenDoubler for value: " + i);
//     evenDoubler(i, function(err, results, time){
//     if(err){
//         console.log("Error: " + err.message);
//     } else{
//         console.log("the results are: " + results + " (" + time + " ms)");
//     } if(++count === 10){
//         console.log("Done!");
//     }
// });
// };

module.exports.evenDoubler = evenDoubler;

module.exports.foo = "bar";