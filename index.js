const config = require('./config.json');
const { AoiClient } = require("aoi.js");

const { token } = require("./config.json");
const client = new AoiClient({
    token: token, // Token do Bot
    prefix: ".", // Prefixo do Bot
    intents: ["MessageContent", "Guilds", "GuildMessages"],
    events: ["onMessage", "onInteractionCreate"],
    database: {
        type: "aoi.db",
        db: require("@aoijs/aoi.db"),
        dbType: "KeyValue",
        tables: ["main"],
        securityKey: "a-32-characters-long-string-here"
    }
});

// Status do Bot
client.status({
    name: "by Stalling Apps.",
    type: "STREAMING",
    url: "https://www.twitch.tv/sabrina",
    time: 5
});
client.status({
    name: "Link na Bio!",
    type: "STREAMING",
    time: 5,
    url: "https://www.twitch.tv/sabrina"
});
client.status({
    name: "os Melhores Atendimentos!", // Normal status like any other Discord user without any state.
    time: 5,
    type: "STREAMING",
    url: "https://www.twitch.tv/sabrina",
});

// Comando de Inicialização
client.readyCommand({
    code: `$log[Conectado em $userTag[$clientID]\nMeu Dono é: $userTag[$clientownerids]\nEstou em $guildCount Servidores\nMeu Link de Convite é: $getClientInvite ]`
});
client.on("ready", async () => {
    try {
        if (!client.application) return console.log("Erro: A propriedade application não está disponível.");

        await client.application.fetch(); // Atualiza os dados da aplicação
        await client.application.edit({
            description: "made by **Stalling Apps**:\nhttps://discord.gg/BWs2qu5NCm"
        });

        console.log("Biografia Atualizada.");
    } catch (err) {
        console.error("Erro ao atualizar a bio:", err);
    }
});

// Comando Ping
client.command({
    name: "ping",
    code: `Pong! $pingms`
});

// Comando Eval
client.command({
    name: "eval",
    code: `$eval[$message]
    $onlyif[$authorid==1327683260133675118;]`
});
 
 // Pasta de Comandos
client.loadCommands("./Comandos");

// Gerar Copia e Cola
client.functionManager.createFunction({
  name: "$criarpagamentocopiaecola",
  type: "djs",
  code: async d => {
    const { QrCodePix } = require('qrcode-pix');
    const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');
    const data = d.util.aoiFunc(d);
    
    // Extrai os parâmetros (chave PIX e valor) ou usa valores padrão
    const [chave = "", valor = 0, guilda = ""] = data.inside.splits;

    try {
      // Verifica se a chave PIX e o valor são válidos
      if (!chave || isNaN(valor) || valor <= 0) {
        return d.channel.send("Erro: Chave PIX inválida ou valor incorreto.");
      }

      // Criação do QR Code PIX
      const qrCodePix = QrCodePix({
        version: "01",
        key: chave,
        value: parseFloat(valor),
      });

      const payload = qrCodePix.payload();  // Código PIX
      const qrCodeBase64 = await qrCodePix.base64();  // QR Code em base64

      // Criação do embed com o QR Code
      const embed = new EmbedBuilder()
  .setColor("#FFFFFF")
  .setTitle(`Novo Pagamento Solicitado por ${d.author?.username}`)
  .setDescription(`Informações do Pagamento Abaixo.`)
  .setThumbnail(d.guild?.iconURL({ size: 4096, dynamic: true }))
  .setAuthor({ name: `${guilda} | Sistema de Atendimentos` })
  .setFooter({ text: `${guilda} | Todos os Direitos Reservados` })
  .setImage(`attachment://qrcode.png`)
  .addFields(
    { name: "<:memberpanel:1354087712323276841> | Código Copia e Cola", value: payload, inline: true },
    { name: "<:star:1354087721777234053> | Valor do Pagamento", value: `**\`R$ ${parseFloat(valor)}\`**`, inline: true },
    { name: "<:staffpanel:1354087712889503886> | Instruções de Pagamento", value: "Utilize o código **Copia e Cola** acima ou o **QR Code** abaixo para efetuar seu **Pagamento**. Após isso, mande o **Comprovante** para que possamos aprovar seu **Pagamento**.", inline: false }
  )
const row = new ActionRowBuilder().addComponents(
  new ButtonBuilder()
    .setLabel("Copia e Cola")
    .setStyle(ButtonStyle.Primary)
    .setCustomId("copia_e_cola"),
    
  new ButtonBuilder()
    .setLabel("Aprovar Pagamento")
    .setStyle(ButtonStyle.Success)
    .setCustomId("aprovar_pagamento")
);

      // Envia a mensagem com o código PIX e o QR code gerado dentro do embed
      const attachment = Buffer.from(qrCodeBase64.split(",")[1], "base64");

      // Retorna sucesso
      data.result = payload;
      return {
        code: d.util.setCode(data),
      };

    } catch (err) {
      console.error("Erro ao gerar QR Code:", err);
      return {
        code: d.util.setCode({
          result: "Ocorreu um erro ao gerar o QR Code.",
        }),
      };
    }
  }
})


