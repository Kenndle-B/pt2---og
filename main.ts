namespace SpriteKind {
    export const Blocks = SpriteKind.create()
    export const Block = SpriteKind.create()
}
function Randomize_Image () {
	
}
function A () {
	
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    info.startCountdown(120)
    sprites.destroy(textsprite2)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
	
})
function Randomize () {
	
}
function GameBlocks (num: number, imagelist: Image[]) {
    for (let index = 0; index < num; index++) {
        Blocks = sprites.create(imagelist._pickRandom(), SpriteKind.Blocks)
        tiles.placeOnRandomTile(Blocks, assets.tile`transparency16`)
        Blocks.setVelocity(50, 50)
    }
}
let Blocks: Sprite = null
let textsprite2: TextSprite = null
tiles.setCurrentTilemap(tilemap`level1`)
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
info.setScore(0)
textsprite2 = textsprite.create("TETRIS", 15, 1)
textsprite2.setPosition(80, 48)
GameBlocks(1, [
img`
    . . . . . . 9 9 9 9 . . . . . . 
    . . . . . . 9 9 9 9 . . . . . . 
    . . . . . . 9 9 9 9 . . . . . . 
    . . . . . . 9 9 9 9 . . . . . . 
    . . . . . . 9 9 9 9 . . . . . . 
    . . . . . . 9 9 9 9 . . . . . . 
    . . . . . . 9 9 9 9 . . . . . . 
    . . . . . . 9 9 9 9 . . . . . . 
    . . . . . . 9 9 9 9 . . . . . . 
    . . . . . . 9 9 9 9 . . . . . . 
    . . . . . . 9 9 9 9 . . . . . . 
    . . . . . . 9 9 9 9 . . . . . . 
    . . . . . . 9 9 9 9 . . . . . . 
    . . . . . . 9 9 9 9 . . . . . . 
    . . . . . . 9 9 9 9 . . . . . . 
    . . . . . . 9 9 9 9 . . . . . . 
    `,
img`
    . . . . 3 3 3 3 . . . . . . . . 
    . . . . 3 3 3 3 . . . . . . . . 
    . . . . 3 3 3 3 . . . . . . . . 
    . . . . 3 3 3 3 . . . . . . . . 
    . . . . 3 3 3 3 . . . . . . . . 
    . . . . 3 3 3 3 . . . . . . . . 
    . . . . 3 3 3 3 3 3 3 3 . . . . 
    . . . . 3 3 3 3 3 3 3 3 . . . . 
    . . . . 3 3 3 3 3 3 3 3 . . . . 
    . . . . 3 3 3 3 3 3 3 3 . . . . 
    . . . . 3 3 3 3 . . . . . . . . 
    . . . . 3 3 3 3 . . . . . . . . 
    . . . . 3 3 3 3 . . . . . . . . 
    . . . . 3 3 3 3 . . . . . . . . 
    . . . . 3 3 3 3 . . . . . . . . 
    . . . . 3 3 3 3 . . . . . . . . 
    `,
img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . a a a a . . . . . 
    . . . . . . . a a a a . . . . . 
    . . . . . . . a a a a . . . . . 
    . . . . . . . a a a a . . . . . 
    . . . . . . . a a a a . . . . . 
    . . . . . . . a a a a . . . . . 
    . . . . . . . a a a a . . . . . 
    . . . a a a a a a a a . . . . . 
    . . . a a a a a a a a . . . . . 
    . . . a a a a a a a a . . . . . 
    . . . a a a a . . . . . . . . . 
    . . . a a a a . . . . . . . . . 
    . . . a a a a . . . . . . . . . 
    . . . a a a a . . . . . . . . . 
    . . . a a a a . . . . . . . . . 
    `,
img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . 2 2 2 2 2 2 2 2 . . . . . 
    . . . 2 2 2 2 2 2 2 2 . . . . . 
    . . . 2 2 2 2 2 2 2 2 . . . . . 
    . . . 2 2 2 2 2 2 2 2 . . . . . 
    . . . 2 2 2 2 2 2 2 2 . . . . . 
    . . . 2 2 2 2 2 2 2 2 . . . . . 
    . . . 2 2 2 2 2 2 2 2 . . . . . 
    . . . 2 2 2 2 2 2 2 2 . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,
img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . b b b b b . . . . 
    . . . . . . . b b b b b . . . . 
    . . . . . . . b b b b b . . . . 
    . . . . . . . b b b b b . . . . 
    . . . . . . . b b b b b . . . . 
    . . . . . . . b b b b b . . . . 
    . . . . . . . b b b b b . . . . 
    . . . b b b b b b b b b . . . . 
    . . . b b b b b b b b b . . . . 
    . . . b b b b b b b b b . . . . 
    . . . b b b b b b b b b . . . . 
    . . . . . . . . . . . . . . . . 
    `
])
game.onUpdateInterval(500, function () {
	
})
