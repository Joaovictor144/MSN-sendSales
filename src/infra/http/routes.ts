import { Router } from 'express';
import sendFileController from 'useCase/sendFile/sendFileController';

const router = Router();

router.post('/sendfile',sendFileController.handle)