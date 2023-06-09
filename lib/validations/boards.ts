import * as z from "zod"

export const routeContextSchema = z.object({
  params: z.object({
    boardId: z.string(),
  }),
})

export const updateBoardSchema = z.object({
  name: z.string().min(3).max(32).optional(),
  top: z.number().optional(),
  left: z.number().optional(),
})

export const createBoardSchema = z.object({
  name: z.string().min(3).max(32),
  top: z.number(),
  left: z.number(),
  dashboardId: z.string()
})