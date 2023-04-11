import { ref } from "vue";

export default {
  name: "SignUp",
  props: ["onRegister", "onGoogleSignup", "onAnonymousSignup"],
  setup(props) {
    const email = ref("");
    const password = ref("");
    return function render() {
      return (
        <div>
          <h1>Create an Account</h1>
          <p>
            <input type="text" placeholder="Email" v-model={email.value} />
          </p>
          <p>
            <input type="password" placeholder="Password" v-model={password.value} />
          </p>
          <p>
            <button onClick={() => props.onRegister(email.value, password.value)}>
              Register
            </button>
          </p>
          <p>
            <button onClick={() => props.onGoogleSignup()}>
              Sign In With Google
            </button>
          </p>
          <p>
            <button onClick={() => props.onAnonymousSignup()}>Anonymous</button>
          </p>
        </div>
      );
    }
  },
};
