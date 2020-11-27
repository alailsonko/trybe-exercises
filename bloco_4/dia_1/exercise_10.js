function lucro(custoProduto, valorVenda){
   const units = 1000
   const valorCustoTotal = custoProduto*(20/100)*units
   const lucro = valorVenda*units - valorCustoTotal
	
	if(lucro <= 0){
           return 'lucro abaixo de zero'
	}

	return lucro
}

lucro(20, 40)
lucro(20, -40)
lucro(20, 4)
