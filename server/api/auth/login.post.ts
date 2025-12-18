import { z } from 'zod';

const bodySchema = z.object({
    email: z.email().trim().toLowerCase(),
    password: z.string().min(6),
});

export default eventHandler(async (event) => {
    const { email, password } = await readValidatedBody(event, bodySchema.parse);

    if (email === "test@test.com" && password === "123123") {
        await setUserSession(event, {
            user: {
                email: email,
                username: "testuser",
            }
        })

        return {};
    }

    throw createError({
        statusCode: 401,
        statusMessage: "Invalid email or password",
    })
});
