const lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const numbers   = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const symbols   = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '-'];

let allowedSymbols = []
allowedSymbols.push(lowercase)
allowedSymbols.push(uppercase)
let a = +prompt("Введите количество символов в пароле")
const num = confirm("Будут ли цифры в пароле?")
let password = ""
if (num)
{
    allowedSymbols.push(numbers)
}
const sym = confirm("Будут ли спецсимволы в пароле?")
if (sym)
{
    allowedSymbols.push(symbols)
}
for (let i = 0; i < a; i++)
{
    let randomarr = []
    randomElement = allowedSymbols[Math.floor(Math.random() * allowedSymbols.length)];
    randomarr.push(randomElement)
}
password = randomarr.join()
alert(password)