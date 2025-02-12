import prisma from "./prismaClient"

const connectToDatabase = async () => {
    try {
        await prisma.$connect();
        console.log("Connected to PostgreSQL database ✅");
    } catch (error) {
        console.error(`Failed to connect to PostgreSQL database ❌: ${error}`);
    }
};

export default connectToDatabase;