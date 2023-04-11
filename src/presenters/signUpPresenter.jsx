import signUp from "../views/auth/signUp";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "vue-router";

export default {
  name: "SignUp",
  setup(props) {
    const router = useRouter();

    function register(email, password) {
      createUserWithEmailAndPassword(getAuth(), email, password)
        .then((data) => {
          console.log("Successfully registered");
          router.push("/");
        })
        .catch((error) => {
          console.log(error.code);
          alert(error.message);
        });
    }
    function signInWithGoogle() {
      alert("Not implemented yet"); //TODO
    }
    function signInAnonymous() {
      alert("Not implemented yet"); //TODO
    }
    return function render() {
      return (
        <signUp
          onRegister={register}
          onGoogleSignup={signInWithGoogle}
          onAnonymousSignup={signInAnonymous}
        ></signUp>
      );
    };
  },
};
