#### Instalar o prisma
Prisma 1000% melhor com TypeScript
`npm install prisma typescript @types/node -D`

### OLHAR NA DOCUMENTACAO OS ITENS A SE COLOCAR NO TSCONFIG.JSON
```json
{
  "compilerOptions": {
    "sourceMap": true,
    "outDir": "dist",
    "strict": true,
    "lib": [
      "esnext"
    ],
    "esModuleInterop": true
  }
}
```

#### Iniciar o prisma
`npx prisma init`

Modelo de exemplo
```ts
model Product {
  id         String   @id @default(uuid())
  name       String
  bar_code   String   @unique
  price      Decimal
  created_at DateTime @default(now())

  // Nome da tabel no banco de dados
  @@map("products")
}
```

### Criar banco com base no modelo

`npx prisma migrate dev`

### Depois só importar o prismaClient e utilizar na aplicação como sequelize

```ts
import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient();
```