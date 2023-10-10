<template>
  <div
    class="bg-[#475569] h-[calc(100vh-60px)] flex items-center justify-center"
  >
    <div class="bg-[#0f172a] max-w-[600px] mx-auto p-8 rounded-md">
      <div class="text-center bg-[#475569] py-2 px-48 rounded-full">
        <h1 class="text-xl text-white inline-block">Full-Stack Todo</h1>
      </div>
      <div class="mt-10 flex items-center gap-2">
        <input
          class="w-full outline-none py-2 px-3 border border-gray-300 rounded-full"
          type="text"
          name=""
          id=""
          v-model="newTodo"
          placeholder="Insert your todo"
        />
        <button
          v-if="store.user"
          @click="addTodo"
          :disabled="newTodo === ''"
          class="bg-[#1F67CC] text-white border-none py-2 px-8 border rounded-full border-gray-500"
        >
          {{ isSubMitting ? "submitting" : "Submit" }}
        </button>
        <NuxtLink
          v-else
          to="/signin"
          class="bg-[#1F67CC] text-white border-none py-2 px-8 border rounded-full border-gray-500"
          >Submit</NuxtLink
        >
      </div>
      <div>
        <p v-if="isLoading" class="text-white text-center mt-4 text-2xl">
          Loading...
        </p>
        <ul class="pt-4">
          <li
            v-for="todo in todos"
            :key="todo.id"
            class="py-2 px-2 mb-4 flex items-center justify-between border-gray-300 border rounded w-full"
          >
            <p class="text-white">{{ todo.title }}</p>
            <div class="flex items-center gap-1">
              <button
                class="bg-[#a3e635] text-sm text-black py-2 px-6 rounded-full"
              >
                Edit
              </button>
              <button
                class="bg-[#EC4A9D] text-[white] text-sm py-2 px-6 rounded-full"
              >
                Delete
              </button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useMainStore } from "~/store/index";
const { $axios } = useNuxtApp();
const store = useMainStore();
const todos = ref([]);
const isLoading = ref(true);
const isSubMitting = ref(false);
const newTodo = ref("");
const fetchData = async () => {
  try {
    const { data } = await $axios.get(`/todo/all`);
    todos.value = data.todos;
  } catch (error) {
    console.log(error);
  } finally {
    isLoading.value = false;
  }
};
const addTodo = async () => {
  try {
    isSubMitting.value = true;
    await $axios.post(`/todo`, {
      title: newTodo.value,
    });
    todos.value.push({ title: newTodo.value });
    newTodo.value = "";
  } catch (error) {
    console.log(error);
  } finally {
    isSubMitting.value = false;
  }
};
onMounted(() => {
  fetchData();
});
</script>

<style></style>
