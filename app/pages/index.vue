<template>
  <div>
    <TitlePage 
      title="Welcome to My Nuxt App"  
    />
    <UiButton />

    <slot />

    <footer>
      <p>© 2025 My Nuxt App</p>
    </footer>
  </div>
</template>

<script setup lang="ts"></script>
