module.exports = {
  name: "notificarstaff_ticket",
  type: "interaction",
  prototype: "button",
  code: `
  
  $senddm[**Olá <@$getChannelVar[assumido_ticket]>! O usuário <@$authorid> ($username) está lhe notificando em um Ticket de Atendimento.**
{actionRow: {button:Ir para Ticket de Atendimento:link:$messageurl[$sendmessage[**<@$authorid>, o Staff <@$getChannelVar[assumido_ticket]> foi notificado com sucesso.**;true]]::🛩}};$getChannelVar[assumido_ticket]]
  $interactionedit[☑️** | Staff Notificado com Sucesso.** {actionRow: {button:Notificar Atendente:primary:notificarstaff_ticket:true:📨}}]
  $setChannelVar[cooldown_painelmembroticket;$floor[$sum[$divide[$dateStamp;1000];3600]]]
  $advanceCooldown[1h;$authorid;$interactionedit[⚠️** | Você só poderá notificar um Staff novamente <t:$getChannelVar[cooldown_painelmembroticket]:R>.** {actionRow: {button:Notificar Atendente:primary:notificarstaff_ticket:true:📨}}]]
  $onlyif[$isbot[$getChannelVar[assumido_ticket]]==false;$interactionupdate[✖️ **| Nenhum Staff reivindicou seu Ticket de Atendimento ainda, aguarde um pouco!**]]
  `
}