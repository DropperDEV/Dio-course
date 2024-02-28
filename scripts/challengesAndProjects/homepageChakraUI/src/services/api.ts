const conta = {
    id: 414,
    details: "Programador assíduo",
    paragraph: "Ele que faz acontecer, não deixa levar pela onda",
    balance: 2000,
    tipoConta: "investimento",
}

export const api = new Promise((resolve) => {
    setTimeout(()=>{
        resolve(conta)
    },3000)
})