module.exports = {
  name: "configcanalbutton",
  type: "interaction",
  prototype: "button",
  code: `
  $interactionModal[Configuração do Canal do Painel de Tickets;modalcanaltkt;
  {actionRow:
    {textInput:Qual o ID do Canal?:1:idcanalticket:true:Insira aqui o ID do Canal.:2:200}}]
  `
}