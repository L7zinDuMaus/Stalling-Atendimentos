module.exports = {
  name: "configcategoriabutton",
  type: "interaction",
  prototype: "button",
  code: `
  $interactionModal[Configuração da Categoria de Tickets;modalcategoriatkt;
  {actionRow:
    {textInput:Qual o ID da Categoria?:1:idcategoriaticket:true:Insira aqui o ID da Categoria.:2:200}
    `
}