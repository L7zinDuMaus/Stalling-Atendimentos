const { AoiClient } = require("aoi.js");
const { InviteManager } = require("@akarui/aoi.invite");

const client = new AoiClient({
    token: "MTM0MDY3NzQyMDQ2OTk4MTIwNQ.GltJAi.EwvQElFvtmf302vPM_BCdU7FZxifeJ4P_bDWZI", // Token do Bot
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

client.status({
    name: "Os melhores Atendimentos!",
    type: "STREAMING",
    url: "https://www.twitch.tv/sabrina",
    time: 10
});

client.status({
    name: "discord.gg/tbVCcz3b4g",
    type: "STREAMING",
    time: 10,
    url: "https://www.twitch.tv/sabrina"
});

client.status({
    name: "by Capital Solutions", // Normal status like any other Discord user without any state.
    time: 10,
    type: "STREAMING",
    url: "https://www.twitch.tv/sabrina",
});

new InviteManager(
  client,
  {
    sk: "11111111112222222222333333333344",
  },
  ["inviteJoin", "inviteLeave"]
);

// Comando Ping
client.command({
    name: "ping",
    code: `Pong! $pingms`
});

// Comando de Avaliação
client.command({
    name: "eval",
    code: `$eval[$message]`
});

client.awaitedCommand({
    name: "removeropcaoticket",
    code: `
  $sendmessage[Nice, you reacted with ❤️.]
  `
});

client.loadCommands("./Comandos"); // Carrega os comandos da pasta "comandos"

// Iniciar o bot
client.login();

client.variables({
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
    color_ticket: "ffffff",
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