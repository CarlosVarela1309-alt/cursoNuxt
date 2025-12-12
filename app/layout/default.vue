<template>
  <div>
    <app-header />

    <slot />

    <footer>
      <p>© 2025 My Nuxt App</p>
    </footer>
  </div>
</template>

<script setup lang="ts">
import type appHeaderVue from '~/components/app-header.vue';

</script>