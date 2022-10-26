<template>
  <nav>
    <div class="flex items-center justify-between py-4 px-5">
      <div><img src="../images/logo.svg" alt="" /></div>
      <div class="desktop_list hidden">nav list</div>
      <div @click="toggle = !toggle" class="hamburger">
        <div class="line1 h-1 w-6 rounded-lg bg-slate-400 mb-1"></div>
        <div class="line2 h-1 w-6 rounded-lg bg-slate-400 mb-1"></div>
        <div class="line3 h-1 w-6 rounded-lg bg-slate-400 mb-1"></div>
      </div>
    </div>
    <div
      v-if="toggle"
      class="mobile_list absolute left-0 right-0 bg-purple text-white px-8 py-10 mx-5 rounded-xl mt-9"
    >
      <div class="flex flex-col items-center border-b-2 font-medium">
        <a class="mb-6" href="#">Features</a>
        <a class="mb-6" href="#">Pricing</a>
        <a class="mb-6" href="#">Resources</a>
      </div>
      <div class="flex flex-col items-center mt-5">
        <a class="mb-6" href="#">Login</a>
        <a class="bg-button px-24 py-2 rounded-full" href="#">Sign up</a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      toggle: false,
    };
  },
};
</script>
