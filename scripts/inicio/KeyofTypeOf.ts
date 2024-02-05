
// Condições são normais;

const typeUser = {
    admin: 'Seja bem vindo admin',
    viewer: 'Seja bem vindo viewer',
    user: 'Seja bem vindo user',
}

const usuario = 'admin';

function validateUser(s:string){
    console.log(typeUser[s as keyof typeof typeUser])
}

validateUser(usuario);