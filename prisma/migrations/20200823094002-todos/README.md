# Migration `20200823094002-todos`

This migration has been generated at 8/23/2020, 2:40:02 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE "public"."Todo" (
"id" SERIAL,
"title" text   NOT NULL ,
"author" text   NOT NULL ,
PRIMARY KEY ("id")
)

CREATE UNIQUE INDEX "Todo.title_unique" ON "public"."Todo"("title")
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration ..20200823094002-todos
--- datamodel.dml
+++ datamodel.dml
@@ -1,0 +1,17 @@
+// This is your Prisma schema file,
+// learn more about it in the docs: https://pris.ly/d/prisma-schema
+
+datasource db {
+  provider = "postgresql"
+  url = "***"
+}
+
+generator client {
+  provider = "prisma-client-js"
+}
+
+model Todo {
+  id Int @default(autoincrement()) @id
+  title String @unique
+  author String
+}
```


