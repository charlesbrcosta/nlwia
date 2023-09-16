import { server } from './server.js'

const form = document.querySelector("#form")
const input = document.querySelector("#url")
const content = document.querySelector("#content")
const content01 = document.querySelector("#content01")

form.addEventListener("submit", async (event) => {
    event.preventDefault()
    content01.classList.add("placeholder")
    content.classList.add("placeholder")

    const videoURL = input.value

    if (!videoURL.includes("shorts")) {
        return (content.textContent = "Esse vídeo não é um shorts")
    }

    const [_, params] = videoURL.split("/shorts/")    
    const [videoID] = params.split("?si" )
    
    content01.textContent = "Obtendo o texto do áudio..."
    
    const  transcription = await server.get("/summary/" + videoID)

    content.textContent = "Realizando o resumo..."
    
    const summary = await server.post("/summary", {
        text: transcription.data.result,
    })   
    content01.textContent = transcription.data.result
    content01.classList.remove("placeholder")
    content.textContent = summary.data.result
    content.classList.remove("placeholder")
})