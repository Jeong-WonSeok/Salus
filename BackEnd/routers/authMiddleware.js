const jwt = require('jsonwebtoken');
const env = require('dotenv');
env.config();

exports.auth = (req, res, next) => {
    try {
        req.decoded = jwt.verify(req.headers.authorization, process.env.JWT_KEY);
        return next();
    }
    catch(error){
        if(error.name === 'TokenExpiredError'){
            console.log(error);
            return res.status(419).json({
                code:419,
                message: '토큰이 만료되었습니다.'
            });
        }
        
        if(error.name === 'JsonWebTokenError'){
            console.log(error);
            return res.status(401).json({
                code:401,
                message: '유효하지 않은 토큰입니다.'
            })
        }
    }
}
