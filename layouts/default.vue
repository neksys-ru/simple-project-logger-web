<template>
  <div class="text-base leading-normal tracking-normal" >
    <div class="flex flex-wrap"></div>
    <sidebar></sidebar>
    <div class="w-full bg-gray-100 pl-0 lg:pl-64 min-h-screen" :class="{'overlay':sidebar_open}">
      <topbar></topbar>
      <main class="p-6 bg-gray-100 mb-20">
        <breadcrumbs-component></breadcrumbs-component>
        <Nuxt/>
      </main>
      <footer-component></footer-component>
    </div>
  </div>
</template>
<script>
import Topbar from "../components/topbar";
import Sidebar from "../components/sidebar";
import BreadcrumbsComponent from "@/components/breadcrumb";
import FooterComponent from "@/components/footer";
import {mapState} from "vuex";

export default {
  name:"DefaultLayout",
  components: {FooterComponent, BreadcrumbsComponent, Sidebar, Topbar},
  computed:{
    ...mapState('ui',['sidebar_open'])
  }
  //TODO uncomment as finish styling
  //middleware:['auth'],
  //TODO add  hiding of bar
}
</script>
