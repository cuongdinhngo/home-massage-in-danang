<template>
  <v-list-item
    class="pa-3 bg-white rounded-lg elevation-0 border-thin ma-2"
    :subtitle="service.subtitle"
  >
    <template #prepend>
      <v-icon color="pink" size="36">{{ service.icon }}</v-icon>
    </template>
    <template #title>
      <span class="text-body-1 font-weight-bold">{{ service.title }}</span>
    </template>
  </v-list-item>
</template>
<script setup lang="ts">
defineProps({
  service: {
    type: Object,
    required: true,
  },
});
</script>