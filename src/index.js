import { createApp } from 'vue'
import './style.css'
import { VueRoot,router } from './VueRoot.jsx'
import short from 'vue-shortkey'

const app = createApp(VueRoot)
app.use(short)
app.use(router);
app.mount('#root')