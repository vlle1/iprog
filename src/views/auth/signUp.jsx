import { ref } from "vue";

export default {
  name: "SignUp",
  props: ["onRegister", "errorMessage"],
  setup(props) {
    const email = ref("");
    const password = ref("");
    function onRegister() {
      props.onRegister(email.value, password.value);
    }
    return function render() {
      return (
        <div>
          <h1>Create an Account</h1>
          {props.errorMessage.value === undefined ? (
            ""
          ) : (
            <p class="error">{props.errorMessage.value}</p>
          )}
          <form onSubmit={onRegister}>
            {" "}
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
              <button
                onClick={onRegister}
              >
                Register!
              </button>
            </p>
          </form>
        </div>
      );
    };
  },
};
