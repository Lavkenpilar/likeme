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
