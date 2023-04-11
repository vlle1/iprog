import logIn from "../views/auth/logIn";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "vue-router";
import { ref } from "vue";
export default {
  name: "SignUp",
  setup(props) {
    const currentError = ref(undefined);
    const router = useRouter();

    function login(email, password) {
        signInWithEmailAndPassword(getAuth(), email, password)
        .then((data) => {
          console.log("Successfully logged in.");
          router.push("/");
        })
        .catch((error) => {
          switch (error.code) {
            case "auth/invalid-email":
                currentError.value = "Invalid email";
                break;
            case "auth/user-not-found":
                currentError.value = "User not found";
                break;
            case "auth/wrong-password":
                currentError.value = "Wrong password";
                break;
            case "auth/user-disabled":
                currentError.value = "User disabled";
          }
        });
    }
    function loginGoogle() {
        //currentError.value = "Not implemented yet"; //TODO
    }
    function loginAnonymous() {
        //currentError.value = "Not implemented yet"; //TODO
    }
    return function render() {
      return (
        <logIn
          login={login}
          google={loginGoogle}
          anonymous={loginAnonymous}
          errorMessage={currentError}
        ></logIn>
      );
    };
  },
};
