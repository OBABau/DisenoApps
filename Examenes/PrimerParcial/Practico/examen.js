const axios = require("axios");
const readline = require("readline");

const url = "https://jsonplaceholder.typicode.com/todos";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Welcome, choose an option: \n1.- Pendings(ID's) \n2.- Pendings(ID's & titles)\n3.- Unsolved pendings\n4.- Solved pendings\n5.- Pendings(ID's & user ID's)\n6.- Solved pendings(ID's & user ID's)\n7.- Unsolved pendings(ID's & user ID's)\n", (option) => {
    console.log("\n")
    switch (parseInt(option)) {
        case 1:
            console.log("Pendings(ID's)")
            axios.get(url).then(({data}) => {
                data.forEach(element => {
                    console.log("ID: " + element.id)
                })
            })
            break;
        case 2:
            console.log("Pendings(ID's & titles)")
            axios.get(url).then(({data}) => {
                data.forEach(element => {
                    console.log("ID: " + element.id)
                    console.log("Title: " + element.title + "\n")
                })
            })
            break;
        case 3:
            console.log("Unsolved pendings")
            axios.get(url).then(({data}) => {
                data.forEach(element => {
                    if(!element.completed)
                    {
                    console.log("ID: " + element.id)
                    console.log("Title: " + element.title + "\n")
                    }
                })
            })
            break;
        case 4:
            console.log("Solved pendings")
            axios.get(url).then(({data}) => {
                data.forEach(element => {
                    if(element.completed)
                    {
                    console.log("ID: " + element.id)
                    console.log("Title: " + element.title + "\n")
                    }
                })
            })
            break;
        case 5:
            console.log("Pendings(ID's & user ID's)")
            axios.get(url).then(({data}) => {
                data.forEach(element => {
                    console.log("ID: " + element.id)
                    console.log("UserID: " + element.userId + "\n")
                })
            })
            break;
        case 6:
            console.log("Solved pendings(ID's & user ID's)")
            axios.get(url).then(({data}) => {
                data.forEach(element => {
                    if(element.completed)
                    {
                    console.log("ID: " + element.id)
                    console.log("UserID: " + element.userId + "\n")
                    }
                })
            })
            break;
        case 7:
            console.log("Unsolved pendings(ID's & user ID's")
            axios.get(url).then(({data}) => {
                data.forEach(element => {
                    if(!element.completed)
                    {
                    console.log("ID: " + element.id)
                    console.log("UserID: " + element.userId + "\n")
                    }
                })
            })
            break;
        default:
            console.log("Invalid option");
    }
    rl.close()
});