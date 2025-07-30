<template>
  <v-card
    class="rounded-lg bg-transparent service-card"
    style="position: relative;"
    height="350px"
  >
    <v-img
      :src="getImagePath(service.image)"
      :lazy-src="getImagePath(`tiny-${service.image}`)"
      cover
      class="rounded-lg"
    >
      <v-card-title
        class="text-h5 text-center font-weight-bold text-wrap text-amber-darken-2 service-title"
        style="position: absolute; bottom: 150px; width: 100%;"
      >
        {{ service.title }}
      </v-card-title>
      <v-card-text class="text-subtitle-1 text-center text-wrap" style="position: absolute; bottom: 70px; width: 100%; min-height: 80px;">
        {{ service.description }}
      </v-card-text>
      <v-card-text class="text-subtitle-1 text-center text-wrap" style="position: absolute; bottom: 0px; width: 100%;">
        <p class="font-weight-bold text-h4 text-pink-accent-2 service-price">{{ service.price }}</p>
        <p class="text-decoration-line-through text-h6">{{ service.originalPrice }}</p>
      </v-card-text>
    </v-img>
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
<style scoped>
.service-card {
  transition: box-shadow 0.3s;
}
.service-card:hover {
  box-shadow: 0 8px 20px 0 #B1873F;
}
.service-title,
.service-price {
  transition: transform 0.3s;
}
.service-card:hover .service-title,
.service-card:hover .service-price {
  transform: scale(1.12);
}
</style>