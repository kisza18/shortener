<template>
  <div>
    <the-nav />
    <the-header />
    <the-section />
    <the-links />
    <the-footer />
  </div>
</template>

<script>
import TheNav from "./components/TheNav.vue";
import TheHeader from "./components/TheHeader.vue";
import TheSection from "./components/TheSection.vue";
import TheLinks from "./components/TheLinks.vue";
import TheFooter from "./components/TheFooter.vue";

export default {
  name: "App",
  components: { TheNav, TheHeader, TheSection, TheLinks, TheFooter },
};
</script>

<style scoped>
* {
  font-family: "Poppins", sans-serif;
  font-size: 16px;
}
</style>
