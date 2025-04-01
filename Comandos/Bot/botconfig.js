module.exports = [{
  name: "botconfig",
  type: "interaction",
  prototype: "slash",
  code: `
  $interactionedit[<@$authorid> {newEmbed:
    {author:$guildname | Sistema de Atendimentos}
    {footer:$guildname | Todos os Direitos Reservados} {color:$getGuildVar[color_ticket]}{thumbnail:$guildicon}
    {title:🎨 | Personalização do Bot Stalling Atendimentos}
    {description:Personalize o seu Bot a partir dos Botões abaixo.}
  }{actionRow:
    {button:Config. Nome:primary:config_nome::✍️}
    {button:Config. Avatar:primary:config_avatar::🌆}
    {button:Config. Banner:primary:config_banner::🖼} 
  }
  ]
  
  
  $onlyPerms[administrator;$interactionReply[**$customemoji[alerta] | <@$authorid>, você não possui as permissões necessárias para utilizar este Comando.**;;true]]
  `
}, {
  name: "personalizar_bot",
  type: "interaction",
  prototype: "button",
  code: `
  $interactionModal[Personalize seu Stalling Atendimentos!;personalizar_bot;{actionRow: {textInput:Nome do seu Bot:1:nome_bot:true:Insira aqui o nome do seu Stalling Bot.:4:25:$username[$clientid]}}{actionRow:{textInput:Ícone do seu Bot:1:icone_bot:true:Insira aqui o Ícone do seu Stalling Bot. (url - link):10:200:$usericon[$clientid]}}{actionRow:{textInput:Banner do seu Bot:1:banner_bot:true:Insira aqui o Banner do seu Stalling Bot. (url - link):10:200:$userbanner[$clientid]}}]
  $suppressErrors
  
  
  
  `
}]