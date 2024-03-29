<script lang="ts" setup>
import { isPlainObject } from 'lodash-es';
import { computed } from 'vue';

const props = defineProps<{
    error?: Error|string,
    errors: (Error|string)[]|Record<string,Error|string[]>,
    name?: string,
    id?: string
}>();

const key = String(props?.id || props?.name);

const map = computed(() => {
    // First check if an `error` prop was passed. This is a single error.
    if(props.error) {
        return new Map<string, (string|Error)[]>(
            [[key, [props.error]]]
        );
    }

    // Next check if props.errors is a plain object. 
    if(isPlainObject(props.errors)) {
        return new Map<string, (string | Error)[]>(
            Object.entries(props.errors)
        );
    }

    // Finally check to see if an error of errors was passed.
    if(Array.isArray(props.errors)) {
        return new Map<string, (string | Error)[]>(
            [[key, props.errors]]
        );
    }

    return new Map();
});
</script>

<template>
    <slot
        v-for="item of map.get(key)"
        v-bind="{ key, error: item }" />
</template>