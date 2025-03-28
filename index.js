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
    code: `
    $djsEval[
(async () => {
    try {

        await client.application.fetch(); // Atualiza os dados da aplicação
        await client.application.edit({
            description: "made by **STALLING APPS**:\nhttps://discord.gg/BWs2qu5NCm"
        });
    }
})();
]
    $log[Conectado em $userTag[$clientID]\nMeu Dono é: $userTag[$clientownerids]\nEstou em $guildCount Servidores\nMeu Link de Convite é: $getClientInvite ]`
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