<template>
    <div>
        <h1>Dashboard (Ruta protegida)</h1>
        {{ user.name }}
        <button @click="logout">Logout</button>
        <button @click="getProfile">Get Profile</button>
        <p>Welcome to the dashboard!</p>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    middleware: ['authenticated'],
});
const{ user, clear:clearUserSession } = useUserSession();

const logout = async () => {
    await clearUserSession();
    await navigateTo('/login');
}

const getProfile = async () => {
    try {
        const profile = await $fetch('api/profile');
        console.log("Profile data:", profile);
    } catch (error) {
        console.error("Error fetching profile: ", error);
    }
}
</script>
