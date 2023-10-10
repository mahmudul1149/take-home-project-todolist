<template>
  <div class="bg-[#475569]">
    <header class="h-[40px] w-[800px] mx-auto flex justify-end">
      <div class="text-right">
        <div class="pt-3">
          <NuxtLink
            v-if="!store.user"
            to="/signin"
            class="bg-[#a3e635] text-black py-1 px-6 rounded"
            >Signin</NuxtLink
          >
          <div v-if="store.user" class="relative w-10 h-10">
            <div v-if="store.user.photoURL">
              <img
                class="w-10 h-10 rounded-full cursor-pointer"
                :src="store.user.photoURL"
                alt=""
                @click.stop="showPopUpProfileBox = !showPopUpProfileBox"
              />
            </div>
            <div v-else class="w-10 h-10 rounded-full">
              <img
                class="w-10 h-10 rounded-full cursor-pointer"
                src="https://deejayfarm.com/wp-content/uploads/2019/10/Profile-pic.jpg"
                alt=""
                @click.stop="showPopUpProfileBox = !showPopUpProfileBox"
              />
            </div>
            <popup-profile-box
              v-show="showPopUpProfileBox"
              class="text-right block absolute bg-gray-100 p-2 min-w-[200px] min-h-[118px] top-[3rem] right-0 bottom-0 z-10 shadow-lg shadow-indigo-500/50"
            ></popup-profile-box>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script setup>
import { useMainStore } from "~/store/index";
import PopupProfileBox from "../components/profile-popup.vue";

const store = useMainStore();
const showPopUpProfileBox = ref(false);
</script>

<style></style>
