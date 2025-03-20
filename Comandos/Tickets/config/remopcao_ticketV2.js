module.exports = {
  name: "rmopcao_ticket",
  type: "interaction",
  prototype: "selectMenu",
  code: `
  $interactionfollowUp[☑️ **| Opção Removida com Sucesso.**;true]
  $interactionupdate[**Utilize o Menu abaixo para remover Opções do Menu de Seleção do Painel de Tickets.**
  
  {actionRow: {button:Voltar para Menu de Opções:danger:gerenciaropcoes_ticket::🔙}}
 $nonescape[$get[menu2]]]
 $let[menu2;$get[menu]]
 $let[menu;{actionRow:{selectMenu:rmopcao_ticket:Escolha uma Opção para Removê-la.:1:1:false:$if[$getguildvar[emoji1]!=n;{stringInput:$getguildvar[titulo1]:opcao1:$getguildvar[desc1]::$getguildvar[emoji1]}]$if[$getguildvar[emoji2]!=n;:{stringInput:$getguildvar[titulo2]:opcao2:$getguildvar[desc2]::$getguildvar[emoji2]}]$if[$getguildvar[emoji3]!=n;:{stringInput:$getguildvar[titulo3]:opcao3:$getguildvar[desc3]::$getguildvar[emoji3]}]$if[$getguildvar[emoji4]!=n;:{stringInput:$getguildvar[titulo4]:opcao4:$getguildvar[desc4]::$getguildvar[emoji4]}]$if[$getguildvar[emoji5]!=n;:{stringInput:$getguildvar[titulo5]:opcao5:$getguildvar[desc5]::$getguildvar[emoji5]}]}}]
 
 $resetguildvar[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$nonescape[$getSelectMenuValues[all;,]];opcao1;titulo1];opcao2;titulo2];opcao3;titulo3];opcao4;titulo4];opcao5;titulo5]]
 $resetguildvar[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$nonescape[$getSelectMenuValues[all;,]];opcao1;emoji1];opcao2;emoji2];opcao3;emoji3];opcao4;emoji4];opcao5;emoji5]]
 $resetguildvar[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$nonescape[$getSelectMenuValues[all;,]];opcao1;desc1];opcao2;desc2];opcao3;desc3];opcao4;desc4];opcao5;desc5]]
  
  
  `
}