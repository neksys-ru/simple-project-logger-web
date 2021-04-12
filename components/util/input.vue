<template>
  <ValidationProvider :name="name" :rules="validate" v-slot="{invalid,valid,errors}">
    <div class="flex flex-col pt-4">
      <label :for="name" class="text-lg">{{ label }}</label>
      <input :type="type"
             :id="name"
             :name="name"
             :value="value"
             @input="onInput"
             :placeholder="placeholder"
             class="w-full shadow border  p-2 my-2 rounded-md focus:outline-none focus:ring-2 ring-blue-200 " :class="{'border-green-500':valid,
         'border-red-500':invalid}">
      <span class="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">{{ errors[0] }}</span>
    </div>
  </ValidationProvider>
</template>
<script>
import {ValidationProvider} from 'vee-validate'
export default {
  name: "input-component",
  components:{ValidationProvider},
  computed: {
    error() {
      return this.errors.has(this.name);
    }
  },
  props: ['value', 'label', 'placeholder', 'type', 'validate', 'name'],
  methods: {
    onInput(event) {
      //this.$validator.validate(this.name);
      this.$emit('input', event.target.value)
    },
  }
}
</script>
