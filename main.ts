function Izquierda () {
    pins.digitalWritePin(DigitalPin.P5, 1)
    pins.digitalWritePin(DigitalPin.P16, 0)
    pins.digitalWritePin(DigitalPin.P8, 0)
    pins.digitalWritePin(DigitalPin.P13, 1)
}
function Reversa () {
    pins.digitalWritePin(DigitalPin.P5, 0)
    pins.digitalWritePin(DigitalPin.P16, 1)
    pins.digitalWritePin(DigitalPin.P8, 0)
    pins.digitalWritePin(DigitalPin.P13, 1)
}
function Avanza () {
    pins.digitalWritePin(DigitalPin.P5, 1)
    pins.digitalWritePin(DigitalPin.P16, 0)
    pins.digitalWritePin(DigitalPin.P8, 1)
    pins.digitalWritePin(DigitalPin.P13, 0)
}
function Parar () {
    pins.digitalWritePin(DigitalPin.P5, 0)
    pins.digitalWritePin(DigitalPin.P16, 0)
    pins.digitalWritePin(DigitalPin.P8, 0)
    pins.digitalWritePin(DigitalPin.P13, 0)
}
function Derecha () {
    pins.digitalWritePin(DigitalPin.P5, 0)
    pins.digitalWritePin(DigitalPin.P16, 1)
    pins.digitalWritePin(DigitalPin.P8, 1)
    pins.digitalWritePin(DigitalPin.P13, 0)
}
radio.onReceivedString(function (receivedString) {
    if (receivedString == "Avanza") {
        basic.showArrow(ArrowNames.South)
        Avanza()
    }
    if (receivedString == "Izquierda") {
        basic.showArrow(ArrowNames.West)
        Izquierda()
    }
    if (receivedString == "Derecha") {
        basic.showArrow(ArrowNames.East)
        Derecha()
    }
    if (receivedString == "Reversa") {
        basic.showArrow(ArrowNames.North)
        Reversa()
    }
    if (receivedString == "Parar") {
        basic.showIcon(IconNames.SmallDiamond)
        Parar()
    }
})
radio.setTransmitPower(7)
radio.setGroup(120)
pins.analogWritePin(AnalogPin.P0, 300)
pins.analogWritePin(AnalogPin.P2, 300)
Parar()
basic.showIcon(IconNames.Happy)
