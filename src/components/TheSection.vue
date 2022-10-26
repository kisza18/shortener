<template>
  <section class="pt-10">
    <div class="relative bg-grey w-full h-full pb-16">
      <the-input />
      <div class="text-center pt-48 mx-8">
        <h1 class="text-3xl text-gray-800 font-bold mb-3">
          Advanced Statistics
        </h1>
        <p class="text-gray-400 font-semibold mx-10">
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
      </div>
      <the-card
        image="icon-brand-recognition.svg"
        title="Brand Recognition"
        text="Boost your brand recognition with each click. Generic links don’t mean
          a thing. Branded links help instil confidence in your content."
      />
      <the-card
        image="icon-detailed-records.svg"
        title="Detailed Records"
        text="Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."
      />
      <the-card
        image="icon-fully-customizable.svg"
        title="Fully Customizable"
        text="Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."
      />
    </div>
  </section>
</template>

<script>
import TheInput from "./TheInput.vue";
import TheCard from "./TheCard.vue";

export default {
  components: { TheInput, TheCard },
};
</script>
