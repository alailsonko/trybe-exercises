function INSS(salarioBruto){
    let aliquota = 0
   if(salarioBruto >= 1500.10 && salarioBruto < 1556.95){
    aliquota = (8/100)
    return aliquota*salarioBruto
  } else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92){
    aliquota = (9/100)
    return aliquota*salarioBruto
  } else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82){
    aliquota = (11/100)
    return aliquota*salarioBruto
  } else if (salarioBruto > 5189.82) {
     return 570.88
  } 
}

function IR(salarioBruto){
    let aliquota = 0
   if(salarioBruto >= 1903.99 && salarioBruto < 2826.65){
    aliquota = (7.5/100)
    return aliquota*salarioBruto + 142.80
  } else if (salarioBruto >= 2826.66 && salarioBruto <= 3751.05){
    aliquota = (15/100)
    return aliquota*salarioBruto + 354.80
  } else if (salarioBruto >= 3751.06 && salarioBruto <= 4664.68){
    aliquota = (22.5/100)
    return aliquota*salarioBruto + 636.13
  } else if (salarioBruto > 4664.68) {
    aliquota = (27.5/100)
     return salarioBruto*aliquota + 869.36
  } else if (salarioBruto <= 1903.98){
    return 0
  }

}


function salario(salarioBruto) {
  return salarioBruto - (INSS(salarioBruto) + IR(salarioBruto)) 
}

salario(1500.10)
salario(2500.10)
salario(3500.10)
salario(4500.10)
salario(1500.10)
salario(1500.10)






