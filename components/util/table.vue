<template>
  <table class="table-auto w-full whitespace-nowrap rounded-lg bg-white divide-y divide-gray-300 overflow-hidden'">
    <thead>
      <tr class="bg-gray-50">
        <th class="font-semibold text-sm uppercase px-6 py-4 text-left" v-for="(head,index) in headers" :key="`tbl_${head}_${index}`">{{head}}</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-gray-200">
        <tr v-for="(item,index) in data" :key="`tbl_r_${index}`">
          <td class="px-6 py-4" v-for="(element,id) in item" :key="`tbl_r_${index}_c_${id}`">{{element}}</td>
        </tr>
    </tbody>
  </table>
</template>
<script>
export default {
  name:'tableComponent',
  props:{
    headers:Array,
    data:Array,
  }
}
</script>
