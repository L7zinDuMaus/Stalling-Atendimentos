module.exports = {
  name: "ticket_abrir",
  type: "interaction",
  prototype: "selectMenu",
  code: `
  $channelsendmessage[$getGuildVar[registros_ticket];{newEmbed: {author:$guildname | Atendimentos}{color:$getGuildVar[color_ticket]}{footer:$guildname | Todos os Direitos Reservados.}{thumbnail:$guildicon}
{title:Novo Ticket Aberto.}
{field:$customemoji[user] | Usuário:<@$authorid> ($username - $authorid)}
{field:$customemoji[registros] | Categoria:$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$nonescape[$getSelectMenuValues[all;,]];opcao1;$getGuildVar[titulo1]];opcao2;$getGuildVar[titulo2]];opcao3;$getGuildVar[titulo3]];opcao4;$getGuildVar[titulo4]];opcao5;$getGuildVar[titulo5]] ($replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$nonescape[$getSelectMenuValues[all;,]];opcao1;$getGuildVar[emoji1]];opcao2;$getGuildVar[emoji2]];opcao3;$getGuildVar[emoji3]];opcao4;$getGuildVar[emoji4]];opcao5;$getGuildVar[emoji5]])}
{field:$customemoji[canal] | Canal do Ticket:<#$get[idtopicoticket]>}
{field:$customemoji[id] | ID do Ticket:$get[idtopicoticket]}
{field:$customemoji[clock] | Horário de Abertura:<t\:$getChannelVar[abertura_ticket;$get[idtopicoticket]]> (<t\:$getChannelVar[abertura_ticket;$get[idtopicoticket]]\:R>)}
}]
  $onlyif[$getGuildVar[registros_ticket]!=;]
  $setChannelVar[abertura_ticket;$truncate[$divide[$dateStamp;1000]];$get[idtopicoticket]]
  $setchannelvar[solicitou_ticket;$authorid;$get[idtopicoticket]]
  $interactionReply[O seu Ticket foi aberto com sucesso em $messageurl[$channelsendmessage[$get[idtopicoticket];<@$authorid>$if[$getGuildVar[cargo_ticket]!=; | <@&$getguildvar[cargo_ticket]>]. {newEmbed: {footer:$guildname | Todos os Direitos Reservados} {thumbnail:$guildicon}{image:$getGuildVar[banner_ticket]}{author:$guildname | Atendimentos}{title:$getguildvar[titulo_b_ticket]}{description:$replaceText[$replaceText[$replaceText[$replaceText[$getguildvar[descricao_b_ticket];|EMOJI|;$getChannelVar[emoji_ticket;$get[idtopicoticket]]];|ATENDENTE|;Ticket ainda não Assumido];|USUARIO|;<@$authorid>];|CATEGORIA|;$touppercase[$getChannelVar[categoria_ticket;$get[idtopicoticket]]]]}{color:$getGuildVar[color_ticket]}{footer:$getGuildVar[footer_ticket]}}{actionRow:
  {button:Fechar Ticket:secondary:fecharticket::$customemoji[cadeado]}
  {button:Assumir Ticket:secondary:assumir_ticket::️$customemoji[assumir]}
  {button:Painel Membro:secondary:painelmembroticket::$customemoji[memberpanel]}
  {button:Painel Staff:secondary:painelstaffticket::$customemoji[staffpanel]}};true];$get[idtopicoticket]];;true]              
  $setChannelVar[emoji_ticket;$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$nonescape[$getSelectMenuValues[all;,]];opcao1;$getGuildVar[emoji1]];opcao2;$getGuildVar[emoji2]];opcao3;$getGuildVar[emoji3]];opcao4;$getGuildVar[emoji4]];opcao5;$getGuildVar[emoji5]];$get[idtopicoticket]]
  $setChannelVar[categoria_ticket;$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$nonescape[$getSelectMenuValues[all;,]];opcao1;$getGuildVar[titulo1]];opcao2;$getGuildVar[titulo2]];opcao3;$getGuildVar[titulo3]];opcao4;$getGuildVar[titulo4]];opcao5;$getGuildVar[titulo5]];$get[idtopicoticket]]
  
  $let[idtopicoticket;$createThread[$channelID;$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$nonescape[$getSelectMenuValues[all;,]];opcao1;$getGuildVar[emoji1]];opcao2;$getGuildVar[emoji2]];opcao3;$getGuildVar[emoji3]];opcao4;$getGuildVar[emoji4]];opcao5;$getGuildVar[emoji5]] $replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$nonescape[$getSelectMenuValues[all;,]];opcao1;$getGuildVar[titulo1]];opcao2;$getGuildVar[titulo2]];opcao3;$getGuildVar[titulo3]];opcao4;$getGuildVar[titulo4]];opcao5;$getGuildVar[titulo5]] | $username[$authorID];MAX;private;;true]]
  $suppressErrors
  `
}