export default eventHandler(async (event) => {
    const body = await readBody(event);

    if(!body.name || !body.price) {
        throw createError({
            statusCode: 400,
            statusMessage: 'Name and Price are required',
        });
    }

    return {
        message: 'Product created',
        product: {
            name: body.name,
            price: body.price
        }
    };
});

