module.exports = {
  name: "remopcao_ticket",
  type: "interaction",
  prototype: "button",
  code: `
  
  $interactionupdate[**Utilize o Menu abaixo para remover opções do Menu de Seleção do Painel de Tickets.**
  
  {newEmbed: {title:Opções Criadas} {color:$getGuildVar[color_ticket]} {footer:$guildname | Todos os Direitos Reservados}{author:$guildname | Atendimentos}{thumbnail:$guildicon} {field:$if[$getGuildVar[titulo1]!=;1. $getGuildVar[emoji1] | $getGuildVar[titulo1]:$getGuildVar[desc1]]} {field:$if[$getGuildVar[titulo2]!=;2. $getGuildVar[emoji2] | $getGuildVar[titulo2]:$getGuildVar[desc2]]} {field:$if[$getGuildVar[titulo3]!=;3. $getGuildVar[emoji3] | $getGuildVar[titulo3]:$getGuildVar[desc3]]} {field:$if[$getGuildVar[titulo4]!=;4. $getGuildVar[emoji4] | $getGuildVar[titulo4]:$getGuildVar[desc4]]} {field:$if[$getGuildVar[titulo5]!=;5. $getGuildVar[emoji5] | $getGuildVar[titulo5]:$getGuildVar[desc5]]}}
  
  {actionRow: {button:Voltar para Menu de Opções:danger:gerenciaropcoes_ticket::🔙}}
 $nonescape[$get[menu2]]]
 $let[menu2;$get[menu]]
 $let[menu;{actionRow:{selectMenu:rmopcao_ticket:Escolha uma Opção para Removê-la.:1:1:false:$if[$getguildvar[emoji1]!=n;{stringInput:$getguildvar[titulo1]:opcao1:$getguildvar[desc1]::$getguildvar[emoji1]}]$if[$getguildvar[emoji2]!=n;:{stringInput:$getguildvar[titulo2]:opcao2:$getguildvar[desc2]::$getguildvar[emoji2]}]$if[$getguildvar[emoji3]!=n;:{stringInput:$getguildvar[titulo3]:opcao3:$getguildvar[desc3]::$getguildvar[emoji3]}]$if[$getguildvar[emoji4]!=n;:{stringInput:$getguildvar[titulo4]:opcao4:$getguildvar[desc4]::$getguildvar[emoji4]}]$if[$getguildvar[emoji5]!=n;:{stringInput:$getguildvar[titulo5]:opcao5:$getguildvar[desc5]::$getguildvar[emoji5]}]}}]
  `
}