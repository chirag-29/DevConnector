const jwt = require('jsonwebtoken');
const config = require('config');

// middleware function which has access to request and response cycle and next to move on to next peice of middleware
module.exports = function(req,res,next){

    const token = req.header('x-auth-token');

    if(!token){
        return res.status(401).json({msg:'Token not found, Authorization denied'});
    }

    try{

        const decoded = jwt.verify(token, config.get('jwtSecret'));

        req.user = decoded.user;
        next();

    }
    catch(err){
        res.status(401).json({msg:'Token invalid, Auhtorization denied'});
    }

}