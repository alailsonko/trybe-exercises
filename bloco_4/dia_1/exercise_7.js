function percent(mark){
    if(mark >= 90 && mark <= 100 ){
     return 'A'
    }else if(mark >= 80 && mark < 90){
     return 'B'
    } else if (mark >= 70 && mark < 80){
     return 'C'
    } else if (mark >= 60 && mark < 70) {
      return 'D'
    }else if (mark >= 50 && mark < 60) {
      return 'E'
    }else if (mark >= 0 && mark < 50) {
      return 'F'
    } else {
      return 'just numbers between 0 and 100' 
    }

}

percent(90)
percent(80)
percent(70)
percent(60)
percent(50)
percent(49)
percent(8548540)
percent(-8548540)
