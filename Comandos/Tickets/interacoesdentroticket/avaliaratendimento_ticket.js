module.exports = {
  name: "avaliaratendimento_ticket",
  type: "interaction",
  prototype: "button",
  code: `
  $interactionModal[Avaliação de Atendimento;avaliacaoaten_ticket;{actionRow: {textInput:Quantas Estrelas?:1:estrelasaten_ticket:true:Insira entre 1 a 5 estrelas.:1:1}}{actionRow:{textInput:Avaliação Escrita?:1:escritaaten_ticket:true:Insira sua Avaliação.:5:50}}]
  $suppressErrors
 
  
  
  
  `
}