<template>
  <div>
    <div
      class="relative text-left mt-24 mx-9 bg-white rounded-md px-5 py-6 shadow-md"
    >
      <div
        class="image absolute -top-10 left-0 right-0 bg-purple rounded-full w-20 h-20 mx-auto flex items-center justify-center"
      >
        <img :src="require(`@/images/${image}`)" alt="image" />
      </div>
      <div class="content mt-10">
        <h1 class="text-xl font-bold text-gray-800 mb-3">{{ title }}</h1>
        <p class="text-gray-400 font-semibold">
          {{ text }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["image", "title", "text"],
};
</script>
