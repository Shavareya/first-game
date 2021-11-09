for (let index = 0; index <= 2; index++) {
    music.playTone(262, music.beat(BeatFraction.Quarter))
    basic.showNumber(3 - index)
}
music.playTone(330, music.beat(BeatFraction.Double))
music.playTone(294, music.beat(BeatFraction.Double))
music.playTone(262, music.beat(BeatFraction.Double))
basic.showString("shavareya")
basic.forever(function () {
	
})
