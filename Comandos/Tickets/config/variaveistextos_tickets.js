module.exports = {
  name: "variaveistextostickets",
  type: "interaction",
  prototype: "button",
  code: `
  $interactionreply[{newEmbed: 
  {author:$guildname | Atendimentos}
  {title:Variáveis de Textos}
  {field:|EMOJI|:Mostrará o Emoji da Categoria Selecionada. (usado apenas em paineis de boas-vindas)}
  {field:|CATEGORIA|:Mostrará o nome da Categoria Selecionada. (usado apenas em paineis de boas-vindas)}
  {field:|USUARIO|:Mencionará o Usuário que abriu o Ticket. (usado apenas em paineis de boas-vindas)}
  {field:|ATENDENTE|:Irá Mencionar o Staff que Reivindicou o Ticket. (usado apenas em paineis de boas-vindas)}
  {color:$getGuildVar[color_ticket]}
  {thumbnail:$guildicon}
  {footer:$guildname | Todos os Direitos Reservados}
  {description:Abaixo estão todas as minhas variáveis!}};;true]
  
  `
}