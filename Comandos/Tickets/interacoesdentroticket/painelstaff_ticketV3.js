module.exports = {
  name: "notificarmembro_ticket",
  type: "interaction",
  prototype: "button",
  code: `
  
  $senddm[**Olá <@$getChannelVar[solicitou_ticket]>! O Staff <@$authorid> ($username) está lhe notificando no seu Ticket de Atendimento. Caso não compareça, seu Ticket pode ser \`Fechado\`.**
{actionRow: {button:Ir para Ticket de Atendimento:link:$messageurl[$sendmessage[**<@$authorid>, o Membro <@$getChannelVar[solicitou_ticket]> foi notificado com sucesso.**;true]]::🛩}};$getChannelVar[solicitou_ticket]]
  $interactionedit[☑️** | Membro Notificado com Sucesso.** {actionRow: {button:Notificar Membro:primary:notificarmembro_ticket:true:📨}{button:Renomear Ticket:success:renomear_ticket::🖌}}]
  $setChannelVar[cooldown_painelstaffticket;$floor[$sum[$divide[$dateStamp;1000];600]]]
  $advanceCooldown[10m;$channelid;$interactionupdate[⚠️** | Você só poderá notificar o Membro novamente <t:$getChannelVar[cooldown_painelstaffticket]:R>.** {actionRow: {button:Notificar Membro:primary:notificarmembro_ticket:true:📨}{button:Renomear Ticket:success:renomear_ticket::🖌}}]]
  `
}