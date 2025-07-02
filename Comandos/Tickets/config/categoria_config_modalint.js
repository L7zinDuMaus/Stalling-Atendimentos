module.exports = {
  name: "modalcategoriatkt",
  type: "interaction",
  prototype: "modal",
  code: `
  $interactionedit[<@$authorid>, a categoria foi configurada para <#$getGuildVar[categoria_ticket]> com sucesso.{actionRow: {button:Configurar Categoria:primary:configcategoriabutton:true:✍️}{button:Voltar para Menu:danger:voltarconfig::🔙}}]
  
  $setGuildVar[categoria_ticket;$textinputvalue[idcategoriaticket]]  
  
  $onlyif[$guildchannelexists[$guildid;$textinputvalue[idcategoriaticket]]==true;$interactionupdate[<@$authorid>, a categoria com ID \`$textinputvalue[idcategoriaticket]\` não existe.{actionRow: {button:Configurar Categoria:primary:configcategoriabutton::✍️}{button:Voltar para Menu:danger:voltarconfig::🔙}}]]
  $suppresserrors
  `
}