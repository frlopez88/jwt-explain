import express from 'express';
const app = express();
import { user } from './routes/userRoute.js';
import { animal } from './routes/animalsRoute.js';
import jwt from 'jsonwebtoken'

// middlewares (Funcion que se ejecuta antes de la ruta)
// se configura el manejo de json 
// y los cors 

app.use(express.json());

const validarToken = (req, res, next) => {

    const symbols = Object.getOwnPropertySymbols(req);
    const kHeaders = symbols.find(sym => sym.toString() === 'Symbol(kHeaders)');

    if (kHeaders) {

        const headers = req[kHeaders];
        const { authorization } = headers;

        if (authorization) {
            const arr = authorization.split(" ");
            const token = arr[1];

            try {

                const decodeToken = jwt.verify(token, 'secret');
                next()

            } catch (err) {
                return res.json({ mensaje: "Token Invalido" })
            }

        } else {
            return res.json({ mensaje: "Token Invalido" })
        }

    }

    next();

}

app.use('/api/auth', user);
app.use('/api/animal', validarToken, animal);

app.listen(3000, () => {
    console.log("Escuchando en el puerto 4000")
})