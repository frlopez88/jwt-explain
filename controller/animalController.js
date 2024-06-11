const animales = [
    {
        id: 1 ,
        nombre: "Lobo", 
        sonido : "Auuu"
    }, 
    {
        id: 2 ,
        nombre: "Leon", 
        sonido : "Roar"
    }
];

const getAnimal = (req, res)=>{


    res.json(animales);


}

export {
    getAnimal
}