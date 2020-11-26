function comparacao(a, b, c){
     if(a > (b && c)){
	return a
     } else if (b > (a && c)){
        return b
     } else if (c > (a && b)){
        return c
     }
}

comparacao(13,33,44)
