<template>
  <div :style="{ width }">
    <!-- Should be wrapped by a fixed width parent -->
    <div class="box-track group relative bg-yellow h-0 w-full pt-full">
      <div class="absolute inset-0 flex flex-col">
        <div class="info flex-grow flex flex-col justify-between p-4">
          <span class="font-heading font-semibold leading-snug">{{
            audio.title
          }}</span>
          <div class="info">
            <VLicense
              v-if="!isSmall"
              class="mb-2 hidden group-hover:block group-focus:block"
              hide-name
              :license="audio.license"
            />
            <div>{{ $t(`audio-categories.${audio.category}`) }}</div>
          </div>
        </div>

        <div v-if="!isSmall" class="player flex flex-row">
          <slot name="play-pause" size="small" />
          <slot name="controller" :waveform-props="{ features: [] }" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from '@nuxtjs/composition-api'

import VLicense from '~/components/License/VLicense.vue'

export default {
  name: 'Box',
  components: { VLicense },
  props: ['audio', 'size'],
  setup(props) {
    const isSmall = computed(() => props.size === 's')

    const width = computed(() => {
      const magnitude = {
        l: 13.25,
        m: 12.25,
        s: 9.75,
      }[props.size ?? 'm']
      return `${magnitude}rem`
    })

    return {
      isSmall,

      width,
    }
  },
}
</script>

<style>
.box-track .audio-controller {
  @apply flex-grow;
  --waveform-background-color: theme('colors.yellow');
}

.box-track .play-pause {
  @apply text-dark-charcoal bg-yellow border-yellow focus:border-pink;
}

.box-track .waveform {
  @apply h-10;
}
</style>