// Funcao de Gerar Pagamentos
client.functionManager.createFunction({
  name: "$criarpagamento",
  type: "djs",
  code: async d => {
    const { QrCodePix } = require('qrcode-pix');
    const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');
    const data = d.util.aoiFunc(d);
    
    // Extrai os parâmetros (chave PIX e valor) ou usa valores padrão
    const [chave = "", valor = 0, guilda = ""] = data.inside.splits;

    try {
      // Verifica se a chave PIX e o valor são válidos
      if (!chave || isNaN(valor) || valor <= 0) {
        return d.channel.send("Erro: Chave PIX inválida ou valor incorreto.");
      }

      // Criação do QR Code PIX
      const qrCodePix = QrCodePix({
        version: "01",
        key: chave,
        value: parseFloat(valor),
      });

      const payload = qrCodePix.payload();  // Código PIX
      const qrCodeBase64 = await qrCodePix.base64();  // QR Code em base64

      // Criação do embed com o QR Code
      const embed = new EmbedBuilder()
  .setColor("#FFFFFF")
  .setTitle(`Novo Pagamento Solicitado por ${d.author?.username}`)
  .setDescription(`Informações do Pagamento Abaixo.`)
  .setThumbnail(d.guild?.iconURL({ size: 4096, dynamic: true }))
  .setAuthor({ name: `${guilda} | Sistema de Atendimentos` })
  .setFooter({ text: `${guilda} | Todos os Direitos Reservados` })
  .setImage(`attachment://qrcode.png`)
  .addFields(
    { name: "Código Copia e Cola", value: payload, inline: false },
    { name: "Valor do Pagamento", value: `**\`R$ ${parseFloat(valor)}\`**`, inline: false },
    { name: "Instruções de Pagamento", value: "Utilize o código **Copia e Cola** acima ou o **QR Code** abaixo para efetuar seu **Pagamento**. Após isso, mande o **Comprovante** para que possamos aprovar seu **Pagamento**.", inline: false }
  )
const row = new ActionRowBuilder().addComponents(
  new ButtonBuilder()
    .setLabel("Copia e Cola")
    .setStyle(ButtonStyle.Primary)
    .setEmoji('1354087712323276841')
    .setCustomId("copia_e_cola"),
    
  new ButtonBuilder()
    .setLabel("Aprovar Pagamento")
    .setStyle(ButtonStyle.Success)
    .setEmoji('1354087717431939162')
    .setCustomId("aprovar_pagamento")
);

      // Envia a mensagem com o código PIX e o QR code gerado dentro do embed
      const attachment = Buffer.from(qrCodeBase64.split(",")[1], "base64");
      await d.channel.send({
        embeds: [embed],
        components: [row],
        files: [{
          attachment,
          name: "qrcode.png",
        }],
      });

      // Retorna sucesso
      data.result = "Pagamento Solicitado com Sucesso.";
      return {
        code: d.util.setCode(data),
      };

    } catch (err) {
      console.error("Erro ao gerar QR Code:", err);
      return {
        code: d.util.setCode({
          result: "Ocorreu um erro ao gerar o QR Code.",
        }),
      };
    }
  }
});

// Função Transcript
client.functionManager.createFunction({
  name: "$transcript",
  type: "djs",
  code: async d => {
    const discordTranscripts = require("discord-html-transcripts");
    const data = d.util.aoiFunc(d);
    const [channel = d.message.channel.id, logchannel = d.message.channel.id] = data.inside.splits;
    let channelid = await d.util.getChannel(d, channel);
    let loggingid = await d.util.getChannel(d, logchannel);
    const attachment = await discordTranscripts.createTranscript(channelid, {
      filename: "registros.html",
      saveImages: true,
      poweredBy: false,
      footerText: "{number} Mensagens Transcritas.",
    });

    const f = await loggingid.send({
      files: [attachment],
    });

    data.result = f;
    return {
      code: d.util.setCode(data),
    };
  }
});

