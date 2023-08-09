let input = document.getElementById("input")
const convert = document.getElementById("convert-btn")
const length = document.getElementById("length")
const volume = document.getElementById("volume")
const mass = document.getElementById("mass")

convert.addEventListener("click", () => {
    renderLength()
    renderVolume()
    renderMass()
})

function renderLength() {
    length.textContent = `
    ${Number(input.value)} metres = ${(Number(input.value) * 3.28084).toFixed(2)} feet 
    |  
    ${Number(input.value)} feet = ${(Number(input.value) * 0.3048).toFixed(2)} metres 
    `
}

function renderVolume() {
    volume.textContent = `
    ${Number(input.value)} liters = ${(Number(input.value) * 0.264172).toFixed(2)} gallons 
    |  
    ${Number(input.value)} gallons = ${(Number(input.value) * 3.78541).toFixed(2)} liters 
    `
}

function renderMass() {
    mass.textContent = `
    ${Number(input.value)} kilos = ${(Number(input.value) * 2.20462).toFixed(2)} pounds 
    |  
    ${Number(input.value)} pounds = ${(Number(input.value) * 0.453592).toFixed(2)} kilos 
    `
}

window.addEventListener("load",()=>{
    input.value = 0
})