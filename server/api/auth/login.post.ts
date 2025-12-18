import { z } from 'zod'

const bodySchema = z.object({
    email: z.email().trim().toLowerCase(),
    password: z.string().min(6),
})

export default eventHandler(async (event) => {
    const {email, password} = await readValidatedBody(event, bodySchema.parse)
    return { email, password };
});

