module.exports = {
  name: "painelmembroticket",
  type: "interaction",
  prototype: "button",
  code: `
  $interactionReply[**⚠️ | Apenas o Criador do Ticket pode utilizar o Painel Membro.**;;true]

  $onlyif[$authorid!=$getChannelVar[solicitou_ticket];]
  `
}