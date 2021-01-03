import { createApp } from "vue"
import App from "./App.vue"
import "font-awesome/css/font-awesome.min.css"
import "normalize.css"
import "./assets/scss/style.scss"

createApp(App)
  .component("fa", require("vue-fontawesome-icon/VueFontawesome.vue").default)
  .mount("#app")
