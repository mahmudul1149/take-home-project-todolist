<template>
  <div class="bg-[#475569] h-[100vh] flex items-center justify-center">
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
          placeholder="Insert your todo"
        />
        <button
          class="bg-[#a3e635] text-black border-none py-2 px-8 border rounded-full border-gray-500"
        >
          Submit
        </button>
      </div>
      <div>
        <ul class="pt-4">
          <li
            class="py-2 px-2 flex items-center justify-between border-gray-300 border rounded w-full"
          >
            <p class="text-white">todo</p>
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

<script setup></script>

<style></style>
