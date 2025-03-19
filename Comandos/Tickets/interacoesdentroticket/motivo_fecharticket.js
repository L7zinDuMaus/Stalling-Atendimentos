module.exports = {
  name: "motivo_fecharticket",
  type: "interaction",
  prototype: "button",
  code: `
$interactionModal[Fechamento de Tickets;confirmar_fecharticket;
{actionRow: 
{textInput:Motivo do Fechamento do Ticket:1:motivo_encerramentoticket:true:Insira o Motivo aqui.:2:200}}]

  `
}