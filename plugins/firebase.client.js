import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useMainStore } from "../store/index";

export default defineNuxtPlugin((nuxtApp) => {
  const firebaseConfig = {
    apiKey: "AIzaSyB2fnHm7ah5CE9nej-Ufw4TPQH3dr4OzCA",
    authDomain: "take-home-todos.firebaseapp.com",
    projectId: "take-home-todos",
    storageBucket: "take-home-todos.appspot.com",
    messagingSenderId: "567571876116",
    appId: "1:567571876116:web:d7daefafbe4b642a96da01",
    measurementId: "G-E6RZ6G58BE",
  };
  const { $axios } = useNuxtApp();
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const store = useMainStore();
  onAuthStateChanged(auth, async (user) => {
    if (user) {
      const idToken = await auth.currentUser.getIdToken();
      $axios.defaults.headers.common["Authorization"] = `Bearer ${idToken}`;
      store.setUser(user);
    } else {
      store.setUser(null);
    }
  });
});
