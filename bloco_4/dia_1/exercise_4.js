function bool(a){
    if (a > 0){
       return 'positive'
    } else if(a < 0) {
       return 'negative'
    } else if (a === 0){
       return 'zero'
    } else {
      return 'somente numeros'
    }
}

bool(4)
bool(-4)
bool(0)
bool('dshauhdau')
