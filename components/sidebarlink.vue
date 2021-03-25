<template>
  <NuxtLink :to="path" class="w-full flex items-center text-blue-400 h-10 pl-4 hover:bg-gray-200 rounded-lg cursor-pointer">
    <svg class="h-6 w-6 fill-current mr-2" viewBox="0 0 20 20">
      <path :d="svg"></path>
    </svg>
    <span class="text-gray-700">{{title}}</span>
  </NuxtLink>
</template>
<script>
export default {
  name:"sidebarLinkComponent",
  props:{
    title:String,
    path:String,
    svg:String,
  },
}
</script>
<style lang="postcss" scoped>
 a.nuxt-link-active{
   @apply bg-gray-200;
 }
</style>
