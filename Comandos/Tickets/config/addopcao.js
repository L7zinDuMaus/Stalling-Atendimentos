module.exports = {
  name: "addopcao_ticket",
  type: "interaction",
  prototype: "button",
  code: `
  $interactionModal[Adicionar Opções de Tickets;adicionarop_ticket;
  {actionRow:
    {textInput:Título da Opção:1:tituloopticket:true:ex. Solicitar Suporte:1:25}}
  {actionRow:
    {textInput:Descrição da Opção:1:descricaoopticket:true:ex. Clique aqui para receber Suporte!:1:60}}
  {actionRow: 
    {textInput:Emoji da Opção:1:emojiopticket:true:ex. ☎️:1:2}
}]
`
}