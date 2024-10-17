import z from "zod";

export const signupInput = z.object({
  username: z.string(),
  password: z.string().min(6, "Password should be atleast of 6 characters"),
  name: z.string().optional(),
});

export type SignupInput = z.infer<typeof signupInput>;
