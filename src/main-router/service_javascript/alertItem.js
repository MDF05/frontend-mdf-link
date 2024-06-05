/* eslint-disable react/prop-types */
function alertItem(alertMessage, bgColor = "bg-green-200") {
    const alertElement = document.querySelector(".alert-component")
    const alerth5 = document.querySelector(".alert-component h5")
    const alertContainer = document.querySelector(".container-alert")
    const meterElement = document.querySelector("meter")
    const buttonCopy = document.querySelectorAll("svg.copy-item")
    const buttonXAlert = document.querySelector(".x-alert-copy")
    alertElement.classList.remove("hidden")
    alertContainer.classList.add(bgColor)
    alerth5.innerHTML = alertMessage

    let count = 3
    meterElement.value = count
    buttonCopy.forEach((button) =>
        button.addEventListener("click", () => clearInterval(aturDurasi)),
    )
    buttonXAlert.addEventListener("click", () => {
        clearInterval(aturDurasi)
        alertElement.classList.add("hidden")
    })
    const aturDurasi = setInterval(() => {
        meterElement.value = count
        count -= 0.1

        if (count < 0) {
            clearInterval(aturDurasi)
            alertElement.classList.add("hidden")
        }
    }, 150)

    return null
}

export { alertItem }