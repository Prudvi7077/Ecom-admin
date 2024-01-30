import { PrismaClient } from "@prisma/client";
declare global{
    var prsima:PrismaClient | undefined
}
const prismadb=globalThis.prsima || new PrismaClient();
if(process.env.NODE_ENV!=="production")globalThis.prsima=prismadb
export default prismadb