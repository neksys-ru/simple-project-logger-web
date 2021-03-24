<template>
  <div class="font-serif text-base">
    <topbar></topbar>
    <div >
      <sidebar></sidebar>
      <main >
        <Nuxt/>
      </main>
    </div>
  </div>
</template>
<script>
import Topbar from "../components/topbar";
import Sidebar from "../components/sidebar";

export default {
  components: {Sidebar, Topbar},
  middleware:['auth'],
}
</script>
