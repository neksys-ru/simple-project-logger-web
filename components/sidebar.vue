<template>
  <aside class="w-1/2 md:w-1/3 lg:w-64 fixed md:top-0 md:left-0 h-screen lg:block bg-gray-100 border-r z-30" :class="{'hidden':!sidebar_open}">
    <div class="w-full h-20 border-b flex px-6 items-center mb-8">
      <NuxtLink to="/" class="bg-black font-semibold text-xl text-white p-4">SPL</NuxtLink>
    </div>
    <div class="mb-4 px-4" v-for="(block,index) in blocks" :key="`${index}_block`">
      <p class="pl-4 text-sm font-semibold mb-1">{{block.title}}</p>
      <sidebar-link-component :title="link.title" :svg="link.svg" :path="link.path" v-for="(link,index) in block.links" :key="`${index}_link`"></sidebar-link-component>
    </div>
  </aside>
</template>

<script>
import SidebarLinkComponent from "@/components/sidebarlink";
import {mapState} from "vuex";
export default {
  name:"SidebarComponent",
  components: {SidebarLinkComponent},
  computed:{
    ...mapState('ui',['sidebar_open'])
  },
  data(){
    return {
      blocks:[
        {
          title:"MAIN",
          links:[
            {title:"Dashboard",path:"/dashboard", svg:"M18.121,9.88l-7.832-7.836c-0.155-0.158-0.428-0.155-0.584,0L1.842,9.913c-0.262,0.263-0.073,0.705,0.292,0.705h2.069v7.042c0,0.227,0.187,0.414,0.414,0.414h3.725c0.228,0,0.414-0.188,0.414-0.414v-3.313h2.483v3.313c0,0.227,0.187,0.414,0.413,0.414h3.726c0.229,0,0.414-0.188,0.414-0.414v-7.042h2.068h0.004C18.331,10.617,18.389,10.146,18.121,9.88 M14.963,17.245h-2.896v-3.313c0-0.229-0.186-0.415-0.414-0.415H8.342c-0.228,0-0.414,0.187-0.414,0.415v3.313H5.032v-6.628h9.931V17.245z M3.133,9.79l6.864-6.868l6.867,6.868H3.133z"},
            {title:"Dashboard",path:"/app", svg:"M18.121,9.88l-7.832-7.836c-0.155-0.158-0.428-0.155-0.584,0L1.842,9.913c-0.262,0.263-0.073,0.705,0.292,0.705h2.069v7.042c0,0.227,0.187,0.414,0.414,0.414h3.725c0.228,0,0.414-0.188,0.414-0.414v-3.313h2.483v3.313c0,0.227,0.187,0.414,0.413,0.414h3.726c0.229,0,0.414-0.188,0.414-0.414v-7.042h2.068h0.004C18.331,10.617,18.389,10.146,18.121,9.88 M14.963,17.245h-2.896v-3.313c0-0.229-0.186-0.415-0.414-0.415H8.342c-0.228,0-0.414,0.187-0.414,0.415v3.313H5.032v-6.628h9.931V17.245z M3.133,9.79l6.864-6.868l6.867,6.868H3.133z"},
          ],
        },
      ],

    }
  },
}
</script>
