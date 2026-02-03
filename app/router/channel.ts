import z from "zod";
import { heavyWriteSecurityMiddleware } from "../middlewares/arcjet/heavy-write";
import { standardSecurityMiddleware } from "../middlewares/arcjet/standard";
import { requiredAuthMiddlewware } from "../middlewares/auth";
import { base } from "../middlewares/base";
import { requiredWorkspaceMiddleware } from "../middlewares/workspace";
import { ChannelNameSchema } from "../schemas/channel";

export const createChannel = base
  .use(requiredAuthMiddlewware)
  .use(requiredWorkspaceMiddleware)
  .use(standardSecurityMiddleware)
  .use(heavyWriteSecurityMiddleware)
  .route({
    method: "POST",
    path: "/channels",
    summary: "Create a new channel",
    tags: ["channels"],
  })
  .input(ChannelNameSchema)
  .output(z.void())
  .handler(async ({ input, errors, context }) => {});
