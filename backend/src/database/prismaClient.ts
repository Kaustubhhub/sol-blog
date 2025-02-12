import { PrismaClient } from "@prisma/client";
import { DB_URL } from "../config/env";

const prisma = new PrismaClient({
    datasources: {
        db: {
            url: DB_URL
        }
    }
});

export default prisma;
