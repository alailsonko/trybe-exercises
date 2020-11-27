const piecesMovements = [
   {
     "piece": "king",
     "move": "square"
   },
     {
     "piece": "queen",
     "move": "diagonally"
   },
      {
     "piece": "rook",
     "move": "horizontally and vertically"
   },
       {
     "piece": "bishop",
     "move": "diagonally"
   },
      {
     "piece": "knight",
     "move": "L shape"
   },
      {
     "piece": "pawn",
     "move": "vertically forwardone square"
   },
   
]


function xadrez(piece){
    const pieceLowerCase = piece.toLowerCase()
    
  for(let index = 0; index < piecesMovements.length; index++){
       if(pieceLowerCase === piecesMovements[index].piece ){
          return piecesMovements[index]
       }
  }
    
}

xadrez('king')
xadrez('queen')
xadrez('rook')
xadrez('bishop')
xadrez('knight')
xadrez('pawn')




