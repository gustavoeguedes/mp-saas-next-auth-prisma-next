'use server'

import { hashSync } from "bcrypt-ts";
import db from "../../../lib/db";


export async function registerAction(_prevState: any, formData: FormData) {
    const entries = Array.from(formData.entries());
    const data = Object.fromEntries(entries) as {
        name: string;
        email: string;
        password: string;
    }
    console.log('Form Data:', data);

    if(!data.email || !data.password || !data.name) {
        return {
            message: 'Preencha todos os campos',
            success: false
        }
    }

    const existingUser = await db.user.findUnique({
        where: {
            email: data.email,
        },
    });
    if (existingUser) {
        return {
            message: 'Este email já está cadastrado',
            success: false
        }
    }

    await db.user.create({data: {
        email: data.email,
        password: hashSync(data.password),
        name: data.name,
    }})

    return {
        message: 'Usuário cadastrado com sucesso',
        success: true
    }
}