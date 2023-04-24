import { ref } from "vue";

export default {
  name: "LogIn",
  props: ["login", "google", "anonymous", "errorMessage"],
  setup(props) {
    const email = ref("");
    const password = ref("");
    function onLogin() {
        props.login(email.value, password.value);
    }
    return function render() {
      return (
        <div>
          <h1>Log In</h1>
          {props.errorMessage.value === undefined ? "" : <p class="error">{props.errorMessage.value}</p>}
          <form onSubmit={onLogin}>
          <p>
            <input type="text" placeholder="Email" v-model={email.value} class="login-bar"/>
          </p>
          <p>
            <input
              type="password"
              placeholder="Password"
              v-model={password.value}
              class="login-bar"
            />
          </p>
          <p>
            <button onClick={onLogin}>
              Log In!
            </button>
          </p>
          </form>
          <p>New? <a href="/#/signup">Sign up here.</a></p>
          <div style="display:flex;align-itmes:center;"><hr style="height:0px;width:33%"></hr>or<hr style="height:0px;width:33%"></hr></div>
            <button onClick={() => props.google()}>Sign In With Google</button>
            <button onClick={() => props.anonymous()}>Stay Anonymous</button>

          
        </div>
      );
    };
  },
};
