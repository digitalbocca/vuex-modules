'use strict'

import { createApp } from 'vue'

import App from './../components/App'
import router from './../router'
import store from './../store'

const app = createApp(App)

app.config.productionTip = false

app.use(router)
app.use(store)

app.mount('#app')
