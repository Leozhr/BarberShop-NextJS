import { PrismaClient } from "@prisma/client";

declare global {
  var cashedprisma: PrismaClient;
}

let prisma: PrismaClient;
if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient();
} else {
  if (!global.cashedprisma) {
    global.cashedprisma = new PrismaClient();
  }
  prisma = global.cashedprisma;
}

export const database = prisma;