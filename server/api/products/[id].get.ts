const products = [
    { id: '1', name: 'Product 1', price: 10.0 },
    { id: '2', name: 'Product 2', price: 20.0 },
    { id: '3', name: 'Product 3', price: 30.0 },
]

export default eventHandler((event) => {
    const id = event.context.params?.id;
    //const id = getRouterParam(event, "id");

    if(!id) {
        throw createError({
            statusCode: 400,
            statusMessage: 'Product ID is required',
        });
    }

    const product = products.find((p) => p.id === id);

    if (!product) {
        throw createError({
            statusCode: 404,
            statusMessage: 'Product not found',
        });
    }

    return product;
})