import { createApp } from 'vue'
import './style.css'
import { VueRoot } from './VueRoot.jsx'


console.log("mounted")
const app = createApp(VueRoot)
app.mount('#root')
