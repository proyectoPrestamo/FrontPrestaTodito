import jwt from 'jsonwebtoken';

const validarToken = (req, res, next) => {
  try {
    const token = req.cookies.PRESTATODITO;

    //si no hay token entonces redirigase a acceso denegado
    if (!token) {
      return res.redirect('/denegado');
    }

    const verificarToken = jwt.verify(token, process.env.SECRET_KEY);
    if (verificarToken) {
      // Si el token es válido y la verificación es exitosa continua
      next();
    } 
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: 'Error al verificar el token' });
  }
};

export default validarToken;
