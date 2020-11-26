function programa(c, a, b){
    switch(c){
        case '+':
            return a + b
            break
        case '-':
            return a - b
            break   
        case '*':
            return a * b
            break
        case '/':
            return a / b
            break
        case '%':
            return a % b
            break
        default:
            return 'insert + or - or * or / or %'
  }
}

programa('+', 4, 6)
programa('-', 4, 6)
programa('*', 4, 6)
programa('/', 4, 6)
programa('%', 4, 6)
programa('wrong operator', 4, 6)
