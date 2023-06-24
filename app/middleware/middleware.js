import jwt from 'jsonwebtoken'

export const validateToken = (req, res, next)=>{
     try {
        const token = jwt.verify(req.cookies.PRESTATODITO, process.env.SECRET_KEY)
        if (token) {
            //console.log(req.cookies);
            next()
         }
         else{
            res.redirect("aprobar")
         }
     } catch (error) {
         console.log(error);
     }
};
