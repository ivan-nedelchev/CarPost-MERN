import { createNewCar} from "../../services/car.js";

export async function createCar(req, res) {
    let user = JSON.parse(req.session.user);
    try {
        const newCar = {
            name: req.body.name,
            description: req.body.description,
            image: req.body.image,
            price: Number(req.body.price),
            owner: user.id
        };
        const requesterId = user.id;
        const createdCar = await createNewCar(newCar, requesterId); 

        if (createdCar == null) {
            throw new Error('User not found. Error creating new car.');
        }
        res.json(createdCar);
    } catch (err) {
        console.log(err.message);
        res.sendStatus(204);
    }
}