<template>
  <v-hover>
    <template v-slot:default="{ isHovering, props }">
      <v-list-item
        v-bind="props"
        class="pa-3 bg-white rounded-lg elevation-0 border-thin ma-2 benefit-card"
        :subtitle="service.subtitle"
        min-height="80"
      >
        <template #prepend>
          <v-icon :color="isHovering? 'pink' : 'pink-accent-4'" size="36">{{ service.icon }}</v-icon>
        </template>
        <template #title>
          <span class="text-body-1 font-weight-bold">{{ service.title }}</span>
        </template>
      </v-list-item>
    </template>
  </v-hover>
</template>
<script setup lang="ts">
defineProps({
  service: {
    type: Object,
    required: true,
  },
});
</script>
<style scoped>
.benefit-card {
  transition: box-shadow 0.3s, transform 0.3s;
}
.benefit-card:hover {
  box-shadow: 0 4px 16px rgba(177, 135, 63, 0.18);
  transform: translateY(-2px) scale(1.03);
}
</style>