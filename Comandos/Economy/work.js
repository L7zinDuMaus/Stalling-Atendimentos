module.exports = ({
    name: "work",
    code: `$color[ffffff]
    $description[You worked as $random[developer;thief;green groccer;doctor] and got $random[50;2000]💴!]
    $setGlobalUserVar[wallet;$sum[$getGlobalUserVar[wallet];$random[500;20000]]]
    $globalCooldown[30m;{description: You can work again in **%time%**!}{color:ffffff}]
    $onlyIf[$checkContains[$channelType;text;news]==true;]`    
})
