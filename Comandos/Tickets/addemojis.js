module.exports = [{
  name: "configuracao",
  code: `
  $sendMessage[Comandos Slashs Adicionados com Sucesso.]
  $createApplicationCommand[$guildid;ticket;Comandos do Sistema de Atendimentos;false;guild;guild;slash;[
  {
    "type": 1,
    "name": "configurar",
    "description": "Configure o Sistema de Atendimentos.",
    "options": []
  },
  {
    "type": 1,
    "name": "enviar",
    "description": "Envie o Painel de Atendimentos para um Canal.",
    "options": [
      {
        "type": 7,
        "name": "canal",
        "description": "Canal onde ficará o Painel",
        "required": true
      }
    ]
  }
]]

$onlyif[$getapplicationcommandid[ticket]==;]

$sendmessage[Emojis Adicionados com Sucesso.]
  
$createAppEmoji[canal;https://images-ext-1.discordapp.net/external/uoSaBnXbRKv7dDM-PGoORqXPZGDpAXc0gPQnU4j4u5w/https/cdn.discordapp.com/emojis/1354149406747918489.webp]
  
$createAppEmoji[user;https://images-ext-1.discordapp.net/external/mZ8Ha132jMWVdZ7MTbXvKq-ga6u4U95ap2iptloufks/https/cdn.discordapp.com/emojis/1354114687163306138.webp]

$createAppEmoji[id;https://images-ext-1.discordapp.net/external/5LryndNC7_DQLEmdPdHII2PS9RhN2uFDhfYS1SzpGQM/https/cdn.discordapp.com/emojis/1354114685754150965.webp]

$createAppEmoji[timer;https://images-ext-1.discordapp.net/external/WdKf-W9DjiLpH-1i_M3-lw33XHzP5MkqFAJWOH7nH3M/https/cdn.discordapp.com/emojis/1354114684759838761.webp]

$createAppEmoji[clock;https://images-ext-1.discordapp.net/external/6lWOZsqs54ocCGe2-Y4dMH6f5A4P_HTaPp38fZ5xB9E/https/cdn.discordapp.com/emojis/1354114683715584111.webp]

$createAppEmoji[escrita;https://images-ext-1.discordapp.net/external/jpV5mMzf-Ti8q7qWv-JmY108ta-KDQztQN0nvTrg1lg/https/cdn.discordapp.com/emojis/1354114682566213633.webp]
  
  $createAppEmoji[maiss;https://images-ext-1.discordapp.net/external/tf5dIg5UhoYkIBVaXjRDdc_AC89I2dPBTckS0VrjOFk/https/cdn.discordapp.com/emojis/1354087725103321219.webp]
  
  $createAppEmoji[menoss;https://images-ext-1.discordapp.net/external/sf5IAic9h_gs8gmRAVlYAEPWFhIWoSw0pJLPvUhlCX0/https/cdn.discordapp.com/emojis/1354087724247679119.webp]
  
  $createAppEmoji[staff;https://images-ext-1.discordapp.net/external/VIyTaR9Jx7qd7CF1Ryp2-sjYMtXFiuadVuGgCB89Kfc/https/cdn.discordapp.com/emojis/1354801812611530756.webp]
  
  $createAppEmoji[registros;https://images-ext-1.discordapp.net/external/g5xpQyQH4nAxOitsJ34bgznTMmB2Blix8M0Fk9JMZMA/https/cdn.discordapp.com/emojis/1354087722352119901.webp]
  
  $createAppEmoji[star;https://images-ext-1.discordapp.net/external/RwLZH6se5zb6rHB29Ix9tSb7_1v5ueVpVEySgDHp0FY/https/cdn.discordapp.com/emojis/1354087721777234053.webp]
  
  $createAppEmoji[color;https://images-ext-1.discordapp.net/external/hHAhacEGslFEEB7wqxLFAEc1jg_thAxnvhPIxs0dMkA/https/cdn.discordapp.com/emojis/1354087720682520688.webp]
  
  $createAppEmoji[escrever;https://images-ext-1.discordapp.net/external/UuEj6zEXjxVkd662srNdAipRDY9g36UypozW7AusQsU/https/cdn.discordapp.com/emojis/1354087720137392178.webp]
  
  $createAppEmoji[cadeado;https://images-ext-1.discordapp.net/external/T8bW5wPU5lMxpCk6bTDXvX1p5DqL5jdjGAollUMW-54/https/cdn.discordapp.com/emojis/1354087719159992340.webp]
  
  $createAppEmoji[voltar;https://images-ext-1.discordapp.net/external/9jMSVZFM6eebiYrfQjgEDHL5kA8VenlHz1oQFd2ipro/https/cdn.discordapp.com/emojis/1354087718165942393.webp]
  
  $createAppEmoji[confirmar;https://images-ext-1.discordapp.net/external/pA5KAGwzAIWnd6c3UDYtPThHNo93D9iu_iVoRnUKoVI/https/cdn.discordapp.com/emojis/1354087717431939162.webp]
  
  $createAppEmoji[ok;https://images-ext-1.discordapp.net/external/gL1dA5MH-_56w7yj9VXto69It6waYCeJda7twYM029I/https/cdn.discordapp.com/emojis/1354087716505256011.webp]
  
  $createAppEmoji[alerta;https://images-ext-1.discordapp.net/external/0lsD_u1F4lLFdYK1EhqNOp7JBVK4QA0x8w2_AVdZTik/https/cdn.discordapp.com/emojis/1354087715553021972.webp]
  
  $createAppEmoji[erro;https://images-ext-1.discordapp.net/external/6vNSdMyWlbJt4Y43QR83bKpMkA1fcOT3Cw5xfkeK7ko/https/cdn.discordapp.com/emojis/1354087714508640267.webp]
  
  $createAppEmoji[assumir;https://images-ext-1.discordapp.net/external/SeRLYmQAcxFAmsMWClypwYPL0MLWINFeL1O9-_kD7RE/https/cdn.discordapp.com/emojis/1354087713602801698.webp]
  
  $createAppEmoji[staffpanel;https://images-ext-1.discordapp.net/external/pqqFPIUZNw2HaG-E6-rSJKWh9hcaykt9Yz-WbhlqrsM/https/cdn.discordapp.com/emojis/1354087712889503886.webp]
  
  $createAppEmoji[memberpanel;https://images-ext-1.discordapp.net/external/RPc2PCQqzFXi4PWLtfOPAf5Rz3jQ1N32pl-ycrcEPMo/https/cdn.discordapp.com/emojis/1354087712323276841.webp]
  
  $createAppEmoji[notificar;https://images-ext-1.discordapp.net/external/PXV0fbouTMMEVWl6UYleFXRNYz-o12EQxtaPUp2HiT4/https/cdn.discordapp.com/emojis/1354087711295799327.webp]
  
  $setVar[emojisadd;1]
  $suppressErrors
  $onlyif[$authorid==485501213270605824;]
  `
}]