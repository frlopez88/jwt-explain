import express from 'express';
const animal = express();
import {getAnimal} from '../controller/animalController.js'

animal.use('', getAnimal)

export {
    animal
}