import { PrismaClient } from '@prisma/client';
import { Request, Response} from 'express';

const prisma = new PrismaClient();

const getUsers = async (req: Request, res: Response) => {
    const body = req.body
    if(body.id) {
        const users = await prisma.user.findFirst({
            where: {
                id: body.id,
            }
        })
        return res.send(users);
    }else {
        const users = await prisma.user.findMany();
        return res.send(users);
    }
}

const deleteUser = async (req: Request, res: Response) => {
    const body = req.body;
    await prisma.user.delete({
        where: {
            id: body.id,
        }
    })
    return res.send("User deleted");
}

const createUser = async (req: Request, res: Response) => {
    const body = req.body;
    await prisma.user.create({
        data: {
            name: body.name,
            email: body.email,
            password: body.password,
            highScore: 0,
            lastScore: 0,
        }
    })
    return res.send("User created")
}

const updateScore = async (req: Request, res: Response) => {
    const body = req.body;

    const user= prisma.user.findFirst({
        where: {
            id: body.id,
        }
    })

    let highScore = user.highScore;
    if(body.score > highScore) {
        highScore = body.score;
    }
    await prisma.user.update({
        where: {
            id: body.id,
        },
        data: {
            highScore,
            lastScore: body.score,
        }
    })
    return res.send("Score updated");
}

const updateUser = async(req: Request, res: Response) => {
    const {id, name, email, password} = req.body;

    if(name) {
        await prisma.user.update({
            where: {
                id,
            },
            data: {
                name,
            }
        })
    }else if(email) {
        await prisma.user.update({
            where: {
                id,
            },
            data: {
                email,
            }
        })
    }else if(password) {
        await prisma.user.update({
            where: {
                id,
            },
            data: {
                password,
            }
        })
    }
    return res.send("User updated")
}

export default { getUsers, deleteUser, createUser, updateScore, updateUser};