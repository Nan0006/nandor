const tttme = (pushname, userWins, userDefeats, userTies, userPoints) => {
  return `
γ β²π *Jogo Da Velha Perfil* πβ² γ

β *Nome* : ${pushname} 

    β£ π _VitΓ³rias: ${userWins} π_
    β£ π _Derrotas: ${userDefeats} π_
    β£ π _Empates : ${userTies} π_
    β£ π _Pontos  : ${userPoints} π_
    `
}

exports.tttme = tttme