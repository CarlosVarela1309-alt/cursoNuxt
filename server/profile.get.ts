const users = [
    { id: 1, name: 'Bob', age: 25, email: 'bob@example.com' },
    { id: 2, name: 'Alice', age: 30, email: 'alice@example.com' },
    { id: 3, name: 'Charlie', age: 35, email: 'charlie@example.com' },
    { id: 4, name: 'Test User', age: 40, email: 'test@test.com' },
];

export default eventHandler(async (event) => {
    const { user } = await requireUserSession(event);
    const userDB = users.find((u) => u.email === user.email);

    if (!userDB) {
        throw createError({
            statusCode: 404,
            statusMessage: "User not found",
        })
    }
    return {users};
});