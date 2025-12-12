<template>
    <div>
        <NuxtLink to="/login"> Login </NuxtLink>
        <NuxtLink to="/register"> Register </NuxtLink>

        <slot />

        <footer>
            <p>Auth Layout</p>
        </footer>

    </div>
</template>