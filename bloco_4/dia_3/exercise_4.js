const readline = require('readline')

function triangulo(n){
       let triArray = []
	let count = 1
	let countSpace = n - 1
   for (let i = 0; i < n; i++){
           let array = []
            for (let s = 0; s < countSpace; s += 2){
               array.push(' ')
	    }
	   for (let j = 0; j < count; j++){
               array.push('*')
	   }
	   count += 1
	   countSpace--
	   triArray.push(array.join(''))

   }
	return triArray.join('\n')
}

triangulo(5)

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
 
rl.question("tamannho da base do seu triangulo ? ", function(n) {
        console.log(triangulo(n));
        rl.close();
});
 
rl.on("close", function() {
    console.log("\nBYE BYE !!!");
    process.exit(0);
});


