<template>
    <div>
        <h1>Product 1</h1>
        <h2>{{ $route.params.slug }}</h2>

        <div v-if="error">
            <p>Error loading products: {{ error.statusMessage }}</p>
        </div>

        <ul v-else-if="product">
            <h3>{{ product.name }}</h3>
            <p>Price: ${{ product.price }}</p>
        </ul>
    </div>
</template>

<script setup lang="ts">

const route = useRoute();

const { data: product, error } = await useFetch(`/api/products/${route.params.slug}`);

</script>
