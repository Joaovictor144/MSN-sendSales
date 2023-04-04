import { Request } from 'express';
import multer from 'multer';

class sendFileUseCase {
  async execute(request: Request){
   try{
    const upload = multer({ dest: 'uploads/' }).single('file');
    upload(request,()=>{},()=>{})
   }


  }
}