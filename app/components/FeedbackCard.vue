<template>
  <v-card class="elevation-0 rounded-lg mx-3 mb-5 feedback-card">
    <v-list-item
      :prepend-avatar="feedback.avatar"
      :title="feedback.name"
      :subtitle="feedback.from"
      class="pt-2"
    ></v-list-item>
    <v-card-title class="d-flex align-center justify-center">
      <span class="rating-wrapper">
        <v-rating
          :length="5"
          :size="30"
          :model-value="feedback.rating"
          color="yellow-darken-3"
          half-increments
          readonly
          density="default"
        />
      </span>
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

<style scoped>
.feedback-card {
  transition: box-shadow 0.3s, transform 0.3s;
}
.feedback-card:hover {
  box-shadow: 0 8px 32px rgba(177, 135, 63, 0.18);
}
.rating-wrapper {
  display: inline-block;
  transition: transform 0.3s;
}
.feedback-card:hover .rating-wrapper {
  transform: scale(1.17);
}
</style>