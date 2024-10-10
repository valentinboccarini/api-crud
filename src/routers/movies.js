import { Router } from "express";
import { movieController } from "../controllers/movies.js";
import { verifyAccessToken } from "../middlewares/verifyAccesToken.js";


export const router = Router()

router.get('/', movieController.getAll)
router.get("/s", movieController.getByTitle) 
router.post('/', verifyAccessToken, movieController.creatOne)
router.patch('/:id',verifyAccessToken, movieController.updateOne)
router.delete('/:id', verifyAccessToken, movieController.deleteOne)