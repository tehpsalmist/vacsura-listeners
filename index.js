const express = require('express')
const server = express()

const PORT = 100

server.listen(PORT, () => console.log(`Ready for events at http://localhost:${PORT}`))
