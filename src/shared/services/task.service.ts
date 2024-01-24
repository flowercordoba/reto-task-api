/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { PaginationDto, TaskDto, UserEntity } from '@domain/index';
import { notificacionService } from './notification.service';
import { TaskModel } from '@data/config/models/task.model';
import { CustomError } from '../utils';

export class TaskService {
 
  async createTask(createTaskDto: TaskDto) {
    // Verifica si ya existe una tarea con el mismo nombre.
    const taskExists = await TaskModel.findOne({
      title: createTaskDto.title
    });
    if (taskExists) {
      throw CustomError.badRequest('Task already exists');
    }

    // Intenta crear la nueva tarea en la base de datos.
    try {
      const task = new TaskModel(createTaskDto);
      await task.save();
      return task;
    } catch (error) {
      throw CustomError.internalServer(`${error}`);
    }
  }
  
  public async getTaskById(): Promise<any> {
    const datat = ['task1'];

    console.log('getTaskById', datat);
  }


  async getTasks(paginationDto: PaginationDto) {
    const { page, limit } = paginationDto;

    try {
      // Recupera el total de tareas y una lista paginada de tareas.
      const [total, tasks] = await Promise.all([
        TaskModel.countDocuments(),
        TaskModel.find()
          .skip((page - 1) * limit)
          .limit(limit)
          .populate('user')
       
      ]);

      // Construye el objeto de respuesta con las tareas y la información de paginación.
      return {
        page,
        limit,
        total,
        next: page * limit < total ? `/api/tasks?page=${page + 1}&limit=${limit}` : null,
        prev: page - 1 > 0 ? `/api/tasks?page=${page - 1}&limit=${limit}` : null,
        tasks
      };
    } catch (error) {
      console.log(error);
      // En caso de error durante la recuperación, lanza un error de servidor interno.
      throw CustomError.internalServer('Internal Server Error');
    }
  }


  public async getTaskUpdate(): Promise<any> {
    const datat = ['task1', 'tarea2 ....'];

    console.log('getTaskUpdate', datat);
  }

  public async getTaskDelete(): Promise<any> {
    const datat = ['task1', '....tarea2 ....'];

    console.log('getTaskDelete', datat);
  }
  public async asignarTask(): Promise<any> {
    const datat = ['task1', '....tarea2 ....>>'];
    const sendNoti = notificacionService.createNotificacion();
    console.log('getTaskSignar', datat, sendNoti);
  }
}


