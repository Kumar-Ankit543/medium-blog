import z from "zod";

export const signupInput = z.object({
  username: z.string().email(),
  password: z.string().min(6, "Password should be atleast of 6 characters"),
  name: z.string().optional(),
});
export type SignupInput = z.infer<typeof signupInput>;

export const signinInput = z.object({
  username: z.string().email(),
  password: z.string().min(6, "Password should be atleast of 6 characters"),
});
export type SigninInput = z.infer<typeof signinInput>;

export const creatBlogInput = z.object({
  title: z.string(),
  content: z.string(),
});
export type CreatBlogInput = z.infer<typeof creatBlogInput>;

export const updateBlogInput = z.object({
  id: z.number().int(),
  title: z.string(),
  content: z.string(),
});
export type UpdateBlogInput = z.infer<typeof updateBlogInput>;
