<template>
  <table-component :headers="headers" :data="dataForTable"></table-component>
</template>
<script>
import tableComponent from '@/components/util/table'
export default {
  name:"RoleList",
  layout:'app',
  components:{
    tableComponent,
  },
  data(){
    return {
      roles:[],
      headers:['Роль','Порядок','Действие'],
    }
  },
  computed:{
    dataForTable(){
      return this.roles.map((el)=>{
        return {name:el.name,order:el.order,action:''}
      })
    },
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
