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
            <input type="text" placeholder="Email" v-model={email.value} />
          </p>
          <p>
            <input
              type="password"
              placeholder="Password"
              v-model={password.value}
            />
          </p>
          <p>
            <button onClick={onLogin}>
              Log In!
            </button>
          </p>
          </form>
          <p>
            <button onClick={() => props.google()}>Sign In With Google</button>
          </p>
          <p>
            <button onClick={() => props.anonymous()}>Anonymous</button>
          </p>
          <p>New? <a href="/#/signup">Sign up here.</a></p>
        </div>
      );
    };
  },
};
