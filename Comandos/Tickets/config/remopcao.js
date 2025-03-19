module.exports = {
  name: "remopcao_ticket",
  type: "interaction",
  $if: "old",
  prototype: "button",
  code: `
  
  $interactionupdate[**Utilize os Botões abaixo para adicionar e remover opções do Menu de Seleção do Painel de Tickets.** 
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
 $endif }]
  `
}