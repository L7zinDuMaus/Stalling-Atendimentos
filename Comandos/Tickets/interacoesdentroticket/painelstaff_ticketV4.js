module.exports = [{
  name: "gerar_pagamento",
  type: "interaction",
  prototype: "button",
  code: `
  $interactionModal[Gerar Pagamentos;gerarpagamento_ticket; {actionRow: {textInput:Qual o Valor do Pagamento?:1:valorpix_ticket:true:Ex. 4.99:1:5}} {actionRow: {textInput:Qual a Chave PIX do Pagamento?:1:chavepix_ticket:true:Ex. 4.99:5:400:$getGuildVar[chavepix]}}
  
  `
}, {
  name: "gerarpagamento_ticket",
  type: "interaction",
  prototype: "modal",
  code: `
  $channelsendmessage[$getGuildVar[registros_ticket];{newEmbed: {author:$guildname | Atendimentos}{color:$getGuildVar[color_ticket]}{footer:$guildname | Todos os Direitos Reservados.}{thumbnail:$guildicon}
{title:Novo Pagamento Solicitado.}
{field:$customemoji[user] | Quem foi Cobrado:<@$getChannelVar[solicitou_ticket]> ($username[$getChannelVar[solicitou_ticket]] - $getChannelVar[solicitou_ticket])}
{field:$customemoji[assumir] | Quem Cobrou:<@$authorid> ($username - $authorid)}
{field:$customEmoji[registros] | Chave PIX:**$getChannelVar[chavepix]**}
{field:$customemoji[star] | Valor Cobrado:**\`R\$ $getChannelVar[valorpix]\`**}
{field:$customemoji[registros] | Categoria:$getChannelVar[categoria_ticket] ($getChannelVar[emoji_ticket])}
{field:$customemoji[canal] | Canal do Ticket:<#$channelid>}
{field:$customemoji[id] | ID do Ticket:$channelid}
}]
$onlyif[$getGuildVar[registros_ticket]!=;]

$senddm[**Olá <@$getChannelVar[solicitou_ticket]>! O Staff <@$authorid> ($username) acabou de fazer uma cobrança de \`R\$ $getChannelVar[valorpix]\` para você.**
{actionRow: {button:Ir para Ticket de Atendimento:link:$messageurl[$sendmessage[**<@$authorid>, o Membro <@$getChannelVar[solicitou_ticket]> foi notificado desta Cobrança com sucesso.**;true]]::🛩}};$getChannelVar[solicitou_ticket]]

  $interactionedit[$criarpagamento[$textinputvalue[chavepix_ticket];$textinputvalue[valorpix_ticket];$guildname] {actionRow: {button:Notificar Membro:primary:notificarmembro_ticket::📨}{button:Renomear Ticket:success:renomear_ticket:true:🖌}{button:Gerar Pagamento:secondary:gerar_pagamento:true:💵}};;true]
  $setChannelVar[chavepix;$textinputvalue[chavepix_ticket]]
  $setChannelVar[valorpix;$textinputvalue[valorpix_ticket]]
  $onlyPerms[administrator;$interactionUpdate[**❌️ | Apenas Administradores podem usar esta função.** {actionRow: {button:Notificar Membro:primary:notificarmembro_ticket::📨}{button:Renomear Ticket:success:renomear_ticket:true:🖌}{button:Gerar Pagamento:secondary:gerar_pagamento::💵}};;true]
  
  `
}, {
  name: "copia_e_cola",
  type: "interaction",
  prototype: "button",
  code: `
  $interactionReply[$criarpagamentocopiaecola[$getChannelVar[chavepix];$getChannelVar[valorpix];$guildname];;true]
  
  `
}]