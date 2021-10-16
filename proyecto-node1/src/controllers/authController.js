const { OAuth2Client } = require('google-auth-library');
const jwt = require('jsonwebtoken');
const CLIENT_ID = 'CLIENT_ID_OBTENIDO_DE_GOOGLE_CONSOLE';
const JWT_KEY = 'CLAVE_PARA_FIRMAR_TOKEN';

const userModel = require('../database/user');

googleAuth = (req, res) => {
  console.log(req.headers, req.body, req.params);
  const { token } = req.body;

  const client = new OAuth2Client(CLIENT_ID);
  client.verifyIdToken({
    idToken: token,
    audience: CLIENT_ID
  }).then(resp => {
    console.log(resp);
    const { name, email } = resp.payload;
    console.log(name, email);
    // actualizar base de datos
    return userModel.findOneAndUpdate({ email: email }, { name: name }, { new: true, upsert: true });
  }).then(user => {
    console.log(user);
    // crear token de la aplicacion y retornar
    var appToken = jwt.sign({ user: user }, JWT_KEY, { expiresIn: '1h' });
    res.json(appToken);
  }).catch(err => {
    console.log(err);
    res.status(500).send(err);
  });
}

module.exports = { googleAuth };