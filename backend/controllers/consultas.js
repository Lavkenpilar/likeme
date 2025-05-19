import pool from '../conexion-bd/baseDato.js'

export const consultaRegistro = async () =>{
    const {rows} = await pool.query ("SELECT * FROM posts;")
    return {rows}
}

export const nuevoRegistro = async (titulo, img, descripcion, likes ) =>{
    const consulta = "INSERT INTO posts (titulo, img, descripcion, likes)VALUES ($1,$2,$3,$4)"
    const values = [titulo, img, descripcion, likes]
    const result = await pool.query (consulta, values)
    return result.rowCount
}

export const modificarRegistroImg = async (img, id)=>{
    if (!img || !id){
        const error = new Error ("Img e ID son requeridos")
        error.code = 400
        throw error
        }
    const consulta = 'UPDATE posts SET img = $1 WHERE id=$2'
    const values = [img, id]
    const {rowCount} = await pool.query (consulta, values)
    if (rowCount===0){
        const error = new Error ("No se consiguió ningun posts con este id")
        error.code =404
        throw error
    }
}

/*export const modificarRegistro = async (titulo,img,descripcion,likes, id)=>{
    if (!titulo || !img|| !descripcion||likes===undefined|| !id){
        const error = new Error ("Todos los campos son requeridos")
        error.code = 400
        throw error
        }
    const consulta = 'UPDATE posts SET titulo =$1, img=$2, descripcion=$3, likes=$4 WHERE id=$5'
    const values = [titulo,img,descripcion,likes, id]
    const {rowCount} = await pool.query (consulta, values)
    if (rowCount===0){
        const error = new Error ("No se consiguió ningun posts con este id")
        error.code =404
        throw error
    }
}*/

