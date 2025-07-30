<template>
  <v-card class="bg-main pa-2 ma-2 elevation-0 rounded-lg feature-card" min-height="310">
    <v-row no-gutters>
      <v-col
        v-if="$vuetify.display.xs"
        cols="12" sm="12"
        :class="$vuetify.display.xs ? 'text-center' : 'text-end'"
      >
        <v-avatar tile size="260" class="feature-image" rounded="lg">
          <v-img
            :src="getImagePath(feature.image)"
            cover rounded="lg"
            class="feature-image"
          />
        </v-avatar>
      </v-col>
      <v-col
        cols="12" sm="12" md="12" lg="12"
        class="text-center"
      >
        <v-card-title
          :class="[$vuetify.display.xs ? 'text-h6' : 'text-h5']"
        >
          {{ feature.title }}
        </v-card-title>
        <v-card-title
          :class="['text-wrap text-justify', $vuetify.display.xs ? 'text-subtitle-2' : 'text-subtitle-1']"
          style="line-height: normal; min-height: 50px;"
        >
          {{ feature.description }}
        </v-card-title>
      </v-col>
    </v-row>
    <v-row no-gutters class="d-flex align-center mt-2">
      <v-col
        cols="12" sm="12" md="7" lg="7"
      >
        <v-card-text class="pt-0">
          <p :class="['font-weight-bold', $vuetify.display.xs ? 'text-subtitle-2' : 'text-subtitle-1']">
            {{ $t('feature-benefits') }}:
          </p>
          <ul :class="['ml-4', $vuetify.display.xs ? 'text-subtitle-2' : 'text-subtitle-1']">
            <li
              v-for="(benefit, index) in feature.benefits"
              :key="index"
            >
              {{ benefit }}
            </li>
          </ul>
        </v-card-text>
      </v-col>
      <v-col
        v-if="!$vuetify.display.xs"
        cols="12" sm="12" md="5" lg="5"
        :class="$vuetify.display.mdAndDown ? 'text-center' : 'text-end'"
      >
        <v-avatar
          tile rounded="lg" class="feature-image"
          :size="$vuetify.display.mdAndUp ? 160 : 200"
        >
          <v-img
            :src="getImagePath(feature.image)"
            :lazy-src="getImagePath(`tiny-${feature.image}`)"
            cover rounded="lg"
            class="feature-image"
          />
        </v-avatar>
      </v-col>
    </v-row>
  </v-card>
</template>
<script setup lang="ts">
defineProps({
  feature: {
    type: Object,
    required: true
  }
});
</script>
<style scoped>
.feature-card {
  transition: box-shadow 0.3s, transform 0.3s;
}
.feature-card:hover {
  box-shadow: 0 8px 32px rgba(0,0,0,0.18);
  transform: translateY(-4px) scale(1.02);
}

.feature-image {
  transition: transform 0.3s;
}
.feature-card:hover .feature-image {
  transform: scale(1.06);
}
</style>