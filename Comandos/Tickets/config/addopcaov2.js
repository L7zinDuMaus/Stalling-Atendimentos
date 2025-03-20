module.exports = {
  name: "adicionarop_ticket",
  type: "interaction",
  prototype: "modal",
  $if: "old",
  code: `
  $interactionfollowUp[**☑️ | Opção de Atendimento Adicionada com Sucesso.**;true]
  $if[1==1]
  $interactionupdate[**Utilize os Botões abaixo para adicionar e remover opções do Menu de Seleção do Painel de Tickets.** 
  {newEmbed: {title:Opções Criadas} {color:$getGuildVar[color_ticket]} {footer:$guildname | Todos os Direitos Reservados}{author:$guildname | Atendimentos}{thumbnail:$guildicon}
    $if[$getGuildVar[titulo1]!=]
  {field:1. $getGuildVar[emoji1] | $getGuildVar[titulo1]:$getGuildVar[desc1]}
  $endif $if[$getGuildVar[titulo2]!=]
  {field:2. $getGuildVar[emoji2] | $getGuildVar[titulo2]:$getGuildVar[desc2]}
  $endif $if[$getGuildVar[titulo3]!=]
  {field:3. $getGuildVar[emoji3] | $getGuildVar[titulo3]:$getGuildVar[desc3]}
  $endif $if[$getGuildVar[titulo4]!=]
  {field:4. $getGuildVar[emoji4] | $getGuildVar[titulo4]:$getGuildVar[desc4]}
  $endif $if[$getGuildVar[titulo5]!=]
  {field:5. $getGuildVar[emoji5] | $getGuildVar[titulo5]:$getGuildVar[desc5]}
 $endif }
  {actionRow:{button:Adicionar Opção:success:addopcao_ticket:$if[$getGuildVar[titulo5]==$getvar[titulo5]]true$endif:}{button:Remover Opção:danger:remopcao_ticket::}{button:Voltar para Menu:secondary:voltarconfig::🔙}}]
  $end

  $if[$getGuildVar[titulo1]==]
  $setGuildVar[titulo1;$get[titulo]] 
  $setGuildVar[desc1;$get[desc]]
  $setGuildVar[emoji1;$get[emoji]]

  $elseif[$getGuildVar[titulo2]==]
  $setGuildVar[titulo2;$get[titulo]] 
  $setGuildVar[desc2;$get[desc]]
  $setGuildVar[emoji2;$get[emoji]]
  $endelseif

  $elseif[$getGuildVar[titulo3]==]
  $setGuildVar[titulo3;$get[titulo]] 
  $setGuildVar[desc3;$get[desc]]
  $setGuildVar[emoji3;$get[emoji]]
  $endelseif

  $elseif[$getGuildVar[titulo4]==]
  $setGuildVar[titulo4;$get[titulo]] 
  $setGuildVar[desc4;$get[desc]]
  $setGuildVar[emoji4;$get[emoji]]
  $endelseif

  $elseif[$getGuildVar[titulo5]==]
  $setGuildVar[titulo5;$get[titulo]] 
  $setGuildVar[desc5;$get[desc]]
  $setGuildVar[emoji5;$get[emoji]]
  $endelseif
  $endif


  $let[titulo;$textinputvalue[tituloopticket]]
  $let[desc;$textinputvalue[descricaoopticket]]
  $let[emoji;$textinputvalue[emojiopticket]]
  `
}