import pkg from 'pg'
const {Pool} = pkg

const pool = new Pool ({
    host: 'localhost',
    user: 'postgres',
    password:'lavken2025',
    database:'likeme',
    port:5432,
    allowExitOnIdle:true
})

export default pool