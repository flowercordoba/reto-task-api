/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { notificacionService } from './notification.service';

class TaskService {
  public async createTask(): Promise<void> {
    const datat = ['email','user'];
    console.log('createAuthUser');
    
  }
  public async getTaskById(): Promise<any> {
    const datat = ['task1'];
    
    console.log('getTaskById',datat);

  }

  public async getTask(): Promise<any> {
    const datat = ['task1','tarea2 ....'];
    
    console.log('getTask',datat);

  }

  public async getTaskUpdate(): Promise<any> {
    const datat = ['task1','tarea2 ....'];
    
    console.log('getTaskUpdate',datat);

  }

  public async getTaskDelete(): Promise<any> {
    const datat = ['task1','....tarea2 ....'];
    
    console.log('getTaskDelete',datat);

  }
  public async asignarTask(): Promise<any> {
    const datat = ['task1','....tarea2 ....>>'];
    const sendNoti = notificacionService.createNotificacion();
    console.log('getTaskSignar',datat,sendNoti);

  }
}

export const taskService: TaskService = new TaskService();
