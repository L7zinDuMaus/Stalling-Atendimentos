module.exports = {
  name: "assumir_ticket",
  type: "interaction",
  prototype: "button",
  code: `
$senddm[**Olá, <@$getChannelVar[solicitou_ticket]>! O \`STAFF\` <@$authorid> ($username) acabou de Reivindicar e se Responsabilizar pelo seu Ticket de Atendimento!**
{actionRow: {button:Ir para Ticket de Atendimento:link:$messageurl[$sendmessage[**<@$getChannelVar[solicitou_ticket]>, <@$authorid> ($username) acaba de reivindicar e se responsabilizar pelo seu Ticket de Atendimento.**;true]]::🛩}};$getChannelVar[solicitou_ticket]]
  $interactionUpdate[<@$getChannelVar[solicitou_ticket]>$if[$getGuildVar[cargo_ticket]!=; | <@&$getguildvar[cargo_ticket]>] {newEmbed: {footer:$guildname | Todos os Direitos Reservados} {thumbnail:$guildicon}{author:$guildname | Atendimentos}{title:$getguildvar[titulo_b_ticket]}{description:$replaceText[$replaceText[$replaceText[$replaceText[$getguildvar[descricao_b_ticket];|EMOJI|;$getChannelVar[emoji_ticket;$channelid]];|ATENDENTE|;Ticket Assumido por: <@$getChannelVar[assumido_ticket]>];|USUARIO|;<@$authorid>];|CATEGORIA|;$getChannelVar[categoria_ticket;$channelid]]}{color:$getGuildVar[color_ticket]}{footer:$getGuildVar[footer_ticket]}}{actionRow:
  {button:Fechar Ticket:secondary:fecharticket::🔒}
  {button:Assumir Ticket:secondary:assumir_ticket:true:🙋‍♂️}
  {button:Painel Membro:secondary:painelmembroticket::🗒}
  {button:Painel Staff:secondary:painelstaffticket::📒}};true]
 $setChannelVar[assumido_ticket;$authorid]
 $onlyif[$authorid!=$getChannelVar[solicitou_ticket];]

 `
}