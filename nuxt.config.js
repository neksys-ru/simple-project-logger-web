export default {
    modules: [
        '@nuxtjs/axios',
    ],
    plugins: [
        '~/plugins/local-storage',
        '~/plugins/axios',
        '~/plugins/validate',
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
    nuxtValidate:{
        lang:'ru',
        nuxti18n: {
            locale: {
                'ru': 'ru'
            }
        }
    },
    head: {
        title: 'Simple Project Logger',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            {
                hid: 'description',
                name: 'description',
                content: 'Project based tag noted list, oriented on keeping info as soon as it settled'
            }
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
    },
    build: {
        // Add exception
        transpile: [
            "vee-validate/dist/rules"
        ],

    }

}
