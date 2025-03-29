module.exports = {
  name: "painelstaffticket",
  type: "interaction",
  prototype: "button",
  code: `
  $interactionReply[**⚠️ | Apenas Atendentes de Tickets podem utilizar o Painel Staff.**;;true]

  $onlyif[$authorid==$getChannelVar[solicitou_ticket];]
  $suppressErrors
  `
}