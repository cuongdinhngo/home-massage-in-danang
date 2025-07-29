<template>
  <v-card class="bg-main pa-2 ma-2 elevation-0 rounded-lg" min-height="300">
    <v-row>
      <v-col
        v-if="$vuetify.display.xs"
        cols="12" sm="12" md="4" lg="4"
        :class="$vuetify.display.xs ? 'text-center' : 'text-end'"
      >
        <v-avatar
          tile
          size="260"
        >
          <v-img
            :src="getImagePath(feature.image)"
            cover
            rounded="lg"
          />
        </v-avatar>
      </v-col>
      <v-col
        cols="12" sm="12" md="7" lg="7"
      >
        <v-card-title
          :class="['py-0', $vuetify.display.xs ? 'text-h6 text-center' : 'text-h5']"
        >
          {{ feature.title }}
        </v-card-title>

        <v-card-title
          :class="['text-wrap mb-2 text-justify', $vuetify.display.xs ? 'text-subtitle-2' : 'text-subtitle-1']"
          style="line-height: normal; min-height: 70px;"
        >
          {{ feature.description }}
        </v-card-title>
        <v-card-text>
          <p :class="['font-weight-bold', $vuetify.display.xs ? 'text-subtitle-2' : 'text-subtitle-1']">
            Benefits:
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
          tile
          :size="$vuetify.display.mdAndUp ? 160 : 200"
        >
          <v-img
            :src="getImagePath(feature.image)"
            cover
            rounded="lg"
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