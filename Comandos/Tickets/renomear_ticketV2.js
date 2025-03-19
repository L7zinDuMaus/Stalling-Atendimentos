module.exports = {
  name: "renomear_ticket",
  type: "interaction",
  prototype: "modal",
  code: `
  $interactionReply[**☑️ | Este Ticket de Atendimento foi Renomeado para \`$textinputvalue[nome_ticket]\` com Sucesso.**]
  $djseval[if (interaction.customId === \'renomear_ticket\') {
      const nomeCanal = interaction.fields.getTextInputValue(\'nome_ticket\');
      try {
        await interaction.channel.setName(\`${nomeCanal}\`);
        await interaction.reply({ content: \'Canal renomeado com sucesso!\', ephemeral: true });
      } catch (error) {
        console.error(error);
        await interaction.reply({ content: \'Erro ao renomear o canal.\', ephemeral: true });
      }
    }]
  
  $sendmessage[a]
  `}