module.exports = {
  name: "avaliacaoaten_ticket",
  type: "interaction",
  prototype: "modal",
  code: `
  
  $channelsendmessage[$getGuildVar[feedbacks_ticket;$getGlobalUserVar[guildid]];<@$authorid> {newEmbed: {author:$guildname[$getGlobalUserVar[guildid]] | Atendimentos}{color:$getGuildVar[color_ticket;$getGlobalUserVar[guildid]]}{thumbnail:$guildicon[$getGlobalUserVar[guildid]]}{footer:$guildname[$getGlobalUserVar[guildid]] | Todos os Direitos Reservados}
  {title:Nova Avaliação!}{field:👤 | Avaliador:<@$authorid> ($username - $authorid)}{field:⭐️ | Estrelas (max. 5 estrelas):$textinputvalue[estrelasaten_ticket]/5 Estrelas}{field:✍️ | Avaliação Escrita:$textinputvalue[escritaaten_ticket]}{field:✔️ | Média de Avaliações do Servidor:$roundTenth[$divide[$getGuildVar[tavaliacoes;$getGlobalUserVar[guildid]];$getGuildVar[qavaliacoes;$getGlobalUserVar[guildid]]];1] Estrelas ($getGuildVar[qavaliacoes;$getGlobalUserVar[guildid]] avaliações)}} {actionRow:{button:Atendido por $username[$getGlobalUserVar[assumido_ticket]]:secondary:atendidopor:true:🙋‍♂️}}]
  $onlyif[$channelexists[$getGuildVar[feedbacks_ticket;$getGlobalUserVar[guildid]]]==true;]
  $setGuildVar[qavaliacoes;$sum[$getGuildVar[qavaliacoes;$getGlobalUserVar[guildid]];1];$getGlobalUserVar[guildid]]
  $setGuildVar[tavaliacoes;$sum[$getGuildVar[tavaliacoes;$getGlobalUserVar[guildid]];$textinputvalue[estrelasaten_ticket]];$getGlobalUserVar[guildid]]
  $setGlobalUserVar[avaliacoes;$sub[$getGlobalUserVar[avaliacoes];1]]
  $interactionEdit[**<@$authorid>, a sua Avaliação foi enviada com \`Sucesso\`. Agradecemos pela preferência!**]
  $onlyif[$getGlobalUserVar[avaliacoes]>0;$interactionReply[**Você já enviou sua Avaliação!**]]
  `
}