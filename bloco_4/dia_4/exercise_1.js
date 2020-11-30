let info = {
	personagem: "margarida",
	origem: "pato donald",
	nota: "namorada do personagem principal nos quadrinhos do pato donald"
}

console.log("bem-vinda", info.personagem)

info.recorrente = "sim"
console.log(info.recorrente)

for ( const i in info  ) {
	console.log(i)
}
