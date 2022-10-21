input.onButtonPressed(Button.A, function () {
    servos.P0.setPulse(750)
})
input.onButtonPressed(Button.B, function () {
    servos.P0.setPulse(2250)
})
servos.P0.setPulse(1500)
basic.forever(function () {
	
})
