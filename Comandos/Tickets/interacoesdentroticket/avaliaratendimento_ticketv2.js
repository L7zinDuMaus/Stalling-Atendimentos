module.exports = {
  name: "avaliacaoaten_ticket",
  type: "interaction",
  prototype: "modal",
  code: `
  
  $channelsendmessage[$getGuildVar[feedbacks_ticket;$getGlobalUserVar[guildid]];<@$authorid> {newEmbed: {author:$guildname[$getGlobalUserVar[guildid]] | Atendimentos}{color:$getGuildVar[color_ticket;$getGlobalUserVar[guildid]]}{thumbnail:$guildicon[$getGlobalUserVar[guildid]]}{footer:$guildname[$getGlobalUserVar[guildid]] | Todos os Direitos Reservados}
  {title:Nova Avaliação!}{field:$customemoji[user] | Avaliador:<@$authorid> ($username - $authorid)}{field:$customemoji[star] | Estrelas (max. 5 estrelas):$textinputvalue[estrelasaten_ticket]/5 Estrelas}{field:️$customemoji[escrita] | Avaliação Escrita:$textinputvalue[escritaaten_ticket]}{field:$customemoji[clock] | Horário da Avaliação:<t:$truncate[$divide[$dateStamp;1000]]> (<t\:$truncate[$divide[$dateStamp;1000]]\:R>)}{field:️$customemoji[ok] | Média de Avaliações do Servidor:$roundTenth[$divide[$getGuildVar[tavaliacoes;$getGlobalUserVar[guildid]];$getGuildVar[qavaliacoes;$getGlobalUserVar[guildid]]];1] Estrelas ($getGuildVar[qavaliacoes;$getGlobalUserVar[guildid]] avaliações)}} {actionRow:{button:Atendido por $username[$getGlobalUserVar[assumido_ticket]]:secondary:atendidopor:true:️$customemoji[assumir]}}]
  $onlyif[$channelexists[$getGuildVar[feedbacks_ticket;$getGlobalUserVar[guildid]]]==true;]
  $setGuildVar[qavaliacoes;$sum[$getGuildVar[qavaliacoes;$getGlobalUserVar[guildid]];1];$getGlobalUserVar[guildid]]
  $setGuildVar[tavaliacoes;$sum[$getGuildVar[tavaliacoes;$getGlobalUserVar[guildid]];$textinputvalue[estrelasaten_ticket]];$getGlobalUserVar[guildid]]
  $setGlobalUserVar[avaliacoes;$sub[$getGlobalUserVar[avaliacoes];1]]
  $interactionfollowUp[**$customemoji[ok] | <@$authorid>, a sua Avaliação foi enviada com \`Sucesso\`. Agradecemos pela preferência!**]
  $interactionDelete
  $onlyif[$textinputvalue[estrelasaten_ticket]<=5;$interactionedit[**$customemoji[alerta] | Você só pode inserir um número entre \`1 e 5 Estrelas\`.**]]
  $onlyif[$getGlobalUserVar[avaliacoes]>0;$interactionReply[**$customemoji[alerta] | Voce já enviou sua Avaliação para este \`Atendimento\`.**;;true]]
  `
}