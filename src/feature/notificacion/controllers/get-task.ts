/* eslint-disable @typescript-eslint/no-unused-vars */
import { notificacionService } from '@service/notification.service';
import { Request, Response } from 'express';
export class NotiGetController {
  // @joiValidation(signupSchema)

  getNotif = async (req: Request, res: Response) => {
    const getTask = await notificacionService.getNotificaciones();
    res.json({ ok: true, getTask });
  };
  getNotiById = async (req: Request, res: Response) => {
    const getNotiById = await notificacionService.getNotificaionkById();
    res.json({ ok: true, getNotiById });
  };
  deleteNoti = async (req: Request, res: Response) => {
    const deleteNoti = await notificacionService.getNotificacionDelete();
    res.json({ ok: true, deleteNoti });
  };
}
