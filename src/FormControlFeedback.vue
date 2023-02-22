<script lang="ts" setup>

const props = defineProps<{
    feedback?: string|string[]
}>();

</script>

<template>
    <slot
        v-for="item of [].concat(feedback)"
        v-bind="{ feedback: item }" />
</template>