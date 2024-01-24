/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */

// import { IAuthDocument } from '@auth/interfaces/auth.interface';





class NotificacionService {
 
    public async getNotificaionkById(): Promise<any> {
      const datat = ['task1'];
      
      console.log('getNotificaionkById',datat);
  
    }
  
    public async getNotificaciones(): Promise<any> {
      const datat = ['task1','tarea2 ....'];
      
      console.log('getTask',datat);
  
    }
  
    public async getNotificacionDelete(): Promise<any> {
      const datat = ['task1','....tarea2 ....'];
      
      console.log('getNotificacionDelete',datat);
  
    }
    
    public async createNotificacion(): Promise<any> {
        const datat = 'noti send';
        
        console.log('createNotificacion',datat);
    
      }
    
  }
  
  export const notificacionService: NotificacionService = new NotificacionService();
  