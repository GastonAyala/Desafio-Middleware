module.exports = (req, res) => {
    user = req.query.user
    res.render("admin", {user})
}