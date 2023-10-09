import { defineStore } from "pinia";

import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

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
    setUser(user) {
      this.user = user;
    },
  },
});
