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
          title:"ADMIN",
          links:[
            {title:"Роли",path:"/roles", svg:""},
          ],
        },
      ],

    }
  },
}
</script>
