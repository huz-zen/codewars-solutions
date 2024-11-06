function validatePIN (pin) {
    var isNumber = /^[0-9]{4,6}$/.test(pin) && (pin.length == 4 || pin.length == 6)
    return isNumber
    }