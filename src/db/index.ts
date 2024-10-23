import { PrismaClient } from '@prisma/client'

/** -----------------------------------|| Database Client ||-------------------------------------- 
 * We do this to make sure we don't make more than one db client
 **/

declare global { // Override the global typescript scope
  var cachedPrisma: PrismaClient
}

// Cache the db client. There is no point creating multiple clients!
let prisma: PrismaClient

if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient()

} else {
  if (!global.cachedPrisma) {
    global.cachedPrisma = new PrismaClient()
  }
  prisma = global.cachedPrisma
}

export const db = prisma
