class User {
    name: string = 'JAMES'
    age: number = 18

    constructor(name: string, age:number){
        this.name = name
        this.age = age
    }

    showName = () => {
        console.log(this.name)
    }
}

const user = new User("James",18)
user.showName();

const otherUser = new User("Robertin",32)
user.showName();