module.exports = {
  name: "ticket",
  type: "interaction",
  prototype: "slash",
  sub_command: "configurar",
  code: `
  $interactionreply[{newEmbed: {title:Painel de Configuração de Tickets}{description:Selecione uma opção abaixo para configurar o painel de tickets.}{field:$customemoji[staff] | Cargo Atendente:$if[$roleexists[$getGuildVar[cargo_ticket]]==true;<@&$getGuildVar[cargo_ticket]>;Cargo não Configurado/Existente]}{field:$customemoji[registros] | Canal de Registros:$if[$guildchannelexists[$guildid;$getGuildVar[registros_ticket]]==true;<#$getGuildVar[registros_ticket]>;Canal não Configurado/Existente]}{field:$customemoji[star] | Canal de Feedbacks:$if[$guildchannelexists[$guildid;$getGuildVar[feedbacks_ticket]]==true;<#$getGuildVar[feedbacks_ticket]>;Canal não Configurado/Existente]}{field:Cor dos Paineis:$getGuildVar[color_ticket]}{field:Título Painel:\`\`\`\n$getGuildVar[titulo_ticket]\`\`\`}{field:Descricao Painel:\`\`\`\n$getGuildVar[descricao_ticket]\`\`\`}{field:Título Painel Boas-Vindas:\`\`\`\n$getGuildVar[titulo_b_ticket]\`\`\`}{field:Descricao Painel Boas-Vindas:\`\`\`\n$getGuildVar[descricao_b_ticket]\`\`\`}{color:$getGuildVar[color_ticket]}{thumbnail:$guildicon}{author:$guildname | Atendimentos}{footer:$guildname | Todos os Direitos Reservados}}{actionRow:{selectMenu:ticket_configurar:Selecione a Opção que Deseja Configurar.:1:1:false:{stringInput:Cargo Atendente:cargo_ticket:Cargo que poderá ver os Tickets.}{stringInput:Canal de Registros:registros_ticket:Canal onde será enviado os Registros de Tickets.}{stringInput:Feedback:feedbacks_ticket:Canal onde será enviado os Feedbacks dos Tickets}}} {actionRow: {button:Configurar Textos:primary:configurartextos_ticket::🖌}{button:Variáveis:success:variaveistextos_tickets::🗝}{button:Gerenciar Opções:secondary:gerenciaropcoes_ticket::⚙️}};;true]
  
  $onlyif[$getVar[emojisadd]==1;]
  
  $onlyPerms[administrator;❌️ | Você não tem permissão para usar este comando!]
  
`}  