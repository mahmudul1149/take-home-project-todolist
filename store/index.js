import { defineStore } from "pinia";

import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";

export const useMainStore = defineStore("main", {
  state: () => ({
    user: null,
  }),

  actions: {
    async signinWithGoogle() {
      const provider = new GoogleAuthProvider();
      const auth = getAuth();
      try {
        await signInWithPopup(auth, provider);
        navigateTo("/");
      } catch (error) {
        alert("Error");
      }
    },
    async logout() {
      const auth = getAuth();
      signOut(auth)
        .then(() => {
          this.user = null;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    setUser(user) {
      this.user = user;
    },
  },
});
