<template>
    <div>
        <h1>Blog Page</h1>
        <pre>{{ JSON.stringify(posts, null, 2) }}</pre>
    </div>
</template>

<script setup lang="ts">
    const {data: posts} = await useFetch("https://jsonplaceholder.typicode.com/posts" );
</script>