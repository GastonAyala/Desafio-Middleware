const fs = require('fs');
const path = require('path')
const userLogsPath = path.join(__dirname, "../logs/userLogs.txt")
function userLogs(req,res,next) {
    fs.appendFileSync(userLogsPath, `El usuario ingresó a la ruta:  ${req.url}\n`)
    next();
}

module.exports = userLogs