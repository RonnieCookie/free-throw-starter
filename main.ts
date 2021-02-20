namespace SpriteKind {
    export const Hoop = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    banana = sprites.createProjectileFromSprite(img`
        . . . e 5 5 5 5 5 5 5 5 5 5 5 . 
        . . . . . . 5 5 5 5 5 5 5 5 5 . 
        . . . . . . . . 5 5 5 5 5 5 5 . 
        . . . . . . . . . . 5 5 5 5 5 . 
        . . . . . . . . . . 5 5 5 5 5 . 
        . . . . . . . . . 5 5 5 5 5 . . 
        . . e . . . . . 5 5 5 5 5 5 . . 
        . . 5 . . . . 5 5 5 5 5 5 5 . . 
        . . 5 5 5 5 5 5 5 5 5 5 . . . . 
        . . 5 5 5 5 5 5 5 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, playerSprite, 0, -50)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Projectile, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    otherSprite.destroy()
})
sprites.onOverlap(SpriteKind.Hoop, SpriteKind.Projectile, function (sprite, otherSprite) {
    info.changeScoreBy(3)
    otherSprite.destroy()
    if (info.score() == 150) {
        game.over(true)
    }
})
let banana: Sprite = null
let playerSprite: Sprite = null
scene.setBackgroundImage(img`
    dddddddddddddddddddddddddddddddddddddddd111111111111111111111111111111111111111111111111111111111111111111111111111111111ddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddd1ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1ddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddd1ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1ddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddd1ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1ddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddd1ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1ddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddd1ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1ddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddd1ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1ddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddd1ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1ddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddd1ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1ddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddd1ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1ddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddd1ddddddddddddddddddddddddddddddddddddddddddddddddddfdddddddddddddddddddddddddddd1ddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddd1ddddddddddddddddddddddddddddddddddddddddddddddddddfdddddddddddddddddddddddddddd1ddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddd1ddddddddddddddddddddddddddddddddddddddddddddddddddfdddddddddddddddddddddddddddd1ddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddd111111dddddddddddddddddddddddddddddddddddddddddddddfddddddddddddddddddddddd111111ddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddd1dddddddddddddddddddddddddddfddddddddddddddddddddddfdddddddddddddddddddddddddddd1ddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddd1dddddddddddddddddddddddddddfdddddddddddddddddddddddfddddddddddddddddddddddddddd1ddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddd1dddddddddddddddddddddddddddfdddddddddddddddddddddddfddddddddddddddddddddddddddd1ddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddd1ddddddddddddddddddddddddddddfdddddddddddddddddddddddfdddddddddddddddddddddddddd1ddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddd1ddddddddddddddddddddddddddddfddddddddddddddddddddddddfddddddddddddddddddddddddd1ddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddd1ddddddddddddddddddddddddddddfddddddddddddddddddddddddfddddddddddddddddddddddddd1ddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddd1ddddddddddddddddddddddddddddfddddddddddddddddddddddddfddddddddddddddddddddddddd1ddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddd1ddddddddddddddddddddddddddddfddddddddddddddddddddddddfddddddddddddddddddddddddd1ddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddd1ddddddddddddddddddddddddddddfddddddddddddddddddddddddfddddddddddddddddddddddddd1ddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddd1ddddddddddddddddddddddddddddfdddddddddddddddddddddddddfdddddddddddddddddddddddd1ddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddd1dddddddddddddddddddddddddddddfddddddddddddddddddddddddfdddddddddddddddddddddddd1ddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddd1dddddddddddddddddddddddddddddfddddddddddddddddddddddddddddddddddddddddddddddddd1ddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddd1dddddddddddddddddddddddddddddfddddddddddddddddddddddddddddddddddddddddddddddddd1ddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddd1ddddddddddddddddddddddddddddddfdddddddddddddddddddddddddddddddddddddddddddddddd1ddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddd1ddddddddddddddddddddddddddddddfdddddddddddddddddddddddddddddddddddddddddddddddd1ddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddd1ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1ddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddd1ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1ddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddd1ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1ddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddd1ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfdddddddddd1ddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddd111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfddddd111111ddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddd1ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfdddddddddd1ddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddd1ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfdddddddddd1ddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddd1ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfdddddddddd1ddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddd1dddddddddddddddddfddddddddddddddddddddddddddddddddddddddddddddddddddfdddddddddd1ddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddd1dddddddddddddddddfddddddddddddddddddddddddddddddddddddddddddddddddddffddddddddd1ddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddd1ddddddddddddddddddfddddddddddddddddddddddddddddddddddddddddddddddddddfddddddddd1ddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddd1ddddddddddddddddddfddddddddddddddddddddddddddddddddddddddddddddddddddfddddddddd1ddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddd1dddddddddddddddddddfdddddddddddddddddddddddddddddddddddddddddddddddddfddddddddd1ddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddd1dddddddddddddddddddfdddddddddddddddddddddddddddddddddddddddddddddddddfddddddddd1ddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddd1ddddddddddddddddddddfddddddddddddddddddddddddddddddddddddddddddddddffdddddddddd1ddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddd1dddddddddddddddddddddfdddddddddddddddddddddddddddddddddddddddddffffdddddddddddd1ddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddd1ddddddddddddddddddddddffdddddddddddddddddddddddddddddddddddddfffddddddddddddddd1ddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddd1dddddddddddddddddddddddfffddddddddddddddddddddddddffffffddddfdfdddddddddddddddd1ddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddd1ddddddddddddddddddddddddddfffffdddddddddddddffffffddddddffdddffdddddddddddddddd1ddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddd1dddddddddddddddddddddddddddddddfffffffffffffddddddddddddddffffddddddddddddddddd1ddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddd1ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1ddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddd1ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1ddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddd1ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1ddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddd1ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1ddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddd111111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd111111ddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddd1ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1ddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddd1ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1ddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddd1ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1ddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddd1ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1ddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddd1ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1ddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddd1ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1ddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddd1ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1ddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddd1ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1ddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddd1ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1ddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddd1ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1ddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddd1ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1ddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddd1ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1ddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddd1ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1ddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddd1ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1ddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddd1ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1ddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddd111111111111111111111111111111111111111111111111111111111111111111111111111111111ddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddd1dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd11ddddddddddddddddddddddddddddddddddddddd
    ddddddddddddddddddddddddddddddddddddddddd1ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1dddddddddddddddddddddddddddddddddddddddd
    ddddddddddddddddddddddddddddddddddddddddd1dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1ddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddd1dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd11ddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddd1dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1dddddddddddddddddddddddddddddddddddddddddd
    ddddddddddddddddddddddddddddddddddddddddddd1dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd11dddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddd1dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd11ddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddd1dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1dddddddddddddddddddddddddddddddddddddddddddd
    ddddddddddddddddddddddddddddddddddddddddddddd1dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd11dddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddd1dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd11ddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddd1ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd11dddddddddddddddddddddddddddddddddddddddddddddd
    ddddddddddddddddddddddddddddddddddddddddddddddd1ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd11ddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddd1ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1ddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddd1dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd11ddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddddddddddddddddddddddddddddddddddddddddddddd11ddddddddddddddddddddddddddddddddddddddddddddddddddddddddd11dddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddd11dddddddddddddddddddddddddddddddddddddddddddddddddddddd11dddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddd1dddddddddddddddddddddddddddddddddddddddddddddddddddd11ddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddddddddddddddddddddddddddddddddddddddddddddddddd11dddddddddddddddddddddddddddddddddddddddddddddddddd1dddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddddddddddddddddddddddddddddddddddddddddddddddddddd11dddddddddddddddddddddddddddddddddddddddddddddd11ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddd111ddddddddddddddddddddddddddddddddddddddddddd11dddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1ddddddddddddddddddddddddddddddddddddddddd1dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd11dddddddddddddddddddddddddddddddddddddd1ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd11dddddddddddddddddddddddddddddddddd11dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd111dddddddddddddddddddddddddddddd11ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd111ddddddddddddddddddddddddd11ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1111dddddddddddddddddddd11ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd11111ddddddddddd11111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd111111111111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    `)
playerSprite = sprites.create(img`
    . . . . f f f f f . . . . . . . 
    . . . f e e e e e f f f . . . . 
    . . f d d d e e e e d d f . . . 
    . c d d d d d e e e b d c . . . 
    . c d d d d d d e e b d c . . . 
    c d d f d d f d e e f c . f f . 
    c d d f d d f d e e f . . f e f 
    c d e e d d d d e e f . . f e f 
    . f d d d c d e e f f . . f e f 
    . . f f f d e e e e e f . f e f 
    . . . . f e e e e e e e f f f . 
    . . . . f f e e e e e b f f . . 
    . . . f e f f e e c d d f f . . 
    . . f d d b d d c f f f . . . . 
    . . f d d c d d d f f . . . . . 
    . . . f f f f f f f . . . . . . 
    `, SpriteKind.Player)
let hoopSprite = sprites.create(img`
    . . . . . 2 2 2 2 2 2 . . . . . 
    . . 2 2 2 2 . . . . 2 2 2 . . . 
    . 2 2 . . . . . . . . . 2 2 . . 
    2 2 . . . . . . . . . . . 2 2 . 
    2 . . . . . . . . . . . . . 2 2 
    2 . . . . . . . . . . . . . . 2 
    2 . . . . . . . . . . . . . . 2 
    2 2 . . . . . . . . . . 2 2 2 1 
    1 2 2 2 2 2 2 2 2 2 2 2 2 . . 1 
    1 . . 1 . . 1 . . 1 . . 1 . . 1 
    1 . . 1 . . 1 . . 1 . . 1 . . 1 
    1 . . 1 . . 1 . . 1 . . 1 . . 1 
    1 . . 1 . . 1 . . 1 . . 1 . . 1 
    1 . . 1 . . 1 . . 1 . . 1 . . 1 
    1 . . 1 . . 1 . . 1 . . 1 . . 1 
    1 . . 1 . . 1 . . 1 . . 1 . . 1 
    `, SpriteKind.Hoop)
let badSprite = sprites.create(img`
    ...........fffffff...ccfff..........
    ..........fbbbbbbbffcbbbbf..........
    ..........fbb111bbbbbffbf...........
    ..........fb11111ffbbbbff...........
    ..........f1cccc1ffbbbbbcff.........
    ..........ffc1c1c1bbcbcbcccf........
    ...........fcc3331bbbcbcbcccf..ccccc
    ............c333c1bbbcbcbccccfcddbbc
    ............c333c1bbbbbbbcccccddbcc.
    ............c333c11bbbbbccccccbbcc..
    ...........cc331c11bbbbccccccfbccf..
    ...........cc13c11cbbbcccccbbcfccf..
    ...........c111111cbbbfdddddc.fbbcf.
    ............cc1111fbdbbfdddc...fbbf.
    ..............cccfffbdbbfcc.....fbbf
    ....................fffff........fff
    `, SpriteKind.Enemy)
badSprite.setBounceOnWall(true)
badSprite.setVelocity(randint(50, 80), 0)
hoopSprite.setPosition(80, 7)
playerSprite.setPosition(79, 103)
playerSprite.setVelocity(70, 0)
playerSprite.setBounceOnWall(true)
info.setLife(5)
