<template>
  <v-card
    class="elevation-0 rounded-lg bg-transparent"
    style="position: relative;"
    :image="getImagePath(service.image)"
    height="350px"
  >
    <v-card-title
      class="text-h5 text-center font-weight-bold text-wrap text-amber-darken-2"
      style="position: absolute; bottom: 150px; width: 100%;"
    >
      {{ service.title }}
    </v-card-title>
    <v-card-text class="text-subtitle-1 text-center text-wrap" style="position: absolute; bottom: 70px; width: 100%; min-height: 80px;">
      {{ service.description }}
    </v-card-text>
    <v-card-text class="text-subtitle-1 text-center text-wrap" style="position: absolute; bottom: 0px; width: 100%;">
      <p class="font-weight-bold text-h4 text-pink-accent-2">{{ service.price }}</p>
      <p class="text-decoration-line-through text-h6">{{ service.originalPrice }}</p>
    </v-card-text>
  </v-card>
</template>
<script setup lang="ts">
defineProps({
  service: {
    type: Object,
    required: true,
  },
});

</script>