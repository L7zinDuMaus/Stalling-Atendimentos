module.exports = {
  name: "ticket_configurar",
  type: "interaction",
  prototype: "selectMenu",
  code: `
  $interactionupdate[<@$authorid>, utilize os Botões abaixo para se orientar.{actionRow: {button:Configurar Canal de Registros:primary:configregistrosbutton::✍️}{button:Voltar para Menu:danger:voltarconfig::🔙}}]
  $onlyIf[$interactionData[values[0]]==registros_ticket;]
   $suppresserrors
  `
}