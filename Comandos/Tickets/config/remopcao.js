module.exports = {
  name: "remopcao_ticket",
  type: "interaction",
  $if: "old",
  prototype: "button",
  code: `
  
  $interactionfollowUp[**Utilize os Botões abaixo para adicionar e remover opções do Menu de Seleção do Painel de Tickets.** 
  {newEmbed: {title:Opções Criadas} {color:$getGuildVar[color_ticket]} {footer:$guildname | Todos os Direitos Reservados}{author:$guildname | Atendimentos}{thumbnail:$guildicon}
    $if[$getGuildVar[titulo1]!=]
  {field:1. $getGuildVar[emoji1] | $getGuildVar[titulo1]:$getGuildVar[desc1]}
  $if[$getGuildVar[titulo2]!=]
  {field:2. $getGuildVar[emoji2] | $getGuildVar[titulo2]:$getGuildVar[desc2]}
  $if[$getGuildVar[titulo3]!=]
  {field:3. $getGuildVar[emoji3] | $getGuildVar[titulo3]:$getGuildVar[desc3]}
  $if[$getGuildVar[titulo4]!=]
  {field:4. $getGuildVar[emoji4] | $getGuildVar[titulo4]:$getGuildVar[desc4]}
  $if[$getGuildVar[titulo5]!=]
  {field:5. $getGuildVar[emoji5] | $getGuildVar[titulo5]:$getGuildVar[desc5]}
 $endif
 $endif
 $endif
 $endif
 $endif}
 $get[menu2]
  $let[menu2;$get[menu]]
  $let[menu;{actionRow:{selectMenu:opcao_remover:Escolha uma Opção para Remover.:1:1:false:$if[$getguildvar[emoji1]!=n;{stringInput:$getguildvar[titulo1]:opcao1:$getguildvar[desc1]::$getguildvar[emoji1]}]$if[$getguildvar[emoji2]!=n;:{stringInput:$getguildvar[titulo2]:opcao2:$getguildvar[desc2]::$getguildvar[emoji2]}]$if[$getguildvar[emoji3]!=n;:{stringInput:$getguildvar[titulo3]:opcao3:$getguildvar[desc3]::$getguildvar[emoji3]}]$if[$getguildvar[emoji4]!=n;:{stringInput:$getguildvar[titulo4]:opcao4:$getguildvar[desc4]::$getguildvar[emoji4]}]$if[$getguildvar[emoji5]!=n;:{stringInput:$getguildvar[titulo5]:opcao5:$getguildvar[desc5]::$getguildvar[emoji5]}]}}]
$interactiondefer[true]
  `
}