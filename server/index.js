import cors from 'cors'
import express from 'express'
import { download } from './download.js'

const app = express()
app.use(cors())

app.get('/summary/:id', (request, response) => {
    download(request.params.id)
   // response.send("Id do vídeo: " + request.params.id)
   response.json({ result: "Download do vídeo realizado com sucesso!" })
})

var port = 3333 

app.listen(port, () => console.log("Server is running on port", port))
