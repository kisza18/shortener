<template>
  <div class="absolute -top-16">
    <div class="mx-9">
      <div class="input_section relative bg-purple rounded-xl overflow-hidden">
        <div class="px-7 py-6">
          <input
            class="w-full rounded-md py-2 px-5 mb-5"
            type="text"
            placeholder="Shorten a link here..."
          />
          <button class="bg-button rounded-md w-full py-2 text-white">
            Shorten it!
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.input_section {
  background-image: url("../images/bg-boost-desktop.svg");
  background-position: center;
}
</style>
