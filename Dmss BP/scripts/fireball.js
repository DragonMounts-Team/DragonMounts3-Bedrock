import {world} from '@minecraft/server'

world.afterEvents.dataDrivenEntityTrigger.subscribe(({entity, eventId}) => {
    let dragon=entity
    //forest
    if (eventId === "dmss:forest_breath") {
        dragon.playAnimation('animation.dragon.ranged_attack', { blendOutTime: 4 });
        const existingVelocity = dragon.getVelocity();
        const dragonDirection = dragon.getViewDirection();
        const dragonRotation = dragon.getRotation();
        const { x, y, z } = dragon.getHeadLocation();
        const { x: dx, y: dy, z: dz } = dragon.getViewDirection();
        const fireball = dragon.dimension.spawnEntity('dmss:forest_shoot', {x: x + dx * 10,y: y + dy * 10,z: z + dz * 10});
        fireball.setRotation(dragonRotation);
        fireball.applyImpulse({x: existingVelocity.x + dragonDirection.x * 2,y: existingVelocity.y + dragonDirection.y * 2,z: existingVelocity.z + dragonDirection.z * 2});
    }
    //sculk
    if (eventId === "dmss:sculk_breath") {
        dragon.playAnimation('animation.dragon.ranged_attack', { blendOutTime: 4 });
        const existingVelocity = dragon.getVelocity();
        const dragonDirection = dragon.getViewDirection();
        const dragonRotation = dragon.getRotation();
        const { x, y, z } = dragon.getHeadLocation();
        const { x: dx, y: dy, z: dz } = dragon.getViewDirection();
        const fireball = dragon.dimension.spawnEntity('dmss:sculk_shoot', {x: x + dx * 2,y: y + dy * 2,z: z + dz * 2});
        fireball.setRotation(dragonRotation);
        fireball.applyImpulse({x: existingVelocity.x + dragonDirection.x * 2,y: existingVelocity.y + dragonDirection.y * 2,z: existingVelocity.z + dragonDirection.z * 2});
    }
})