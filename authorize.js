const authorize = (req, res, next) => {
    const {user} = req.query
    if (user === 'John'){
        req.user = {name: 'John', id:2}
        next()
    }
    else{
        res.status(401).send("Unauthorized")
    }
    console.log('authorize')
    next()
}

module.exports = {authorize}