'use server'

import { prisma } from "../prisma/prismaClient"

export const getAllUser = async () => {
    try {
        const data = await prisma.user.findMany();
        return {
            success: true,
            data: data
        }
    } catch (error) {
        console.log(error)
        return {
            success: false
        }
    }
}