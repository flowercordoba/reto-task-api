/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { TaskDto, UserEntity } from '@domain/index';
import { notificacionService } from './notification.service';
import { TaskModel } from '@data/config/models/task.model';
import { CustomError } from '../utils';

export class TaskService {
  // public async createTask(createTaskDto: TaskDto, userId: string) {
  //   try {
  //     const task = new TaskModel({
  //       ...createTaskDto,
  //       user: userId // Asegurándose de que el ID del usuario se asigne correctamente
  //     });
  //     await task.save();

  //     return {
  //       id: task.id,
  //       title: task.title,
  //       // ... otros campos que quieras retornar
  //     };
  //   } catch (error) {
  //     throw CustomError.internalServer(`${error}`);
  //   }
  // }
  // public async createTask(createTaskDto:TaskDto,user:UserEntity) {
  //   const tasksExiste = await TaskModel.findOne({title:createTaskDto.title});
  //   if (tasksExiste) {
  //     throw CustomError.badRequest('Task already exists');
  //   }

  //   try {
  //     const task = new TaskModel({
  //       ...createTaskDto,
  //       user:user.id
  //     });
  //     await task.save();

  //     return {
  //       id:task.id,
  //       title:task.title,
  //     };
    
      
  //   } catch (error) {
  //     // console.log({error});
  //     throw CustomError.internalServer(`${error}`);
  //   }
   
  // }

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

  public async getTask(): Promise<any> {
    const datat = ['task1', 'tarea2 ....'];

    console.log('getTask', datat);
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


