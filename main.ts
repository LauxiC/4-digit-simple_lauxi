input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    _4ZiffernDisplay.show(randint(0, 9999))
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    _4ZiffernDisplay.clear()
})
let _4ZiffernDisplay: grove.TM1637 = null
_4ZiffernDisplay = grove.createDisplay(DigitalPin.C16, DigitalPin.C17)
_4ZiffernDisplay.point(true)
_4ZiffernDisplay.set(5)
basic.forever(function () {
	
})
