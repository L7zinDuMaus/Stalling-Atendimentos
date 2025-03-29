module.exports = [{
  name: "gerar_pagamento",
  type: "interaction",
  prototype: "button",
  code: `
  $interactionModal[Gerar Pagamentos;gerarpagamento_ticket; {actionRow: {textInput:Qual o Valor do Pagamento?:1:valorpix_ticket:true:Ex. 4.99:1:5}} {actionRow: {textInput:Qual a Chave PIX do Pagamento?:1:chavepix_ticket:true:Ex. 4.99:5:400:$getGuildVar[chavepix]}}
  
  
  `
}, {
  name: "gerarpagamento_ticket",
  type: "interaction",
  prototype: "modal",
  code: `
  $criarpagamento[$textinputvalue[chavepix_ticket];$textinputvalue[valorpix_ticket];$guildname]
  
  `
}]