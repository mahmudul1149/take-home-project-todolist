<template>
  <div>
    <Header />
    <slot></slot>
  </div>
</template>

<script setup>
import Header from "../components/header";
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Merienda:wght@300;400;500;600;700;800;900&family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500;1,600&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&family=Roboto+Mono:ital,wght@1,100&family=Roboto:ital,wght@0,300;0,900;1,300;1,500&display=swap");
* {
  font-family: "Poppins", sans-serif;
}
</style>
