<template>
  <div class="w-full border-t-2 px-8 py-6 lg:flex justify-between items-center">
    <p class="mb-2 lg:mb-0">© Copyright 2021</p>

    <div class="flex">
      <NuxtLink to="/login" class="mr-6 hover:text-gray-900">Terms of Service</NuxtLink>
      <NuxtLink to="/register" class="mr-6 hover:text-gray-900">Privacy Policy</NuxtLink>
      <NuxtLink to="/dashboard" class="hover:text-gray-900">About Us</NuxtLink>
    </div>
  </div>
</template>
<script>
export default {
  name:"footerComponent",
}
</script>
<style lang="postcss" scoped>
a.nuxt-link-active{
  @apply text-gray-900;
}
</style>
