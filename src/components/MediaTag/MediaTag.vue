<template>
  <Component
    :is="tag"
    v-bind="$attrs"
    class="text-dark-charcoal-60 text-sm font-semibold py-1 px-2 border border-dark-charcoal-60 rounded-full"
  >
    <!-- @slot Content goes here -->
    <slot />
  </Component>
</template>

<script>
/**
 * Displays a tag associated with a media item. If set up as a link, it can be
 * used as a link to find other items that are similarly tagged.
 */
export default {
  name: 'MediaTag',
  props: {
    /**
     * the HTML tag or Vue component to use as the root node; A non-interactive
     * span will be rendered unless specified otherwise.
     */
    tag: {
      type: String,
      default: 'div',
    },
  },
}
</script>