// Função Transcript DM
client.functionManager.createFunction({
    name: "$transcriptDm",
    type: "djs",
    code: async d => {
      const discordTranscripts = require("discord-html-transcripts");
      const data = d.util.aoiFunc(d);
      const [channel = d.channel.id, loguser = d.author.id] = data.inside.splits;
      let channelid = await d.util.getChannel(d, channel);
      let userid = await d.util.getUser(d, loguser);
      const attachment = await discordTranscripts.createTranscript(channelid, {
        filename: "registros.html",
        saveImages: true,
        poweredBy: false,
        footerText: "{number} Mensagens Transcritas."
      });
  
      const f = await userid.send({
        files: [attachment],
      });
  
      data.result = f;
      return {
        code: d.util.setCode(data),
      };
    }
  });

// Iniciar o Bot
client.login();


// Variáveis do Bot
client.variables({
    valorpix: "0",
    chavepix: "2919fb37-04e7-40c8-8572-2c376e829a51",
    emojisadd: "0",
    qavaliacoes: "0",
    tavaliacoes: "0",
    avaliacoes: "0",
    guildid: "",
    titulo1: "",
    titulo2: "",
    titulo3: "",
    titulo4: "",
    titulo5: "",
    desc1: "",
    desc2: "",
    desc3: "",
    desc4: "",
    desc5: "",
    emoji1: "n",
    emoji2: "n",
    emoji3: "n",
    emoji4: "n",
    emoji5: "n",
    abertura_ticket: "",
    fechamento_ticket: "",
    solicitou_ticket: "",
    wallet: "0",
    titulo_ticket: "Abra um Ticket de Atendimento!",
    descricao_ticket: "> **🛡️ | Se você está precisando de Ajuda ou de Suporte, selecione um menu abaixo para abrir um Ticket de Atendimento!**\n\nPreze pelo seu Suporte, iremos respondê-lo(a) o mais rapido possivel!\n\n### 🕑 | Horários\n> Segunda à Segunda (08h às 20h)\n\n### 🫂 | Suporte\n> Iremos entregar a vocês um Suporte eficaz, prático e ágil.\n\n-# Seja atencioso e abra seu Ticket dando-nos uma resposta prévia de como podemos lhe ajudar.",
    canal_ticket: "",
    criador_ticket: "",
    emoji_ticket: "📩",
    categoria_ticket: "Não Identificada",
    cargo_ticket: "",
    registros_ticket: "1349361452250697778",
    cooldown_painelmembroticket: "",
    cooldown_painelstaffticket: "",
    feedbacks_ticket: "",
    assumido_ticket: "1340677420469981205",
    desc_ticket: "",
    banner_ticket: "https://media.discordapp.net/attachments/1354801843020238928/1354933160399339530/20250327_184001.png?ex=67e71756&is=67e5c5d6&hm=22e6d76df8f748f1c31ea0e9e6921cee2cdaa60a3a369e5ec5a70643afc943c7&",
    color_ticket: "FFFFFF",
    description_ticket: "",
    title_ticket: "",
    thumbnail_ticket: "$guildIcon",
    image_ticket: "",
    footer_ticket: "$guildname",
    motivo_encerramentoticket: "",
    user_ticket: "",
    channelvar_ticket: "",
    titulo_b_ticket: "🔔 | Seja Bem-Vindo(a) ao seu Ticket!",
    descricao_b_ticket: "**|EMOJI| | Categoria do Ticket:**\n**\`|CATEGORIA|\`**\n\n**⚠️ | `INFORMAÇÕES IMPORTANTES:`**\n\n📢 | Os **TICKETS** São totalmente Privados. Apenas membros da **STAFF** possuem acesso a este canal.\n\n⚠️ | Evite **MARCAÇÕES**, aguarde até que um **STAFF** esteja disponível para ajudar.\n\n👥 | |ATENDENTE|\n✅ | Este Tópico é destinado para o seu **SUPORTE**. Seja livre para dizer o que precisar!",
});