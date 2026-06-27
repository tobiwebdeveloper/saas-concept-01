<script setup>
const testimonials = [
  {
    name: "Alec Whitten",
    img: "/alec-whitten.jpg",
    text: "This is actually insane. Super clean and fast.",
  },
  {
    name: "Bailey Richards",
    img: "/bailey-richards.jpg",
    text: "Feels really smooth and premium. Love it.",
  },
  {
    name: "Kaden Scott",
    img: "/kaden-scott.jpg",
    text: "Best price. Best quality.",
  },
   {
    name: "Harry Bender",
    img: "/harry-bender.jpg",
    text: "Genuine lifesaver. No friction, components are so easy to use",
  },
   {
    name: "Florence Shaw",
    img: "/florence-shaw.jpg",
    text: "Honestly one of the cleanest UI components I’ve seen.",
  },
   {
    name: "Fleur Cook",
    img: "/fleur-cook.jpg",
    text: "Magical. Try Notch UI",
  },
];
</script>
<template>
  <div class="overflow-hidden w-full">
    
    <div class="flex gap-4 w-max animate-scroll">

      <!-- real cards -->
      <div
        v-for="(t, i) in testimonials"
        :key="i"
        class="w-[280px] flex-shrink-0 shimmer p-4 bg-white shadow-md"
      >
        <div class="flex items-center gap-3">
          <img class="w-10 h-10 rounded-full object-cover" :src="t.img" />

          <div>
            <div class="text-sm font-semibold">{{ t.name }}</div>
            <div class="text-xs text-black-500">★★★★★</div>
          </div>
        </div>

        <p class="mt-3 text-sm text-gray-600">
          {{ t.text }}
        </p>
      </div>

      <!-- duplicate for smooth loop -->
      <div
        v-for="(t, i) in testimonials"
        :key="'dup-' + i"
        class="w-[280px] flex-shrink-0 shimmer p-4 bg-white shadow-md"
      >
        <div class="flex items-center gap-3">
          <img class="w-10 h-10 rounded-full object-cover" :src="t.img" />

          <div>
            <div class="text-sm font-semibold">{{ t.name }}</div>
            <div class="text-xs text-black">★★★★★</div>
          </div>
        </div>

        <p class="mt-3 text-sm text-gray-600">
          {{ t.text }}
        </p>
      </div>

    </div>
  </div>
</template>
<style scoped>
@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}
.animate-scroll {
  animation: scroll 20s linear infinite;
}
</style>