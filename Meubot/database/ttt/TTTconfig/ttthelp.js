const ttthelp = (prefix) => {
    return `
γ π *JOGO DA VELHA* π γ

βͺ EM FASE DE TESTES

βͺ APENAS PARA GRUPOS

βͺ INICIAR
  β
  ββ β Para iniciar digite:
  β     βγ ${prefix}jogodavelha [ DIFICULDADE ] γ
  ββ β Apenas uma pessoa por vez

βͺ DIFICULDADE
  β
  ββ β easy : totalmente aleatΓ³rio
  β     (SΓ³ azarado pra perder nessa)
  ββ β normal : 66% de chance 
  β     de bloqueio e vitΓ³ria
  ββ β hard : 100% de chance 
  β     de bloqueio e vitΓ³ria 
  ββ β impossible : SΓ³ Kuuhaku
           pra vencer isso

βͺ TEMPORIZADOR
  β
  ββ β Uma nova partida sΓ³ poderΓ‘
  β     ser iniciada apΓ³s um intervalo
  β     de 4 minutos apartir do inΓ­cio
  β     da partida anterior
  β
  ββ β A partida terminarΓ‘ 
           automaticamente apΓ³s 4 minutos

βͺ COMANDOS
  β
  ββ β Para marcar digite:
  β     βγ ${prefix}jogar [ COORDENADA ] γ
  β
  ββ β Exemplo:
	        βγ   ${prefix}jogar a1 
	               ----------------------
	               π1οΈβ£2οΈβ£3οΈβ£
	               π°οΈβπ²π²
	               π±οΈπ²π²π²
	               Β©οΈπ²π²π²  γ

βͺ SEU STATUS
  β
  ββ β Para ver seu status digite:
          βγ ${prefix}perfil γ

βͺ RECOMPENSAS
  β
  ββ β EASY
  β     β XP
  β     β 
  β
  ββ β NORMAL
  β     β XP
  β     β 
  β
  ββ β HARD
  β     β XP
  β     β 
  β
  ββ β IMPOSSIBLE
  β     β XP
  β
  ββ β EMPATE
  β     βγ 0 / 0 γ
  β 
  ββ β PARTIDA NΓO FINALIZADA
          β -γ 75 / 150 γ
`
}

exports.ttthelp = ttthelp