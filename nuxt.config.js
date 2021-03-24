export default {
    modules: [
        '@nuxtjs/axios'
    ],
    plugins: [
        '~/plugins/local-storage',
        '~/plugins/axios',
    ],
    buildModules: [
        '@nuxtjs/tailwindcss',
    ],
    tailwindcss: {
        jit: true
    },
    axios: {
        baseURL: 'https://localhost:44347/api', // Used as fallback if no runtime config is provided
    },

}
