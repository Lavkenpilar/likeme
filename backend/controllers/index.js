import express from 'express'
import path from "node:path"
import { fileURLToPath } from "node:url"
import { writeFile, readFile } from "node:fs/promises"
import cors from 'cors'
import { consultaRegistro, nuevoRegistro, modificarRegistroImg, eliminarRegistro } from './consultas.js'


const app = express()
const __filename = fileURLToPath (import.meta.url)
const __dirname = path.dirname (__filename)
//app.use (express.static(path.join(__dirname, '..', 'frontend', 'dist'))) // srive archivos estáticos desde el frontend (carpeta dist)
app.use (cors())
app.use (express.json())

/*app.get ('/', (req, res)=>{
    res.sendFile (path.join(__dirname,'..','frontend','dist','index.html'))
})*/ // para todas las rutas no API, devuelve index.html

/*app.get ("/", (req, res)=>{
    res.sendFile (path.join(__dirname,"..", "frontend", "App.jsx"))
})*/
app.get ('/', (req, res)=>{
    res.redirect('http://localhost:5173')
})
app.get ("/registros", async (req, res)=>{
    const data = await consultaRegistro()
    res.status(200).json(data)
} )

app.post ("/registros", async (req, res)=>{
    const {titulo, img, descripcion, likes } = req.body
    
  if (!titulo || !img || !descripcion) {
    return res.status(400).json({ error: "Faltan campos requeridos" });
  }

    const filasInsertadas = await nuevoRegistro (titulo, img, descripcion, likes)
    if (filasInsertadas>0) {
        res.status(201).json ({mensaje: "Registro exitoso"})
    } else {
    res.status (400).send ("Error en la operación")
 } }
)

app.put ("/registros/:id", async (req, res)=>{
    const { id } = req.params
    const { img } = req.query
    try {
        await modificarRegistroImg (img, id)
        res.send ("Imágen modificada con éxito")}
        catch ({code, message}){
            res.status(code).send (message)
        }
    }
)

app.delete ("/registros/:id", async (req, res)=>{
    const { id } = req.params
    await eliminarRegistro (id)
    res.send ("Registro eliminado con éxito")
})

app.listen (3000, ()=>{
    console.log ('Servidor corriendo en el puerto 3000')
})