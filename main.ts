controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . 8 . . . . . . 2 . . . . . . . 
        . . 8 . . . . . 4 2 . . . . . . 
        . 8 8 3 f 3 f 3 1 5 4 2 . . . . 
        . . 8 f 3 f 3 f 1 5 4 2 . . . . 
        . 8 . . . . . . 4 2 . . . . . . 
        . . . . . . . . 2 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, spacePlane, 200, 0)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.ashes, 500)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    scene.cameraShake(4, 500)
    info.changeLifeBy(-1)
})
let bogey: Sprite = null
let projectile: Sprite = null
let spacePlane: Sprite = null
spacePlane = sprites.create(img`
    ..ccc.........ffffff....
    ..f9cc.......f3333ff....
    ..f99cc...fffcc33ff.....
    ..f399cccc36669996cc....
    ..f339c33336666699b9c...
    ..cf3333336666666b999c..
    .c3bf333366666b11199b6c.
    f33cccbcc6666699111b666c
    fffffcc3336666666666666f
    .....f3333996666666666f.
    ....f333399fc6666666ff..
    ...c333399ffffffffff....
    ...c3333cfffc3f.........
    ...ffffffff33cf.........
    .......ffff33f..........
    ........fffff...........
    `, SpriteKind.Player)
controller.moveSprite(spacePlane, 200, 200)
spacePlane.setStayInScreen(true)
info.setLife(3)
game.onUpdateInterval(1000, function () {
    bogey = sprites.create(img`
        . . f f f . . . . . . . . . . . 
        f f f c c . . . . . . . . f f f 
        f f c c c . c c . . . f c b b c 
        f f c 3 c c 3 c c f f b b b c . 
        f f c 3 b c 3 b c f b b c c c . 
        f c 1 b b b 1 b c f b c b c c . 
        c c f 1 b 1 f b c b b c b b c . 
        c b b b b b b b b b c c c b c . 
        c b 1 f f 1 c b b c c c c c . . 
        c f 1 f f 1 f b b b b f c . . . 
        f f f f f f f b b b b f c . . . 
        f f 2 2 2 2 f b b b b f c c . . 
        . f 2 2 2 2 2 b b b c f . . . . 
        . . f 2 2 2 b b b c f . . . . . 
        . . . f f f f f f f . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    bogey.setVelocity(-100, 0)
    bogey.setPosition(160, randint(5, 115))
    bogey.setFlag(SpriteFlag.AutoDestroy, true)
})
