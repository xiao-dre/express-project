import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'

const app = express()
const PORT = 8080 || 8000

app.use(express.json())
app.use(cors())

app.listen(PORT, () => {
    console.log('[+] Listening on port', PORT);
});