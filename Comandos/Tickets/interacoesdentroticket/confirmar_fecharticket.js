module.exports = {
  name: "confirmar_fecharticket",
  type: "interaction",
  prototype: "modal",
  code: `
  $deletechannel[$channelid]
  $if[$getGuildVar[registros_ticket]!=;$transcript[$channelid;$getGuildVar[registros_ticket]]]
  
  $if[$getGuildVar[registros_ticket]!=;$channelsendmessage[$getGuildVar[registros_ticket];{newEmbed:{title:Novo Ticket Finalizado.}{author:$guildname | Atendimentos}{footer:$guildname | Todos os Direitos Reservados}{thumbnail:$guildicon}{color:$getGuildVar[color_ticket]}{field:$customemoji[user] | Solicitado por:<@$getChannelVar[solicitou_ticket;$get[channelid]]> ($username[$getChannelVar[solicitou_ticket;$get[channelid]]] - $getChannelVar[solicitou_ticket;$get[channelid]])}{field:$customEmoji[cadeado] | Fechado por\::<@$authorid> ($username - $authorid)}{field:$customEmoji[assumir] | Assumido por\::$if[$isbot[$getChannelVar[assumido_ticket;$get[channelid]]]==true;Ticket não Assumido :/;<@$getChannelVar[assumido_ticket;$get[channelid]]> ($if[$userexists[$getChannelVar[assumido_ticket;$get[channelid]]]==true;$username[$getChannelVar[assumido_ticket;$get[channelid]]]]- $getChannelVar[assumido_ticket;$get[channelid]])]}{field:$customEmoji[memberpanel] | Motivo do Encerramento:$textinputvalue[motivo_encerramentoticket]}{field:$customEmoji[registros] | Categoria do Ticket\::$getChannelVar[categoria_ticket;$get[channelid]] ($getChannelVar[emoji_ticket;$get[channelid]])}{field:$customEmoji[id]️ | ID do Ticket\::$get[channelid]}{field:$customEmoji[clock] | Data de Abertura:<t\:$getChannelVar[abertura_ticket;$get[channelid]]> (<t\:$getChannelVar[abertura_ticket;$get[channelid]]\:R>)}{field:$customEmoji[clock] | Data de Fechamento:<t\:$getChannelVar[fechamento_ticket;$get[channelid]]> (<t\:$getChannelVar[fechamento_ticket;$get[channelid]]\:R>)}{field:$customEmoji[timer] | Duração do Atendimento:$if[$get[tempoatendimentodias]>0;$get[tempoatendimentodias] Dia(s), $get[tempoatendimentohoras] Hora(s), $get[tempoatendimentominutos] Minuto(s), $get[tempoatendimentosegundos] Segundo(s).;$if[$get[tempoatendimentohoras]>0;$get[tempoatendimentohoras] Hora(s), $get[tempoatendimentominutos] Minuto(s), $get[tempoatendimentosegundos] Segundo(s).;$if[$get[tempoatendimentominutos]>0;$get[tempoatendimentominutos] Minuto(s), $get[tempoatendimentosegundos] Segundo(s).;$get[tempoatendimentosegundos] Segundo(s).]]]}}]]
  
  $onlyif[$getGuildVar[registros_ticket]!=;]

  $senddm[**<@$getChannelVar[solicitou_ticket]>, você deseja avaliar o Atendimento que você recebeu no(a) \`$guildname\`? Utilize o Botão abaixo para deixar sua Avaliação!** {actionRow: {button:Deixar Avaliação:primary:avaliaratendimento_ticket::$customEmoji[star]}};$getChannelVar[solicitou_ticket]]
  $wait[10s]
  $let[channelid;$channelid]
  $transcriptDm[$channelid;$getChannelVar[solicitou_ticket]]
  $senddm[<@$getChannelVar[solicitou_ticket]>{newEmbed:{title:Seu Ticket foi Finalizado!}{author:$guildname | Atendimentos}{footer:$guildname | Todos os Direitos Reservados}{thumbnail:$guildicon}{color:$getGuildVar[color_ticket]}{field:$customEmoji[cadeado] | Fechado por\::<@$authorid> ($username - $authorid)}{field:$customEmoji[assumir] | Assumido por\::$if[$isbot[$getChannelVar[assumido_ticket]]==true;Ticket não Assumido :/;<@$getChannelVar[assumido_ticket]> ($if[$userexists[$getChannelVar[assumido_ticket]]==true;$username[$getChannelVar[assumido_ticket]]]- $getChannelVar[assumido_ticket])]}{field:$customEmoji[memberpanel] | Motivo do Encerramento:$textinputvalue[motivo_encerramentoticket]}{field:$customEmoji[registros] | Categoria do Ticket\::**\`$touppercase[$getChannelVar[categoria_ticket]]\`** ($getChannelVar[emoji_ticket])}{field:$customEmoji[id] | ID do Ticket\::$channelid}{field:$customEmoji[clock] | Data de Abertura:<t\:$getChannelVar[abertura_ticket]> (<t\:$getChannelVar[abertura_ticket]\:R>)}{field:$customEmoji[clock] | Data de Fechamento:<t\:$getChannelVar[fechamento_ticket]> (<t\:$getChannelVar[fechamento_ticket]\:R>)}{field:$customEmoji[timer] | Duração do Atendimento:$if[$get[tempoatendimentodias]>0;$get[tempoatendimentodias] Dia(s), $get[tempoatendimentohoras] Hora(s), $get[tempoatendimentominutos] Minuto(s), $get[tempoatendimentosegundos] Segundo(s).;$if[$get[tempoatendimentohoras]>0;$get[tempoatendimentohoras] Hora(s), $get[tempoatendimentominutos] Minuto(s), $get[tempoatendimentosegundos] Segundo(s).;$if[$get[tempoatendimentominutos]>0;$get[tempoatendimentominutos] Minuto(s), $get[tempoatendimentosegundos] Segundo(s).;$get[tempoatendimentosegundos] Segundo(s).]]]}};$getChannelVar[solicitou_ticket]]
  
  $setGlobalUserVar[guildid;$guildid;$getChannelVar[solicitou_ticket]]
  $setGlobalUserVar[assumido_ticket;$replaceText[$getChannelVar[assumido_ticket];1340677420469981205;$clientid];$getChannelVar[solicitou_ticket]]
  $setGlobalUserVar[avaliacoes;1;$getChannelVar[solicitou_ticket]]
  $let[tempoatendimentosegundos;$floor[$divide[$sub[$get[tempoentreatendimento];$multi[$get[tempoatendimentodias];86400];$multi[$get[tempoatendimentohoras];3600];$multi[$get[tempoatendimentominutos];60]];1]]]
  $let[tempoatendimentominutos;$floor[$divide[$sub[$get[tempoentreatendimento];$multi[$get[tempoatendimentodias];86400];$multi[$get[tempoatendimentohoras];3600]];60]]]
  $let[tempoatendimentohoras;$floor[$divide[$sub[$get[tempoentreatendimento];$multi[$get[tempoatendimentodias];86400]];3600]]]
  $let[tempoatendimentodias;$floor[$divide[$get[tempoentreatendimento];86400]]]
  $let[tempoentreatendimento;$sub[$getChannelVar[fechamento_ticket];$getChannelVar[abertura_ticket]]]
  $setChannelVar[fechamento_ticket;$truncate[$divide[$dateStamp;1000]]]
  $interactionreply[**$customemoji[alerta] | Este Ticket será Fechado em <t:$truncate[$sum[$divide[$dateStamp;1000];11]]:R>.**]
$suppressErrors
    `
}