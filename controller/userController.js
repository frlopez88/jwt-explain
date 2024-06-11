import jwt from 'jsonwebtoken';

const usuarios = [
    {
        user_name : "frlopez", 
        pass : "Hola12", 
        correo: "frlopez@unitec.edu"
    }, 
    {
        user_name: "jonathan.lorenzana", 
        pass: "Hola", 
        correo: "jlorenzana@unitec.edu"
    }
];

const auth = (req, res)=>{

    const {user_name, pass} = req.body;
    // en clase vimos que sea un sql que devuelve el usuario autenticado
    let usuario_log = {
        mensaje : "Usuario No Encontrado"
    }


    for ( const usuario of usuarios ) {
        // si la auth es correcta
        if (usuario.user_name === user_name && usuario.pass === pass ) {
            usuario_log= usuario;
            const token = jwt.sign(usuario_log, 'secret', { expiresIn: '1h' })
            usuario_log.token  = token;
        }

    }
    

    res.json(usuario_log);

}


export {
    auth
}