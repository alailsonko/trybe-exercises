function triangulo(a, b, c){
   const somaAngle = a + b + c
   if(somaAngle === 180){
      return `${somaAngle} is triangule.`
   } else if (somaAngle > 180 || somaAngle < 180) {
      return `${somaAngle} is not triangule.`
   } else {
    return 'invalid values'
   }
}
   
triangulo(60, 60, 60)
triangulo(60, 60, 70)
triangulo(60, 60, 40)
triangulo(60, 60, 'faoifa')
