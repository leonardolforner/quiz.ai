import { PrismaClient } from '@prisma/client';
import { Request, Response, NextFunction} from 'express';

const prisma = new PrismaClient();

const createLobby = async (req: Request, res: Response, next: NextFunction) => {
    const body = req.body;
    await prisma.lobby.create({
        data: {
            users: body.users,
            admin: body.admin
        }
    })
    res.send("Lobby created");
}

const deleteLobby = async (req: Request, res: Response, next: NextFunction) => {
    const body = req.body;
    await prisma.lobby.delete({
        where: {
            id: body.id,
        }
    })
    res.send("Lobby deleted");
}

const getLobbys = async (req: Request, res: Response, next: NextFunction) => {
    const body = req.body;
    if(body.id) {
        const lobbys = await prisma.lobby.findMany({
            where: {
                id: body.id,
            }
        })
        res.send(lobbys);
    }else {
        const lobbys = await prisma.lobby.findMany();
        res.send(lobbys);
    }
}

export default { getLobbys, createLobby, deleteLobby };