import  express  from "express";
import { destroy, index, patchFail, patchPass, show, showChart, store } from "../handler/handler.js";

const router = express.Router();

router.get('/', index);
router.get('/:npm', show);
router.post('/', store);
router.delete('/:npm', destroy);
router.patch('/luluskan/:npm', patchPass);
router.patch('/gagalkan/:npm', patchFail);
router.get('/chart/:tipe', showChart)

export default router;