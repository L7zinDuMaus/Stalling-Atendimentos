module.exports = {
  name: "assumir_ticket",
  type: "interaction",
  prototype: "button",
  code: `
  $interactionreply[⚠️** | Apenas membros da \`STAFF\` podem Assumir Tickets de Atendimento.**;;true]

$onlyif[$authorid==$getChannelVar[solicitou_ticket];]
$suppressErrors
`}


  