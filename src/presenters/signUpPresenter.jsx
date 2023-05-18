import signUp from "../views/auth/signUp";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "vue-router";
import { ref } from "vue";

export default {
  name: "SignUp",
  setup(props) {
    const currentError = ref(undefined);
    const router = useRouter();

    function register(email, password) {
      createUserWithEmailAndPassword(getAuth(), email, password)
        .then((data) => {
          //console.log("Successfully registered");
          router.push("/");
        })
        .catch((error) => {
          currentError.value = error.code;
        });
    }
    return function render() {
      return (
        <signUp
          onRegister={register}
          errorMessage={currentError}
        ></signUp>
      );
    };
  },
};
