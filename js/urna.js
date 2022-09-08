
const addButtons = () => {

    const numpad = document.getElementById("numpad")
    for (let i = 0; i < 10; i++) {
        const element = numpad.children[i]
        element.addEventListener("click", (event) => {
            const value = event.target.id
            const container = document.getElementById("number-input")

            for (let j = 0; j < container.children.length; j++) {
                const element = container.children[j]
                if (!element.value) {
                    element.value = value
                    break
                }
            }
            console.log(event.target.id)
        })
    }
}
const getKeys = () => {
}
const addKeys = () =>{     
    window.addEventListener("keydown", function (event) {
        if (event.defaultPrevented) {
            return;
        }

    switch (event.key) {
        case "1":
            document.getElementById("num1").value = 1            
            break;
        case "2":
            console.log("numero 2")
            break;
        case "3":
            console.log("numero 3")
            break;
        case "4":
            console.log("numero 4")
            break;
        case "5":
            console.log("numero 5")
            break;
        case "6":
            console.log("numero 6")
            break
        case "7":
            console.log("numero 7")
            break
        case "8":
            console.log("numero 8")
            break
        case "9":
            console.log("numero 9")
            break
        case "0":
            console.log("numero 0")
            break    
        default:
            return; 
    }

    event.preventDefault();
}, true);

}

document.addEventListener("DOMContentLoaded", () => {
    addButtons()
    addKeys()
    opcoes_teclas.forEach((item) => {
        let tecla = document.querySelector(item)
        tecla.addEventListener('click', () => prencher(tecla))
    })

})
