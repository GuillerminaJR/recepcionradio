function Izquierda () {
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P1, 1)
    pins.digitalWritePin(DigitalPin.P2, 1)
    pins.digitalWritePin(DigitalPin.P8, 0)
}
function Reversa () {
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P1, 1)
    pins.digitalWritePin(DigitalPin.P2, 0)
    pins.digitalWritePin(DigitalPin.P8, 1)
}
function Avanza () {
    pins.digitalWritePin(DigitalPin.P0, 1)
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P2, 1)
    pins.digitalWritePin(DigitalPin.P8, 0)
}
function Parar () {
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P2, 0)
    pins.digitalWritePin(DigitalPin.P8, 0)
}
function Derecha () {
    pins.digitalWritePin(DigitalPin.P0, 1)
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P2, 0)
    pins.digitalWritePin(DigitalPin.P8, 1)
}
radio.onReceivedString(function (receivedString) {
    if (receivedString == "Parar") {
        basic.showIcon(IconNames.SmallDiamond)
        Parar()
    }
    if (receivedString == "Avanza") {
        basic.showArrow(ArrowNames.South)
    }
    if (receivedString == "Izquierda") {
        basic.showArrow(ArrowNames.East)
        Izquierda()
    }
    if (receivedString == "Derecha") {
        basic.showArrow(ArrowNames.West)
        Derecha()
    }
    if (receivedString == "Reversa") {
        basic.showArrow(ArrowNames.South)
    }
    Reversa()
})
radio.setTransmitPower(7)
radio.setGroup(100)
Parar()
basic.showIcon(IconNames.SmallDiamond)
