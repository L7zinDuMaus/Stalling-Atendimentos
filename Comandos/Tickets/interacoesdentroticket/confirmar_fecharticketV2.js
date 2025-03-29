module.exports = {
  name: "confirmar_fecharticket",
  type: "interaction",
  prototype: "modal",
  code: `
  $deletechannel[$channelid]
  $wait[11s]
  $onlyif[$getGuildVar[registros_ticket]==;]
  $suppressErrors
  `}