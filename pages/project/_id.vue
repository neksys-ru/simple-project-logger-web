<template>

</template>
<script>
export default {
  name:"ProjectComponent",
  async asyncData(context) {
    return { projectId: context.params.id }
  },
  data() {
    return {
      project: undefined,
    }
  },
  async fetch(){
    let res = await this.$axios.get(`/project/${this.projectId}`);
    this.project = res.data;
  },
}
</script>
