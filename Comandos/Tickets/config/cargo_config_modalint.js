module.exports = {
  name: "modalcargotkt",
  type: "interaction",
  prototype: "modal",
  code: `
  $interactionedit[<@$authorid>, o cargo foi configurado para <@&$getGuildVar[cargo_ticket]> com sucesso.{actionRow: {button:Configurar Cargo:primary:configcargobutton:true:✍️}{button:Voltar para Menu:danger:voltarconfig::🔙}}]
  
  $setGuildVar[cargo_ticket;$textinputvalue[idcargoticket]]  
  
  $onlyif[$roleexists[$textinputvalue[idcargoticket]]==true;$interactionupdate[<@$authorid>, o cargo com ID \`$textinputvalue[idcargoticket]\` não existe. O Sistema de Cargo foi Desativado. $setguildvar[cargo_ticket;] {actionRow: {button:Configurar Cargo:primary:configcargobutton::✍️}{button:Voltar para Menu:danger:voltarconfig::🔙}}]]
   $suppresserrors
 
  `
}