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

const addKeys = () => {

}


document.addEventListener("DOMContentLoaded", () => {
    addButtons()
    addKeys()

})
