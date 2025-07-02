module.exports = {
  name: "configregistrosbutton",
  type: "interaction",
  prototype: "button",
  code: `
  $interactionModal[Configuração do Canal de Registros de Tickets;modalregistrostkt;
  {actionRow:
    {textInput:Qual o ID do Canal de Registros?:1:idregistrosticket:false:Deixe vazio para Desativar.:1:200}}]
     $suppresserrors
  `
}