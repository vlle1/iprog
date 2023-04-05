import { createApp } from 'vue'
import './style.css'
import { VueRoot,router } from './VueRoot.jsx'


const app = createApp(VueRoot)
app.use(router);
app.mount('#root')