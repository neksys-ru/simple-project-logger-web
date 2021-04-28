<template>
  <ul>
    <li v-for="(role,index) in roles" :key="`role_${index}`">
      {{role.name}} - {{role.order}}
    </li>
  </ul>
</template>
<script>
export default {
  name:"RoleList",
  layout:'app',
  data(){
    return {
      roles:[],
    }
  },
  async fetch(){
    try{
      const res = await this.$axios.get('role');
      this.roles = res.data;
    }catch (err){
      console.log(err.response.data);
    }
  },
}
</script>
