<template>
  <div class="w-full flex flex-wrap">

    <!-- Login Section -->
    <div class="w-full md:w-1/2 flex flex-col">

      <div class="flex justify-center md:justify-start pt-12 md:pl-12 md:-mb-24">
        <NuxtLink to="/" class="bg-black text-white font-bold text-xl p-4">SPL</NuxtLink>
      </div>

      <div class="flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32">
        <p class="text-center text-3xl">Добро пожаловать.</p>
        <form class="flex flex-col pt-3 md:pt-8" @submit.prevent="login">
          <input-component name="email" :validate="'required|email'" type="email" label="Email" placeholder="your@email.com" v-model="loginObj.username"></input-component>
          <input-component name="password" :validate="'required'" type="password" label="Пароль" placeholder="password" v-model="loginObj.password"></input-component>
          <input type="submit" value="Войти" class="bg-black text-white font-bold text-lg hover:bg-gray-700 p-2 mt-8">
        </form>
        <div class="text-center pt-12 pb-12">
          <p>Нет аккаунта? <NuxtLink to="/register" class="underline font-semibold">Зарегистрироваться</NuxtLink></p>

        </div>
      </div>

    </div>

    <!-- Image Section -->
    <div class="w-1/2 shadow-2xl">
      <img class="object-cover w-full h-screen hidden md:block" src="https://source.unsplash.com/IXUM4cJynP0">
    </div>
  </div>

</template>
<script>
import InputComponent from "@/components/util/input";
export default {
  name:"LoginComponent",
  components: {InputComponent},
  layout:'auth',
  data: function(){
    return {
      loginObj:{
        username:'',
        password:''
      }
    }
  },
  methods:{
    async login(){
      await this.$store.dispatch('auth/login', this.loginObj)
      this.$router.push('/');;
      /*console.log(this.loginObj);
      console.log("Nice try");*/
    },

  },
}
</script>
