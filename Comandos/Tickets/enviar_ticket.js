module.exports = {
  name: "ticket",
  type: "interaction",
  prototype: "slash",
  sub_command: "enviar",
  code: `
  $interactionEdit[Painel de Tickets enviado para <#$slashoption[canal]> com sucesso.;;true] 
  $channelsendmessage[$if[$slashoption[canal]==;$channelid;$slashoption[canal]];{newEmbed: {footer:$guildname | Todos os Direitos Reservados} {thumbnail:$guildicon}{author:$guildname | Atendimentos}{title:$getguildvar[titulo_ticket]}{image:$getGuildVar[banner_ticket]}{description:$getguildvar[descricao_ticket]}{color:$getGuildVar[color_ticket]}{footer:$getGuildVar[footer_ticket]}} $nonescape[$get[menu2]]]
  $let[menu2;$get[menu]]
  $let[menu;{actionRow:{selectMenu:ticket_abrir:Escolha uma Opção de Atendimento.:1:1:false:$if[$getguildvar[emoji1]!=n;{stringInput:$getguildvar[titulo1]:opcao1:$getguildvar[desc1]::$getguildvar[emoji1]}]$if[$getguildvar[emoji2]!=n;:{stringInput:$getguildvar[titulo2]:opcao2:$getguildvar[desc2]::$getguildvar[emoji2]}]$if[$getguildvar[emoji3]!=n;:{stringInput:$getguildvar[titulo3]:opcao3:$getguildvar[desc3]::$getguildvar[emoji3]}]$if[$getguildvar[emoji4]!=n;:{stringInput:$getguildvar[titulo4]:opcao4:$getguildvar[desc4]::$getguildvar[emoji4]}]$if[$getguildvar[emoji5]!=n;:{stringInput:$getguildvar[titulo5]:opcao5:$getguildvar[desc5]::$getguildvar[emoji5]}]}}]
  $onlyif[$getGuildVar[titulo1]$getGuildVar[titulo2]$getGuildVar[titulo3]$getGuildVar[titulo4]$getGuildVar[titulo5]!=;$interactionEdit[❌️** | Não há nenhuma categoria existente no momento.** {actionRow: {button:Ir para Menu de Opções:danger:gerenciaropcoes_ticket::🔙}}]]
   $suppresserrors
  $onlyPerms[administrator;$interactionReply[**❌️ | Você não tem permissão para usar este comando.**;;true]
  
  
`}