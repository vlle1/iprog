import { createApp } from 'vue'
import './style.css'
import { VueRoot,router } from './VueRoot.jsx'


console.log("mounted")
const app = createApp(VueRoot)
app.use(router);
app.mount('#root')