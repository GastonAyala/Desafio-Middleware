const { loadData } = require("../database");

module.exports = (req, res, next) => {
    const userQuery = req.query.user
    const users = loadData("users")
    for (let i = 0; i < users.length; i++) {
        if (users[i].name === userQuery && users[i].role === "admin") {
            return next()
        }
        return res.send("No tienes los privilegios para ingresar")
    }
}