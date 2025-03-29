module.exports = {
  name: "fecharticket",
  type: "interaction",
  prototype: "button",
  code: `
  $interactionReply[⚠️ | Voce tem certeza de que desejar fechar este Ticket? {actionRow: {button:Confirmar:danger:motivo_fecharticket::☑️}};;true]
  $suppressErrors
  `
}