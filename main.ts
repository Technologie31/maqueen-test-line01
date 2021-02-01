basic.forever(function () {
    basic.showLeds(`
        # # # . .
        # . . # .
        # . . # .
        # . . # .
        # # # . .
        `)
    basic.pause(1000)
    basic.showNumber(maqueen.readPatrol(maqueen.Patrol.PatrolLeft))
    basic.pause(2000)
    basic.showLeds(`
        . # # # .
        # . . . .
        # . # # .
        # . . # .
        . # # . .
        `)
    basic.pause(1000)
    basic.showNumber(maqueen.readPatrol(maqueen.Patrol.PatrolRight))
    basic.pause(2000)
})
