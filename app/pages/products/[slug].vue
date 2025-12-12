<template>
    <div>
        <h1>Product 1</h1>
        <h2>{{ $route.params.slug }}</h2>
    </div>
</template>

<script setup lang="ts">

const route = useRoute();

console.log(route.params.slug);

</script>