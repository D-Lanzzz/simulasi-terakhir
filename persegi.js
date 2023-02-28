const persegiForm = document.getElementById("persegiForm")
const sisi = document.getElementById("sisi")
const tampil = document.getElementById("tampilContainer")

const hasilPersegi = JSON.parse(localStorage.getItem("persegi")) || []

const addPersegi = (sisi, hasil) => {
    hasilPersegi.push ({
        sisi,
        hasil
    })
     localStorage.setItem("persegi", JSON.stringify(hasilPersegi))
     return{sisi,hasil}
}

const buatPersegi = ({sisi, hasil}) => {
const divPersegi = document.createElement("div")
const eleSisi = document.createElement("p")
const eleHasil = document.createElement("h2")

eleSisi.innerHTML = "sisi : " + sisi
eleHasil.innerHTML = "luas persegi : " + hasil

divPersegi.append(eleSisi, eleHasil)
tampil.appendChild(divPersegi)

}

hasilPersegi.forEach(buatPersegi)

persegiForm.onsubmit = e => {
    e.preventDefault()

    const vSisi = sisi.value
    const Luas = (vSisi*vSisi)

    const persegiBaru = addPersegi(
        vSisi,
        Luas
    )
    buatPersegi (persegiBaru)

    sisi.value = ""

}