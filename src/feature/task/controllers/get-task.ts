
import { PaginationDto } from '@domain/index';
import { CustomError } from '@root/shared/utils';
import { TaskService } from '@service/task.service';
import { Request, Response } from 'express';
export class TaskGetController {
  constructor( private readonly _taskService:TaskService){

  }
  
  private handleError = (error: unknown, res: Response) => {
    if (error instanceof CustomError) {
      return res.status(error.statusCode).json({ error: error.message });
    }

    console.log(`${error}`);
    return res.status(500).json({ error: 'Internal server error' });
  };
  getTasks = async (req: Request, res: Response) => {
    const { page = 1, limit = 10 } = req.query;
    const [error, paginationDto] = PaginationDto.create(+page, +limit);
    if (error) {
      return res.status(400).json({ error });
    }
    // return res.json('getTasks')

    this._taskService
      .getTasks(paginationDto!)
      .then((tasks) => res.json(tasks))
      .catch((error) => this.handleError(error, res));
  };

  // getTaskById = async (req: Request, res: Response) => {
  //   const getTaskById = await taskService.getTaskById();
  //   res.json({ ok: true, getTaskById });
  // };
}
