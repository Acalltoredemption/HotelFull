import expressJwt from 'express-jwt';

//req.user
export const requireSignin = expressJwt({
    //secret, expirydate
    secret: process.env.JWT_SECRET,
    algorithms: ["HS256"],
});