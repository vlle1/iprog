import { signOut, getAuth } from "firebase/auth";
import { useRouter } from "vue-router";
export default {
  name: "LogOut",
  setup(props) {
    return function render() {
      signOut(getAuth())
        .then(() => {
          console.log("Successfully logged out");
          window.location.hash = "/login"
        })
        .catch((error) => {
          console.log(error.code);
        });
    };
  },
};
