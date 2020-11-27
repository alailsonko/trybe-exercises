const readline = require("readline");

function triangule(n){
     let triArray = []
     let count = 1
     for (let i = 0; i < n; i++){
             let array = []
	     for (let j = 0; j < count; j++){
             array.push('*')
           }    
             count += 1
	     triArray.push(array.join(''))
   }
	return triArray.join('\n')
}
triangule(4)

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
 
rl.question("tamannho da base do seu triangulo ? ", function(n) {
        console.log(triangule(n));
        rl.close();
});
 
rl.on("close", function() {
    console.log("\nBYE BYE !!!");
    process.exit(0);
});


