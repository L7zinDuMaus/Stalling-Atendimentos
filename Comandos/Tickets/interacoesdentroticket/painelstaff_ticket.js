module.exports = {
  name: "painelstaffticket",
  type: "interaction",
  prototype: "button",
  code: `
  $interactionReply[**Olá <@$authorid>! A partir do botão abaixo, você pode notificar o Membro que você está atendendo.**
  {actionRow: {button:Notificar Membro:primary:notificarmembro_ticket::📨}{button:Renomear Ticket:success:renomear_ticket:true:🖌}{button:Gerar Pagamento:secondary:gerar_pagamento::💵}};;true]
  $onlyif[$authorid!=$getChannelVar[solicitou_ticket];]
  `
}