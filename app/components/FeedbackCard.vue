<template>
  <v-card class="elevation-0 rounded-lg mx-3 mb-5">
    <v-list-item
      :prepend-avatar="feedback.avatar"
      :title="feedback.name"
      :subtitle="feedback.from"
      class="pt-2"
    ></v-list-item>
    <v-card-title class="d-flex align-center justify-center">
      <v-rating
        :length="5"
        :size="30"
        :model-value="feedback.rating"
        color="yellow-darken-3"
        half-increments
        readonly
        density="default"
      />
    </v-card-title>
    <v-card-text class="text-body-2">
      {{ feedback.comment }}
    </v-card-text>
  </v-card>
</template>
<script setup lang="ts">
defineProps({
  feedback: {
    type: Object,
    required: true
  }
});
</script>