module.exports = {
  name: "modalcanaltkt",
  type: "interaction",
  prototype: "modal",
  code: `
  $interactionedit[<@$authorid>, o canal foi configurado para <#$getGuildVar[canal_ticket]> com sucesso.{actionRow: {button:Configurar Canal:primary:configcanalbutton:true:✍️}{button:Voltar para Menu:danger:voltarconfig::🔙}}]
  
  $setGuildVar[canal_ticket;$textinputvalue[idcanalticket]]
  
  $onlyif[$channelexists[$textinputvalue[idcanalticket]]==true;$interactionupdate[<@$authorid>, o canal com ID \`$textinputvalue[idcanalticket]\` não existe.{actionRow: {button:Configurar Canal:primary:configcanalbutton::✍️}{button:Voltar para Menu:danger:voltarconfig::🔙}}]]
 
  `
}