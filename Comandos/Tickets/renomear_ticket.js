module.exports = {
  name: "renomear_ticket",
  type: "interaction",
  prototype: "button",
  code: `
  $interactionModal[Renomear Ticket de Atendimento;renomear_ticket; {actionRow: {textInput:Qual o novo Nome?:1:nome_ticket:true:Insira o novo nome do Canal.:1:20}
   `
}