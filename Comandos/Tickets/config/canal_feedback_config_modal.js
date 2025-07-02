module.exports = {
  name: "configfeedbacksbutton",
  type: "interaction",
  prototype: "button",
  code: `
  $interactionModal[Configuração do Canal de Feedbacks de Tickets;modalfeedbackstkt;
  {actionRow:
    {textInput:Qual o ID do Canal de Feedbacks?:1:idfeedbacksticket:false:Deixe vazio para Desativar.:1:200}}]
     $suppresserrors
  `
}