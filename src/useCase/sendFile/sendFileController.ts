import { Request, Response } from 'express';

class sendFileController{
  async handle(request: Request, response: Response): Promise<Response>{
    try {
      const message = await this.sendFileUseCase.execute(request);
      return response.status(200).send(message);
    } catch (error) {
      return response.status(400).send(`Error uploading file: ${error.message}`);
    }
  }
}

export default new sendFileController();