<template>
  <div class="bg-gray-800 font-sans leading-normal tracking-normal mt-12">
    <topbar></topbar>
    <div class="flex flex-col md:flex-row">
      <sidebar></sidebar>
      <main class="main-content flex-1 bg-gray-100 mt-12 md:mt-2 pb-24 md:pb-5">
        <Nuxt/>
      </main>
    </div>
  </div>
</template>
<script>
import Topbar from "../components/topbar";
import Sidebar from "../components/sidebar";

export default {
  components: {Sidebar, Topbar}
}
</script>
