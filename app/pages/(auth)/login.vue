<template>
    <div>
        <h1>Login Page</h1>
        <form @submit.prevent="onSubmit">
            <input type="email" v-model="email" placeholder="Email">
            <input type="password" v-model="password" placeholder="Password">
            <button type="submit">Login</button>
        </form>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    layout: 'auth-layout'
});

import type { NuxtError } from '#app';

const email = ref('');
const password = ref('');

const { fetch: refreshUserSession } = useUserSession();

const onSubmit = async () => {
    try {
        await $fetch('/api/auth/login', {
            method: 'POST',
            body: {
                email: "test@test.com",
                password: "123123"
            }
        });
        await refreshUserSession();
        await navigateTo('/dashboard');
    } catch (error){
        console.log(error);
        const nuxtError = error as NuxtError;
        console.log({
            message: nuxtError.statusMessage,
            code: nuxtError.statusCode
        });
    }
}

</script>