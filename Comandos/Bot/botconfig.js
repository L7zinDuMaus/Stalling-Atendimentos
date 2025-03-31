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
    {button:Config. Nome:config_nome:primary::✍️}
    {button:Config. Avatar:config_avatar:primary::🌆}
    {button:Config. Banner:config_banner:primary::🖼}
  }
  ]
  
  
  $onlyPerms[administrator;$interactionReply[**$customemoji[alerta] | <@$authorid>, você não possui as permissões necessárias para utilizar este Comando.**;;true]]
  `
}