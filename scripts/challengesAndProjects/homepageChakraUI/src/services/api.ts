const conta = {
    email: "Jamescosta4747@gmail.com",
    password: "123",
    name: "James"
}

export const api = new Promise((resolve) => {
    setTimeout(()=>{
        resolve(conta)
    },3000)
})