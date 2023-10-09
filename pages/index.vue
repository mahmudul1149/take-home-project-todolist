<template>
  <div class="max-w-[800px] mx-auto py-8">
    <div class="text-center">
      <h1
        class="text-xl text-black border inline-block py-2 px-48 border-black rounded"
      >
        Full-Stack Todo
      </h1>
    </div>
    <div class="mt-10 flex items-center gap-2">
      <input
        class="w-full py-2 px-2 border border-gray-500 rounded"
        type="text"
        name=""
        id=""
        placeholder="Insert Your Todo"
      />
      <button class="py-2 px-2 border border-gray-500 rounded">Submit</button>
    </div>
    <div>
      <table class="w-full my-8">
        <tr class="py-5 border-gray-500 border rounded w-full">
          <td class="flex items-center py-2 px-1 title">
            Todo 1
            <div class="ml-auto">
              <button class="border border-gray-400 py-1 px-3 rounded mr-1">
                Edit
              </button>
              <button class="border border-gray-400 py-1 px-3 rounded">
                Delete
              </button>
            </div>
          </td>
        </tr>
        <tr class="border-gray-500 py-5 border rounded w-full">
          <td class="flex items-center py-2 px-1">
            Todo 2
            <div class="ml-auto">
              <button class="border border-gray-400 py-1 px-3 mr-1 rounded">
                Edit
              </button>
              <button class="border border-gray-400 py-1 px-3 rounded">
                Delete
              </button>
            </div>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script setup></script>

<style></style>
