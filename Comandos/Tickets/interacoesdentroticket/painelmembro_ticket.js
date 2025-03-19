module.exports = {
  name: "painelmembroticket",
  type: "interaction",
  prototype: "button",
  code: `
  $interactionReply[**Olá <@$authorid>! A partir do botão abaixo, você pode notificar o Atendente que está responsável pelo seu Ticket de Atendimento.**
  {actionRow: {button:Notificar Atendente:primary:notificarstaff_ticket::📨}};;true]
  $onlyif[$authorid==$getChannelVar[solicitou_ticket];]
  `
}