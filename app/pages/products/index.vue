<template>
  <div>
    <h1>Product 1</h1>
    <h2>/products/product-1</h2>
  </div>
</template>

<script setup lang="ts">
  const { data: products, error } = await useFetch('/api/products');
</script>
