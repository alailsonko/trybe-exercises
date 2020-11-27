
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
	   if(count % 2 !== 0) {
           for (let j = 0; j < count; j++){
		
		   
		   if((j === 0) || (j === count - 1) || (count === n)) {
		    array.push('*')
		   } else  {
                    array.push(" ")
		   }
           }
	   }

           count += 1
           countSpace--
           triArray.push(array.join(''))
 
   }
        return triArray.join('\n')
}
 
triangulo(5)
triangulo(7)
triangulo(9)
triangulo(11)


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
 
rl.question("click enter",function(s) {
        console.log(triangulo(3), '\n');
        console.log(triangulo(5), '\n');
        console.log(triangulo(7), '\n');
        console.log(triangulo(9), '\n');
        console.log(triangulo(11), '\n');
        console.log(triangulo(13), '\n');
        console.log(triangulo(15), '\n');
        console.log(triangulo(17), '\n');
        console.log(triangulo(19), '\n');
        console.log(triangulo(21), '\n');
        console.log(triangulo(23), '\n');
        console.log(triangulo(25), '\n');
        console.log(triangulo(27), '\n');
	console.log('my triangle')
        rl.close();
});
 
rl.on("close", function() {
    console.log("\nBYE BYE !!!");
    process.exit(0);
});
