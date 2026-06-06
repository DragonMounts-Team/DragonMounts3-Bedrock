import { world, system } from "@minecraft/server";


system.afterEvents.scriptEventReceive.subscribe(event => {
    const entity = event.sourceEntity
    if (event.id == 'dmss:guidebook') {
        const players = entity.dimension.getPlayers({location: entity.location,closest: 1});
        if (players.length === 0) return; 
        const player = players[0];
//eggs
        if (event.message == 'acacia_egg') {
            if (player.getDynamicProperty("dmss:acacia_egg")?? 0 === 0) {
                player.setDynamicProperty("dmss:acacia_egg", 1);
                player.sendMessage("§2 [Guidebook]§r Acacia egg unlocked!");}
        };
        if (event.message == 'azalea_egg') {
            if (player.getDynamicProperty("dmss:azalea_egg")?? 0 === 0) {
                player.setDynamicProperty("dmss:azalea_egg", 1);
                player.sendMessage("§2 [Guidebook]§r Azalea egg unlocked!");}
        };
        if (event.message == 'birch_egg') {
            if (player.getDynamicProperty("dmss:birch_egg")?? 0 === 0) {
                player.setDynamicProperty("dmss:birch_egg", 1);
                player.sendMessage("§2 [Guidebook]§r Birch egg unlocked!");}
        };
        if (event.message == 'cherry_egg') {
            if (player.getDynamicProperty("dmss:cherry_egg")?? 0 === 0) {
                player.setDynamicProperty("dmss:cherry_egg", 1);
                player.sendMessage("§2 [Guidebook]§r Cherry egg unlocked!");}
        };
        if (event.message == 'dark_oak_egg') {
            if (player.getDynamicProperty("dmss:dark_oak_egg")?? 0 === 0) {
                player.setDynamicProperty("dmss:dark_oak_egg", 1);
                player.sendMessage("§2 [Guidebook]§r Dark oak egg unlocked!");}
        };
        if (event.message == 'jungle_egg') {
            if (player.getDynamicProperty("dmss:jungle_egg")?? 0 === 0) {
                player.setDynamicProperty("dmss:jungle_egg", 1);
                player.sendMessage("§2 [Guidebook]§r Jungle egg unlocked!");}
        };
        if (event.message == 'mangrove_egg') {
            if (player.getDynamicProperty("dmss:mangrove_egg")?? 0 === 0) {
                player.setDynamicProperty("dmss:mangrove_egg", 1);
                player.sendMessage("§2 [Guidebook]§r Mangrove egg unlocked!");}
        };
        if (event.message == 'oak_egg') {
            if (player.getDynamicProperty("dmss:oak_egg")?? 0 === 0) {
                player.setDynamicProperty("dmss:oak_egg", 1);
                player.sendMessage("§2 [Guidebook]§r Oak egg unlocked!");}
        };
        if (event.message == 'pale_oak_egg') {
            if (player.getDynamicProperty("dmss:pale_oak_egg")?? 0 === 0) {
                player.setDynamicProperty("dmss:pale_oak_egg", 1);
                player.sendMessage("§2 [Guidebook]§r Pale oak egg unlocked!");}
        };
        if (event.message == 'spruce_egg') {
            if (player.getDynamicProperty("dmss:spruce_egg")?? 0 === 0) {
                player.setDynamicProperty("dmss:spruce_egg", 1);
                player.sendMessage("§2 [Guidebook]§r Spruce egg unlocked!");}
        };
        if (event.message == 'sculk_egg') {
            if (player.getDynamicProperty("dmss:sculk_egg")?? 0 === 0) {
                player.setDynamicProperty("dmss:sculk_egg", 1);
                player.sendMessage("§2 [Guidebook]§r Sculk egg unlocked!");}
        };
//dragons
        if (event.message == 'acacia_dragon') {
            if ((player.getDynamicProperty("dmss:acacia_dragon")?? 0) === 0) {
                player.setDynamicProperty("dmss:acacia_dragon", 1);
                player.sendMessage("§2 [Guidebook]§r Acacia dragon unlocked!");}
        };
        if (event.message == 'azalea_dragon') {
            if ((player.getDynamicProperty("dmss:azalea_dragon")?? 0) === 0) {
                player.setDynamicProperty("dmss:azalea_dragon", 1);
                player.sendMessage("§2 [Guidebook]§r Azalea dragon unlocked!");}
        };
        if (event.message == 'birch_dragon') {
            if ((player.getDynamicProperty("dmss:birch_dragon")?? 0) === 0) {
                player.setDynamicProperty("dmss:birch_dragon", 1);
                player.sendMessage("§2 [Guidebook]§r Birch dragon unlocked!");}
        };
        if (event.message == 'cherry_dragon') {
            if ((player.getDynamicProperty("dmss:cherry_dragon")?? 0) === 0) {
                player.setDynamicProperty("dmss:cherry_dragon", 1);
                player.sendMessage("§2 [Guidebook]§r Cherry dragon unlocked!");}
        };
        if (event.message == 'dark_oak_dragon') {
            if ((player.getDynamicProperty("dmss:dark_oak_dragon")?? 0) === 0) {
                player.setDynamicProperty("dmss:dark:_oak_dragon", 1);
                player.sendMessage("§2 [Guidebook]§r Dark oak dragon unlocked!");}
        };
        if (event.message == 'jungle_dragon') {
            if ((player.getDynamicProperty("dmss:jungle_dragon")?? 0) === 0) {
                player.setDynamicProperty("dmss:jungle_dragon", 1);
                player.sendMessage("§2 [Guidebook]§r Jungle dragon unlocked!");}
        };
        if (event.message == 'mangrove_dragon') {
            if ((player.getDynamicProperty("dmss:mangorve_dragon")?? 0) === 0) {
                player.setDynamicProperty("dmss:mangrove_dragon", 1);
                player.sendMessage("§2 [Guidebook]§r Mangrove dragon unlocked!");}
        };
        if (event.message == 'oak_dragon') {
            if ((player.getDynamicProperty("dmss:oak_dragon")?? 0) === 0) {
                player.setDynamicProperty("dmss:oak_dragon", 1);
                player.sendMessage("§2 [Guidebook]§r Oak dragon unlocked!");}
        };
        if (event.message == 'pale_oak_dragon') {
            if ((player.getDynamicProperty("dmss:pale_oak_dragon")?? 0) === 0) {
                player.setDynamicProperty("dmss:pale_oak_dragon", 1);
                player.sendMessage("§2 [Guidebook]§r Pale oak dragon unlocked!");}
        };
        if (event.message == 'spruce_dragon') {
            if ((player.getDynamicProperty("dmss:spruce_dragon")?? 0) === 0) {
                player.setDynamicProperty("dmss:spruce_dragon", 1);
                player.sendMessage("§2 [Guidebook]§r Spruce dragon unlocked!");}
        };
        if (event.message == 'sculk_dragon') {
            if ((player.getDynamicProperty("dmss:sculk_dragon")?? 0) === 0) {
                player.setDynamicProperty("dmss:sculk_dragon", 1);
                player.sendMessage("§2 [Guidebook]§r Sculk dragon unlocked!");}
        };
//all eggs
        if (event.message == 'unlock_all') {
            if (player.getDynamicProperty("dmss:acacia_egg")?? 0 === 0) {
                player.setDynamicProperty("dmss:acacia_egg", 1);
                player.sendMessage("§2 [Guidebook]§r Acacia egg unlocked!");}
            if (player.getDynamicProperty("dmss:azalea_egg")?? 0 === 0) {
                player.setDynamicProperty("dmss:azalea_egg", 1);
                player.sendMessage("§2 [Guidebook]§r Azalea egg unlocked!");}
            if (player.getDynamicProperty("dmss:birch_egg")?? 0 === 0) {
                player.setDynamicProperty("dmss:birch_egg", 1);
                player.sendMessage("§2 [Guidebook]§r Birch egg unlocked!");}
            if (player.getDynamicProperty("dmss:cherry_egg")?? 0 === 0) {
                player.setDynamicProperty("dmss:cherry_egg", 1);
                player.sendMessage("§2 [Guidebook]§r Cherry egg unlocked!");}
            if (player.getDynamicProperty("dmss:dark_oak_egg")?? 0 === 0) {
                player.setDynamicProperty("dmss:dark_oak_egg", 1);
                player.sendMessage("§2 [Guidebook]§r Dark oak egg unlocked!");}
            if (player.getDynamicProperty("dmss:jungle_egg")?? 0 === 0) {
                player.setDynamicProperty("dmss:jungle_egg", 1);
                player.sendMessage("§2 [Guidebook]§r Jungle egg unlocked!");}
            if (player.getDynamicProperty("dmss:mangrove_egg")?? 0 === 0) {
                player.setDynamicProperty("dmss:mangrove_egg", 1);
                player.sendMessage("§2 [Guidebook]§r Mangrove egg unlocked!");}
            if (player.getDynamicProperty("dmss:oak_egg")?? 0 === 0) {
                player.setDynamicProperty("dmss:oak_egg", 1);
                player.sendMessage("§2 [Guidebook]§r Oak egg unlocked!");}
            if (player.getDynamicProperty("dmss:pale_oak_egg")?? 0 === 0) {
                player.setDynamicProperty("dmss:pale_oak_egg", 1);
                player.sendMessage("§2 [Guidebook]§r Pale oak egg unlocked!");}
            if (player.getDynamicProperty("dmss:spruce_egg")?? 0 === 0) {
                player.setDynamicProperty("dmss:spruce_egg", 1);
                player.sendMessage("§2 [Guidebook]§r Spruce egg unlocked!");}
            if (player.getDynamicProperty("dmss:sculk_egg")?? 0 === 0) {
                player.setDynamicProperty("dmss:sculk_egg", 1);
                player.sendMessage("§2 [Guidebook]§r Sculk egg unlocked!");}
//all dragons
            if ((player.getDynamicProperty("dmss:acacia_dragon")?? 0) === 0) {
                player.setDynamicProperty("dmss:acacia_dragon", 1);
                player.sendMessage("§2 [Guidebook]§r Acacia dragon unlocked!");}
            if ((player.getDynamicProperty("dmss:azalea_dragon")?? 0) === 0) {
                player.setDynamicProperty("dmss:azalea_dragon", 1);
                player.sendMessage("§2 [Guidebook]§r Azalea dragon unlocked!");}
            if ((player.getDynamicProperty("dmss:birch_dragon")?? 0) === 0) {
                player.setDynamicProperty("dmss:birch_dragon", 1);
                player.sendMessage("§2 [Guidebook]§r Birch dragon unlocked!");}
            if ((player.getDynamicProperty("dmss:cherry_dragon")?? 0) === 0) {
                player.setDynamicProperty("dmss:cherry_dragon", 1);
                player.sendMessage("§2 [Guidebook]§r Cherry dragon unlocked!");}
            if ((player.getDynamicProperty("dmss:dark_oak_dragon")?? 0) === 0) {
                player.setDynamicProperty("dmss:dark_oak_dragon", 1);
                player.sendMessage("§2 [Guidebook]§r Dark oak dragon unlocked!");}
            if ((player.getDynamicProperty("dmss:jungle_dragon")?? 0) === 0) {
                player.setDynamicProperty("dmss:jungle_dragon", 1);
                player.sendMessage("§2 [Guidebook]§r Jungle dragon unlocked!");}
            if ((player.getDynamicProperty("dmss:mangorve_dragon")?? 0) === 0) {
                player.setDynamicProperty("dmss:mangrove_dragon", 1);
                player.sendMessage("§2 [Guidebook]§r Mangrove dragon unlocked!");}
            if ((player.getDynamicProperty("dmss:oak_dragon")?? 0) === 0) {
                player.setDynamicProperty("dmss:oak_dragon", 1);
                player.sendMessage("§2 [Guidebook]§r Oak dragon unlocked!");}
            if ((player.getDynamicProperty("dmss:pale_oak_dragon")?? 0) === 0) {
                player.setDynamicProperty("dmss:pale_oak_dragon", 1);
                player.sendMessage("§2 [Guidebook]§r Pale oak dragon unlocked!");}
            if ((player.getDynamicProperty("dmss:spruce_dragon")?? 0) === 0) {
                player.setDynamicProperty("dmss:spruce_dragon", 1);
                player.sendMessage("§2 [Guidebook]§r Spruce dragon unlocked!");}
            if ((player.getDynamicProperty("dmss:sculk_dragon")?? 0) === 0) {
                player.setDynamicProperty("dmss:sculk_dragon", 1);
                player.sendMessage("§2 [Guidebook]§r Sculk dragon unlocked!");}
        };
    }
});

