<script setup lang="ts">
const features = [
  "Basic components",
  "Full UI system",
  "Design tokens included",
  "Responsive by default",
  "Copy + paste workflow",
  "Developer-first structure",
];
</script>

<template>
  <section class="md:py-28 relative overflow-hidden sm:py-12 bg-background">
      <div class="h-px w-full bg-gradient-to-r from-transparent via-gray-400/20 to-transparent mb-24"></div>
    <div class="mx-auto px-6 max-w-3xl text-center">
        <!-- center content -->
        <div>

          <!-- heading -->
          <h2 class="text-3xl shimmer font-bold">
            Simple pricing
          </h2>

          <p class="mt-3 text-secondary">
            One plan. Everything you need to build fast.
          </p>

          <!-- price -->
          <div class="mt-14">
            <div class="text-6xl font-bold shimmer">
              £9
            </div>
            <div class="text-secondary mt-2">
              per month
            </div>
          </div>

          <!-- features -->
          <div class="mt-12 space-y-3 text-secondary text-sm">
            <div
              v-for="(f, i) in features"
              :key="i"
              class="flex items-center justify-center gap-2"
            >
              <span class="text-primary">✓</span>
              <span>{{ f }}</span>
            </div>
        </div>
        <!-- CTA -->
        <div class="mt-14 flex flex-col items-center gap-3">
            <button class="btn-primary w-full max-w-xs">
                Get Notch UI
            </button>
            
            <button class="text-secondary text-sm hover:text-primary transition">
                View documentation
            </button>
        </div>
    </div>

    
    <!-- footer note -->
    <div class="mt-20 text-xs text-secondary">
        Starter available for free • Team plans coming soon
    </div>
    
</div>

  </section>

</template>