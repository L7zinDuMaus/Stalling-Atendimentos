module.exports = {
  name: "ticket",
  type: "interaction",
  prototype: "slash",
  sub_command: "configurar",
  code: `
  $interactionreply[{newEmbed: {title:Configurações Stalling Atendimentos}{description:Utilize dos Botões e do Menu de Seleção abaixo para Configurar o seu Stalling Atendimentos.}{field:$customemoji[staff] | Cargo Atendente:$if[$roleexists[$getGuildVar[cargo_ticket]]==true;<@&$getGuildVar[cargo_ticket]>;Cargo não Configurado/Existente]}{field:$customemoji[registros] | Canal de Registros:$if[$guildchannelexists[$guildid;$getGuildVar[registros_ticket]]==true;<#$getGuildVar[registros_ticket]>;Canal não Configurado/Existente]}{field:$customemoji[star] | Canal de Feedbacks:$if[$guildchannelexists[$guildid;$getGuildVar[feedbacks_ticket]]==true;<#$getGuildVar[feedbacks_ticket]>;Canal não Configurado/Existente]}{field:$customemoji[color] | Cor dos Paineis:$getGuildVar[color_ticket]}{color:$getGuildVar[color_ticket]}{thumbnail:$guildicon}{author:$guildname | Atendimentos}{footer:$guildname | Todos os Direitos Reservados}}{actionRow:{selectMenu:ticket_configurar:Selecione a Opção que Deseja Configurar.:1:1:false:{stringInput:Cargo Atendente:cargo_ticket:Cargo que poderá ver os Tickets.::$customemoji[staff]}{stringInput:Canal de Registros:registros_ticket:Canal onde será enviado os Registros de Tickets.::$customemoji[registros]}{stringInput:Canal de Feedbacks:feedbacks_ticket:Canal onde será enviado os Feedbacks dos Tickets.::$customemoji[star]}}} {actionRow: {button:Configurar Textos:primary:configurartextos_ticket::🖌}{button:Variáveis:success:variaveistextos_tickets::🗝}{button:Gerenciar Opções:secondary:gerenciaropcoes_ticket::⚙️}{button:Person. Bot:primary:personalizar_bot::🎨}};;true] 
  
  $onlyif[$getVar[emojisadd]==1;]
  
  $onlyPerms[administrator;❌️ | Você não tem permissão para usar este comando!]
  
`}  