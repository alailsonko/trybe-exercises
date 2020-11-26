function comparacao(a, b){
    if(a > b){
	return `${a} é maior que ${b}`
    } else if (a < b) {
	return `${b} é maior que ${a}`
    } else if (a === b ){
	return `${a} e ${b} são iguais`
    } else if((a === 'undefined' || null) || (b === 'undefined' || null) ){
	return 'valor nao pode ser indefinido ou nulo'
    } else {
       return 'somente numeros'
    }
}

comparacao(8, typeof fsfs)
comparacao(8, 8)
comparacao(8, 5)
comparacao(8, 10)
comparacao(8, 'dasdhas')
