<template>
  <div class="w-full flex flex-wrap">

    <!-- Register Section -->
    <div class="w-full md:w-1/2 flex flex-col">

      <div class="flex justify-center md:justify-start pt-12 md:pl-12 md:-mb-24">
        <NuxtLink to="/" class="bg-black text-white font-bold text-xl p-4">SPL</NuxtLink>
      </div>

      <div class="flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32">
        <p class="text-center text-3xl">Присоединяйтесь.</p>
        <ValidationObserver ref="registerForm" v-slot="{ handleSubmit }">
          <form class="flex flex-col pt-3 md:pt-8" @submit.prevent="handleSubmit(register)">
            <InputComponent validate="required" type="text" name="name" label="Имя" placeholder="Иван" v-model="userData.name"></InputComponent>
            <InputComponent validate="required|email" type="email" name="email" label="Email" placeholder="example@gg.com" v-model="userData.email"></InputComponent>
            <InputComponent validate="required|min:8" type="password" name="password" label="Пароль"  v-model="userData.password"></InputComponent>
            <InputComponent validate="required|password:@password" type="password" name="confirm" label="Подтверждение пароля"  v-model="confirm"></InputComponent>

            <input type="submit" value="Зарегистрироваться"
                   class="bg-black text-white font-bold text-lg hover:bg-gray-700 p-2 mt-8">
          </form>
        </ValidationObserver>
        <div class="text-center pt-12 pb-12">
          <p>Уже есть аккаунт?
            <NuxtLink to="/login" class="underline font-semibold">Войти</NuxtLink>
          </p>
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
import {ValidationObserver} from "vee-validate"

export default {
  name: 'RegisterComponent',
  components: {
    ValidationObserver,
    InputComponent,
  },
  data() {
    return {
      userData: {
        name: "",
        email: "",
        password: "",
      },
      confirm:"",
    }
  },
  layout: 'auth',
  methods: {
    async register() {
      try{
        await this.$store.dispatch('auth/register',this.userData)
        this.$router.push('/');
      }catch (err){
        this.$refs.registerForm.setErrors(err.response.data);
      }
      //this.$router.push('/');

    },
  },
}
</script>
