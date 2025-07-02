module.exports = {
  name: "modalfeedbackstkt",
  type: "interaction",
  prototype: "modal",
  code: `
  $if[$channelexists[$textinputvalue[idfeedbacksticket]]==true;$interactionedit[<@$authorid>, o canal de feedbacks foi configurado para <#$getGuildVar[feedbacks_ticket]> com sucesso.{actionRow: {button:Configurar Canal de Feedbacks:primary:configfeedbacksbutton:true:✍️}{button:Voltar para Menu:danger:voltarconfig::🔙}}];
  $interactionedit[<@$authorid>, o sistema de feedbacks foi desativado com sucesso.{actionRow: {button:Configurar Canal de Feedbacks:primary:configfeedbacksbutton::✍️}{button:Voltar para Menu:danger:voltarconfig::🔙}}]
]
 $setGuildVar[feedbacks_ticket;$textinputvalue[idfeedbacksticket]]
  
  $onlyif[$channelexists[$textinputvalue[idfeedbacksticket]]==true;$interactionupdate[<@$authorid>, o canal com ID \`$textinputvalue[idfeedbacksticket]\` não existe. O Sistema de Feedbacks foi Desativado. $setguildvar[feedbacks_ticket;] {actionRow: {button:Configurar Canal de Feedbacks:primary:configfeedbacksbutton::✍️}{button:Voltar para Menu:danger:voltarconfig::🔙}}]]
  $suppresserrors
  `
}