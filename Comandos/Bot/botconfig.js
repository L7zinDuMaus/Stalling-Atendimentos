module.exports = {
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
}