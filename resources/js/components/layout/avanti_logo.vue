<script setup lang="ts">
defineProps<{
  title?: string
}>()
</script>

<template>
  <div class="desktop:h-[39px] desktop:gap-3 flex h-[29px] items-center gap-2">
    <span class="desktop:h-[38px] desktop:w-12 h-[25px] w-8 shrink-0" aria-hidden="true">
      <svg
        class="block size-full"
        width="49"
        height="38"
        viewBox="0 0 49 38"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M48.1467 17.369C32.7851 7.68997 23.5956 4.14245 6.54015 0L36.3187 17.369L5.70524 37.5656C23.3408 31.6405 32.5005 26.9714 48.1467 17.369Z"
          fill="#2491AA"
        />
        <path
          d="M16.8374 10.2329C22.0842 12.5681 24.9285 14.0552 29.6394 17.369C18.2216 24.5126 11.7114 28.2307 0 34.6034L23.9342 17.369L16.8374 10.2329Z"
          fill="#245CAA"
        />
      </svg>
    </span>
    <span
      class="text-ink desktop:text-[32px] desktop:leading-[39px] desktop:tracking-[-0.05em] desktop:text-black text-[22px] leading-[27px] font-bold tracking-[-1.1px]"
    >
      {{ title ?? 'Avanti' }}
    </span>
  </div>
</template>
