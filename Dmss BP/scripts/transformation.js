import {system, world} from '@minecraft/server'
const Forest = new Map([
    ["minecraft:cherry_log","dmss:cherry_dragon_egg"],
    ["minecraft:birch_log","dmss:birch_dragon_egg"],
    ["minecraft:acacia_log","dmss:acacia_dragon_egg"],
    ["minecraft:azalea_log","dmss:azalea_dragon_egg"],
    ["minecraft:dark_oak_log","dmss:dark_oak_dragon_egg"],
    ["minecraft:jungle_log","dmss:jungle_dragon_egg"],
    ["minecraft:mangrove_log","dmss:mangrove_dragon_egg"],
    ["minecraft:oak_log","dmss:oak_dragon_egg"],
    ["minecraft:pale_oak_log","dmss:pale_oak_dragon_egg"],
    ["minecraft:spruce_log","dmss:spruce_dragon_egg"],
])
const Overworld = new Map([
    ["minecraft:sculk","dmss:sculk_dragon_egg"]
])
const Nether = new Map([
])
const End = new Map([
])

world.beforeEvents.playerInteractWithEntity.subscribe(({player,target, itemStack}) => {
    const egg = target
    const family=egg.getComponent("minecraft:type_family")
    if(egg && family.hasTypeFamily("dragon_egg")){
        if (!egg.getProperty("dmss:transforming")) {
        for (const [block, entity] of Forest) {
            if(entity===egg.typeId){
                const position=egg.location
                const dimension=egg.dimension
                let middle=dimension.getBlock({x:  position.x, y: position.y-1, z: position.z})
                if(middle.typeId==="dmss:nest_block"){
                    let a=dimension.getBlock({x:  position.x+1, y: position.y-1, z: position.z}).typeId
                    let b=dimension.getBlock({x:  position.x-1, y: position.y-1, z: position.z}).typeId
                    let c=dimension.getBlock({x:  position.x, y: position.y-1, z: position.z+1}).typeId
                    let d=dimension.getBlock({x:  position.x, y: position.y-1, z: position.z-1}).typeId
                    let e=dimension.getBlock({x:  position.x+1, y: position.y-1, z: position.z+1}).typeId
                    let f=dimension.getBlock({x:  position.x-1, y: position.y-1, z: position.z+1}).typeId
                    let g=dimension.getBlock({x:  position.x+1, y: position.y-1, z: position.z-1}).typeId
                    let h=dimension.getBlock({x:  position.x-1, y: position.y-1, z: position.z-1}).typeId
                    if(a===b && a===c && a===d && a===e && a===f && a===g && a===h){
                        let Type=Forest.get(a)
                        if(!(Type===egg.typeId)){
                            system.run(() => {
                                egg.triggerEvent("transform")
                                middle.setType("minecraft:air")
                                dimension.getBlock({x:  position.x+1, y: position.y-1, z: position.z}).setType("minecraft:air")
                                dimension.getBlock({x:  position.x-1, y: position.y-1, z: position.z}).setType("minecraft:air")
                                dimension.getBlock({x:  position.x, y: position.y-1, z: position.z+1}).setType("minecraft:air")
                                dimension.getBlock({x:  position.x, y: position.y-1, z: position.z-1}).setType("minecraft:air")
                                dimension.getBlock({x:  position.x+1, y: position.y-1, z: position.z+1}).setType("minecraft:air")
                                dimension.getBlock({x:  position.x-1, y: position.y-1, z: position.z+1}).setType("minecraft:air")
                                dimension.getBlock({x:  position.x+1, y: position.y-1, z: position.z-1}).setType("minecraft:air")
                                dimension.getBlock({x:  position.x-1, y: position.y-1, z: position.z-1}).setType("minecraft:air")
                            });
                            system.runTimeout(() => {
                                egg.remove()
                                const trans=dimension.spawnEntity(Type,{x:  position.x, y: position.y-1, z: position.z})
                                trans.triggerEvent("hatching")
                            }, 200)
                        }
                    }
                }
            }
        }
        for (const [block, entity] of Overworld) {
            if(entity===egg.typeId){
                const position=egg.location
                const dimension=egg.dimension
                let middle=dimension.getBlock({x:  position.x, y: position.y-1, z: position.z})
                if(middle.typeId==="dmss:nest_block"){
                    let a=dimension.getBlock({x:  position.x+1, y: position.y-1, z: position.z}).typeId
                    let b=dimension.getBlock({x:  position.x-1, y: position.y-1, z: position.z}).typeId
                    let c=dimension.getBlock({x:  position.x, y: position.y-1, z: position.z+1}).typeId
                    let d=dimension.getBlock({x:  position.x, y: position.y-1, z: position.z-1}).typeId
                    let e=dimension.getBlock({x:  position.x+1, y: position.y-1, z: position.z+1}).typeId
                    let f=dimension.getBlock({x:  position.x-1, y: position.y-1, z: position.z+1}).typeId
                    let g=dimension.getBlock({x:  position.x+1, y: position.y-1, z: position.z-1}).typeId
                    let h=dimension.getBlock({x:  position.x-1, y: position.y-1, z: position.z-1}).typeId
                    if(a===b && a===c && a===d && a===e && a===f && a===g && a===h){
                        let Type=Overworld[a]
                        world.sendMessage(`${Type}`)
                        if(!Type===egg.typeId){
                            system.run(() => {
                                egg.triggerEvent("transform")
                                middle.setType("minecraft:air")
                                dimension.getBlock({x:  position.x+1, y: position.y-1, z: position.z}).setType("minecraft:air")
                                dimension.getBlock({x:  position.x-1, y: position.y-1, z: position.z}).setType("minecraft:air")
                                dimension.getBlock({x:  position.x, y: position.y-1, z: position.z+1}).setType("minecraft:air")
                                dimension.getBlock({x:  position.x, y: position.y-1, z: position.z-1}).setType("minecraft:air")
                                dimension.getBlock({x:  position.x+1, y: position.y-1, z: position.z+1}).setType("minecraft:air")
                                dimension.getBlock({x:  position.x-1, y: position.y-1, z: position.z+1}).setType("minecraft:air")
                                dimension.getBlock({x:  position.x+1, y: position.y-1, z: position.z-1}).setType("minecraft:air")
                                dimension.getBlock({x:  position.x-1, y: position.y-1, z: position.z-1}).setType("minecraft:air")
                            });
                            system.runTimeout(() => {
                                egg.remove()
                                const trans=dimension.spawnEntity(Type,{x:  position.x, y: position.y-1, z: position.z})
                                trans.triggerEvent("hatching")
                            }, 200)
                        }
                    }
                }
            }
        }
    }}
})