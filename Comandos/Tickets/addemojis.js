module.exports = [{
  name: "ticket",
  type: "interaction",
  prototype: "slash",
  sub_command: "configurar",
  code: `
  $setVar[emojisadd;1]
  $interactionreply[**$customemoji[ok] | Emojis Carregados. Utilize o comando \`/ticket configurar\` novamente.;;true]
$createAppEmoji[canal;https://media.discordapp.net/attachments/1352060466175803543/1354149216238436352/0023-FE0F-20E3_color.png?ex=67e43d3c&is=67e2ebbc&hm=1817c4761897ce4ba8eafbe55703c51efa39fb1dc430305916bc29d41bdf0a33&]
  
$createAppEmoji[user;https://media.discordapp.net/attachments/1352060466175803543/1354113507221573632/1F466_color.png?ex=67e41bfa&is=67e2ca7a&hm=cb77d211daf306cda9ff19184b766e846994975ff5c88da122072bac97d746c3&]

$createAppEmoji[id;https://media.discordapp.net/attachments/1352060466175803543/1354113507553181706/1F194_color.png?ex=67e41bfa&is=67e2ca7a&hm=81ff82cfd9f9ca257764fa838d78c370d30b195def90bffa6954710f6da212a7&]

$createAppEmoji[timer;https://media.discordapp.net/attachments/1352060466175803543/1354113507855175761/23F1_color.png?ex=67e41bfa&is=67e2ca7a&hm=2a6b1f07e43047ec58bef0d54669affbfc3f938d3bef88d6ef8f27658f583185&]

$createAppEmoji[clock;https://media.discordapp.net/attachments/1352060466175803543/1354113508152705045/E0AB_color.png?ex=67e41bfa&is=67e2ca7a&hm=a07f0473418c919fd3073704ff7a1adf2c32d93e66ca8f4b2b9a04bfdcd3d13f&]

$createAppEmoji[escrita;https://media.discordapp.net/attachments/1352060466175803543/1354113596673757325/270D_color.png?ex=67e41c0f&is=67e2ca8f&hm=be2acf9b1bb0f42be9ce791fa7e1f3737cd569a117418e9caa573886940187e2&]
  
  $createAppEmoji[maiss;https://media.discordapp.net/attachments/1352060466175803543/1354073242213679174/2795_color.png?ex=67e3f67a&is=67e2a4fa&hm=239f7d98e916cb802c807a2a49238f29a43f2aa045b70875fdd95dbc5f9e563a&;true]
  
  $createAppEmoji[menoss;https://media.discordapp.net/attachments/1352060466175803543/1354073249088143451/002D_color.png?ex=67e3f67c&is=67e2a4fc&hm=f43b273a8f530468c03ab47b4300703855f0f92482a752ebc16f989c09c6ff40&]
  
  $createAppEmoji[staff;https://media.discordapp.net/attachments/1352060466175803543/1354064442626674688/1F46E_color.png?ex=67e3ee48&is=67e29cc8&hm=bd39f6e647bb5359f0da9342973b553ba7d1acef0e113ed66c61faff30838350&]
  
  $createAppEmoji[registros;https://media.discordapp.net/attachments/1352060466175803543/1354064585841311774/1F4C1_color.png?ex=67e3ee6a&is=67e29cea&hm=8a24a6c7712e610a0933e886eb0d4404fb5c075b4816cbd83eba3afc1c0157f4&]
  
  $createAppEmoji[star;https://media.discordapp.net/attachments/1352060466175803543/1354064891744358400/1F31F_color.png?ex=67e3eeb3&is=67e29d33&hm=96854738b1e8e060956fd42b1e2898c4cc50e3bb53d19628a2e0b3a766410c52&]
  
  $createAppEmoji[color;https://media.discordapp.net/attachments/1352060466175803543/1354065150130524253/1F3A8_color.png?ex=67e3eef1&is=67e29d71&hm=b2772014fe57d4b8374eaf01bfef608f3f42ad1a9c2526f6a57cbc4c17a9ee5a&]
  
  $createAppEmoji[escrever;https://media.discordapp.net/attachments/1352060466175803543/1354067154781081691/E267_color.png?ex=67e3f0cf&is=67e29f4f&hm=4c47ba1fd6ed267ef640ab1af26fe835e440c3c1e4ea9545590c2f0170d190a5&]
  
  $createAppEmoji[cadeado;https://media.discordapp.net/attachments/1352060466175803543/1354079152759902218/1F512_color.png?ex=67e3fbfb&is=67e2aa7b&hm=0eaa7e2825238f637d089064d362dd3478ec1528fbc8434823bbbd2b48e507e9&]
  
  $createAppEmoji[voltar;https://media.discordapp.net/attachments/1352060466175803543/1354084037039489106/1F519_color.png?ex=67e40088&is=67e2af08&hm=0afb130f3dbb9921bbb2e4ed81c81f18971cc67369699af06dab56cb13594b1c&]
  
  $createAppEmoji[confirmar;https://media.discordapp.net/attachments/1352060466175803543/1354084044832378931/2611_color.png?ex=67e40089&is=67e2af09&hm=3edcd362fe95ed7897878d4c45c19e092b8d0728b96edfdf60dcde8f96957239&]
  
  $createAppEmoji[ok;https://media.discordapp.net/attachments/1352060466175803543/1354086508352766012/2705_color.png?ex=67e402d5&is=67e2b155&hm=4ddadddb544acf6fa47bb4235f08dacc1147ff715251a06fb6682bf86a60fb5e&]
  
  $createAppEmoji[alerta;https://media.discordapp.net/attachments/1352060466175803543/1354084035860627510/26A0_color.png?ex=67e40087&is=67e2af07&hm=b20447bdbfbf2243201e24324e5ec3e22d4c44fe92052b59d197863388281c49&]
  
  $createAppEmoji[erro;https://media.discordapp.net/attachments/1352060466175803543/1354084036120678451/274C_color.png?ex=67e40087&is=67e2af07&hm=1a1a5bd97d79fa986891e927fd146003e54b1e92370279ddb57a69e518f91e65&]
  
  $createAppEmoji[assumir;https://media.discordapp.net/attachments/1352060466175803543/1354084037320245319/1F64B_color.png?ex=67e40088&is=67e2af08&hm=bcc381eca2bd6571082e9a6709dfcba2c8682a106f6c844f7841ec827081052c&]
  
  $createAppEmoji[staffpanel;https://media.discordapp.net/attachments/1352060466175803543/1354084037781880862/1F4D1_color.png?ex=67e40088&is=67e2af08&hm=6a94bf641676922aae61dde73a5f3e61c2b4ceda614c14e9dbaf85b92570d347&]
  
  $createAppEmoji[memberpanel;https://media.discordapp.net/attachments/1352060466175803543/1354084037550936074/1F4C3_color.png?ex=67e40088&is=67e2af08&hm=5235aa7f3d6b2d564112fa86f63c914e40d2d43c0817ff021e902b1378a12310&]
  
  $createAppEmoji[notificar;https://media.discordapp.net/attachments/1352060466175803543/1354084037995528323/1F4E8_color.png?ex=67e40088&is=67e2af08&hm=474f16c3b2b4aaa4e05fdbc0fa92146dbe4185f1005b8dd4275cd9458a555eac&]
  
  $onlyif[$getVar[emojisadd]==0;]
  
  $onlyPerms[administrator;❌️ | Você não tem permissão para usar este comando!]
  `
}]