module.exports = {
  name: "configcargobutton",
  type: "interaction",
  prototype: "button",
  code: `
  $interactionModal[Configuração do Cargo de Atendente de Tickets;modalcargotkt;
  {actionRow:
    {textInput:Qual o ID da Cargo?:1:idcargoticket:false:Deixe vazio para Desativar.:1:200}
    `
}