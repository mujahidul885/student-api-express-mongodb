import express from 'express'
import StudentRouter from './Routes/student.route.js'
import mongooseConection from './DB/db.js'
import cors from 'cors';
const app = express()
mongooseConection()

const PORT = process.env.PORT  ||  3000

app.use(cors());
app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use('/api/students',StudentRouter)


app.listen(PORT,()=>{
    console.log(` server is running on port http://localhost:${PORT}/`)
})