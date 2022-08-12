const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const JWTmodel = require('../model/jwt/jwtModel')
dotenv.config();

exports.auth = async (req, res, next) => {

    if(req.cookies.token === undefined) throw Error('API 사용 권한이 없습니다.');

    const verifyToken = (token) => {
        try {
            return jwt.verify(token, process.env.JWT_KEY);
        }catch(e) {
            return null;
        }
    };
    
    const accessToken = verifyToken(req.cookies.token);
    const refreshToken = req.cookies.refr이거shToken;
    
    console.log(refreshToken)

    if(accessToken === null){
        if(refreshToken === undefined) {
            throw Error('API 사용 권한이 없습니다.');
        }else {

            const result = await JWTmodel.selectJWT({ param : { refreshToken: refreshToken } });

            const newAccessToken = jwt.sign({ 
                type : 'JWT',
                email : result[0][0].email
            }, process.env.JWT_KEY, {
                expiresIn: '15m',
                issuer: 'salus'
            })
        }
    }else{
        if(refreshToken===undefined){

            const newRefreshToken = jwt.sign({},
                process.env.JWT_SECRET, {
                    expiresIn: '14d',
                    issuer: 'salus'
            });
            console.log(newRefreshToken)
            JWTmodel.updateJWT({param : {
                refreshToken : newRefreshToken,
                email : accessToken.email
            }})

            res.cookie('refreshToken', newRefreshToken);
            req.cookies.refreshToken = newRefreshToken;
        }else {
            next();
        }
    }
}
    // try {
    //     req.decoded = jwt.verify(req.headers.authorization, process.env.JWT_KEY);
    //     return next();
    // }
    // catch(error){
    //     if(error.name === 'TokenExpiredError'){
    //         console.log(error);
    //         return res.status(419).json({
    //             code:419,
    //             message: '토큰이 만료되었습니다.'
    //         });
    //     }
        
    //     if(error.name === 'JsonWebTokenError'){
    //         console.log(error);
    //         return res.status(401).json({
    //             code:401,
    //             message: '유효하지 않은 토큰입니다.'
    //         })
    //     }
    // }
