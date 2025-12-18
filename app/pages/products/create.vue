<template>
    <div>
        <h1>Create Product Page</h1>
        <button @click="onSubmit">Create Product</button>

        <div
            v-if="errorMessage"
            style="color: red; margin-top: 1em;"
        >
            Error: {{ errorMessage }}
        </div>
    </div>
</template>

<script setup lang="ts">
import type { NuxtError } from '#app';

const errorMessage = ref<string | null>(null);

    const onSubmit = async () => {
        try {

            errorMessage.value = null

            const response = await $fetch('/api/products', {
                method: 'POST',
                body: {
                    name: 'New Product',
                    price: 100,
                },
            })
            console.log({response})
        } catch (error) {
            const err = error as NuxtError
            console.log(err.statusMessage)

            errorMessage.value = err.statusMessage || 'An unexpected error occurred'
        }
    }
</script>