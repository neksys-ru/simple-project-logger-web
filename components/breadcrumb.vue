<template>
  <!-- breadcrumb -->
  <nav class="text-sm font-semibold mb-6" aria-label="Breadcrumb">
    <ol class="list-none p-0 inline-flex">
      <breadcrumb-link v-if="$route.path!=='/'"  path="/" title="index" :last="false" />
      <breadcrumb-link v-for="(crumb,index) in crumbs" :key="`${index}_crumb`" :path="crumb.path" :title="crumb.name" :last="index===crumbs.length-1" />
    </ol>
  </nav>
  <!-- breadcrumb end -->
</template>
<script>
import BreadcrumbLink from "~/components/breadcrumbLink";
export default {
  name:'BreadcrumbsComponent',
  components: {BreadcrumbLink},
  computed:{
    crumbs(){
      const fullPath = this.$route.fullPath;
      const params = fullPath.startsWith('/')
          ? fullPath.substring(1).split('/')
          : fullPath.split('/')
      const crumbs = []
      let path = '';
      params.forEach((param, index) => {
        path = `${path}/${param}`
        const match = this.$router.match(path);
        if (match.name !== null) {
          crumbs.push({
            //title: titleCase(param.replace(/-/g, ' ')),
            ...match,
          })
        }
      });
      return crumbs;
    }
  },
}
</script>
