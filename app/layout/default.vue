<template>
  <div>
    <nav>
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/about">About</NuxtLink>
      <NuxtLink to="/products">Products</NuxtLink>
      <NuxtLink to="/login">Login</NuxtLink>
      <NuxtLink to="/register">Register</NuxtLink>
    </nav>

    <slot />

    <footer>
      <p>© 2025 My Nuxt App</p>
    </footer>
  </div>
</template>

<script setup lang="ts"></script>