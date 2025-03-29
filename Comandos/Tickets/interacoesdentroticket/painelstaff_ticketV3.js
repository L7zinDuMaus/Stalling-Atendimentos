module.exports = {
  name: "notificarmembro_ticket",
  type: "interaction",
  prototype: "button",
  code: `
  $channelsendmessage[$getGuildVar[registros_ticket];{newEmbed: {author:$guildname | Atendimentos}{color:$getGuildVar[color_ticket]}{footer:$guildname | Todos os Direitos Reservados.}{thumbnail:$guildicon}
{title:Nova Notificação de Ticket.}
{field:$customemoji[assumir] | Quem Notificou:<@$authorid> ($username - $authorid)}
{field:$customemoji[user] | Quem foi Notificado:<@$getChannelVar[solicitou_ticket]> ($username[$getChannelVar[solicitou_ticket]] - $getChannelVar[solicitou_ticket])}
{field:$customemoji[registros] | Categoria:$getChannelVar[categoria_ticket] ($getChannelVar[emoji_ticket])}
{field:$customemoji[canal] | Canal do Ticket:<#$channelid>}
{field:$customemoji[id] | ID do Ticket:$channelid}
}]
  
  $onlyif[$getGuildVar[registros_ticket]!=;]
  
  $senddm[**Olá <@$getChannelVar[solicitou_ticket]>! O Staff <@$authorid> ($username) está lhe notificando no seu Ticket de Atendimento. Caso não compareça, seu Ticket pode ser \`Fechado\`.**
{actionRow: {button:Ir para Ticket de Atendimento:link:$messageurl[$sendmessage[**<@$authorid>, o Membro <@$getChannelVar[solicitou_ticket]> foi notificado com sucesso.**;true]]::🛩}};$getChannelVar[solicitou_ticket]]
  $interactionedit[☑️** | Membro Notificado com Sucesso.** {actionRow: {button:Notificar Membro:primary:notificarmembro_ticket:true:📨}{button:Renomear Ticket:success:renomear_ticket:true:🖌}}]
  $setChannelVar[cooldown_painelstaffticket;$floor[$sum[$divide[$dateStamp;1000];600]]]
  $advanceCooldown[10m;$channelid;$interactionupdate[⚠️** | Você só poderá notificar o Membro novamente <t:$getChannelVar[cooldown_painelstaffticket]:R>.** {actionRow: {button:Notificar Membro:primary:notificarmembro_ticket::📨}{button:Renomear Ticket:success:renomear_ticket:true:🖌}{button:Gerar Pagamento:secondary:gerar_pagamento::💵}}]]
  `
}