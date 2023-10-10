<template>
  <div class="bg-white-300 pd-3">
    <p class="text-[#181313] text-center font-bold">
      {{ store.user.displayName }}
    </p>
    <p class="text-black">{{ store.user.email }}</p>
    <button
      @click="store.logout"
      class="font-sans bg-[#8F44AD] text-white w-full py-2 mt-2 rounded border-none transition ease-in-out delay-150 hover:bg-red-500 hover:text-white"
    >
      Logout
    </button>
  </div>
</template>
<script setup>
import { useMainStore } from "~/store/index";
const store = useMainStore();
</script>

<style></style>
