module.exports = {
  name: "configurartextos_ticket",
  type: "interaction",
  prototype: "button",
  code: `
  $interactionModal[Configuração de Textos;configurartextosticket;
  {actionRow:
    {textInput:Qual o Título do Painel?:1:titulopainel:false:Escreva RESETAR para deixar padrão.:5:50:$getGuildVar[titulo_ticket]}
  }{actionRow:
    {textInput:Qual a Descricao do Painel?:2:descricaopainel:false:Escreva RESETAR para deixar padrão.:5:1000:$getGuildVar[descricao_ticket]}
  }{actionRow:
    {textInput:Qual o Título do Painel de Boas-Vindas?:1:titulobbpainel:false:Escreva RESETAR para deixar padrão.:5:50:$getGuildVar[titulo_b_ticket]}
  }{actionRow:
    {textInput:Qual a Descricao do Painel de Boas Vindas?:2:descricaobbpainel:false:Escreva RESETAR para deixar padrão.:5:1000:$getGuildVar[descricao_b_ticket]}
  }{actionRow:
    {textInput:Qual Banner Deseja Utilizar?:1:bannerpainel:true:Escreva RESETAR para deixar padrão.:5:200:$getGuildVar[banner_ticket]}
  }{actionRow:
    {textInput:Qual Cor mais combina com seu Servidor?:1:corpainel:true:Escreva RESETE para deixar padrão.:6:6:$getGuildVar[color_ticket]}
  }]
  `
}