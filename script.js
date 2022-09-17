const codeCrypt = (str) => {
    str = document.getElementById("crypt").value

    let newStr = []
    for (let letter in str) {
        newStr.push(str.charCodeAt(letter) -10)
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
        newStr.push(str.charCodeAt(letter) + 10)
    }

    let array = []
    for (let element of newStr)
        array.push(String.fromCharCode(element))

    document.getElementById("MessagesTwo").innerHTML = array.join('')
    
    console.log(array.join(''))
}






