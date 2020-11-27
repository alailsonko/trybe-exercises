function square(n){ 
   let arraySquare = []
   for (let i = 0; i < n; i++){
      let array = []

     for (let j = 0; j < n; j++){
           array.push('*')
    }

      arraySquare.push(array.join(''))
 

   }
       return arraySquare.join('\n')
}

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("tamanho do seu quadrado ? ", function(n) {
        console.log(square(n));
        rl.close();
});

rl.on("close", function() {
    console.log("\nBYE BYE !!!");
    process.exit(0);
});

