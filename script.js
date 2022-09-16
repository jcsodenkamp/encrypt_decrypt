const codeCrypt = (str) => {
    str = document.getElementById("crypt").value
    str = str.toLowerCase()
    let newStr = []
    for (let letter in str) {
        if (str.charCodeAt(letter) === 97) {
            newStr.push(120)
        } else if (str.charCodeAt(letter) === 98) {
            newStr.push(121)
        } else if (str.charCodeAt(letter) === 99) {
            newStr.push(122)
        } else if (str.charAt(letter).match(/[^a-z]/)) {
            newStr.push(str.charCodeAt(letter))
        } else {
            newStr.push(str.charCodeAt(letter) - 3)
        }
    }
    let array = []
    for (let element of newStr)
        array.push(String.fromCharCode(element))

    document.getElementById("Messages").innerHTML = array.join('')
    
    console.log(array.join(''))
}


const codeDecrypt = (str) => {
    str = document.getElementById("decrypt").value
    str = str.toLowerCase()
    let newStr = []
    for (let letter in str) {
        if (str.charCodeAt(letter) === 120) {
            newStr.push(97)
        } else if (str.charCodeAt(letter) === 121) {
            newStr.push(98)
        } else if (str.charCodeAt(letter) === 122) {
            newStr.push(99)
        } else if (str.charAt(letter).match(/[^a-z]/)) {
            newStr.push(str.charCodeAt(letter))
        } else {
            newStr.push(str.charCodeAt(letter) + 3)
        }
    }

    let array = []
    for (let element of newStr)
        array.push(String.fromCharCode(element))

    document.getElementById("MessagesTwo").innerHTML = array.join('')
    
    console.log(array.join(''))
}






