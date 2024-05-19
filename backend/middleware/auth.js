//MIDDLEWARE FOR PROTECTING ROUTES AND VERIFYING JWT

const jwt = require('jsonwebtoken');

module.exports = function(req, res, next){
    const token = req.header('x-auth-token');

    if(!token){
        return res.status(401).json({msg:'No token, authentication denied'});
    }
    try{
        const decode = jwr.verify(token, process.env.JWT_SECRET);
        req.user = decoded.user;
        next();
    } catch (err){
        res.status(401).json({msg: 'Token is not valid'});
    }
};