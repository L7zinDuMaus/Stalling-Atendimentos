module.exports = {
  name: "modalregistrostkt",
  type: "interaction",
  prototype: "modal",
  code: `
  $interactionedit[<@$authorid>, o canal de registros foi configurado para <#$textinputvalue[idregistrosticket]> com sucesso.{actionRow: {button:Configurar Canal de Registros:primary:configregistrosbutton:true:✍️}{button:Voltar para Menu:danger:voltarconfig::🔙}}]
  
  $setGuildVar[registros_ticket;$textinputvalue[idregistrosticket]]
  
  $onlyif[$channelexists[$textinputvalue[idregistrosticket]]==true;$interactionupdate[<@$authorid>, o canal com ID \`$textinputvalue[idregistrosticket]\` não existe. O Sistema de Registros foi Desativado.{actionRow: {button:Configurar Canal de Registros:primary:configregistrosbutton::✍️}{button:Voltar para Menu:danger:voltarconfig::🔙}}] $setGuildVar[registros_ticket;]]
   $suppresserrors
 
  `
}