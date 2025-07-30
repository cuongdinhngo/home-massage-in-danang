<template>
  <v-container max-width="1000" class="mx-auto d-flex align-center justify-center" fluid style="height: 100vh;">
    <v-row no-gutters class="w-100">
      <v-col cols="12" class="text-center">
        <v-card flat class="">
          <v-card-title class="text-center">
            <v-img
              :src="getImagePath('home-massage.avif')"
              class="mb-4"
              cover
              height="100%"
              rounded="lg"
            />
          </v-card-title>
          <v-card-title class="text-wrap">
            <h4 class="text-secondary">
              {{ $t('error-title') }}
            </h4>
          </v-card-title>
          <v-card-text class="text-center">
            <h4 class="">{{ $t('error-subtitle') }}</h4>
            <v-btn
              color="primary"
              @click="$router.push('/')"
              icon="mdi-phone"
              class="mt-4"
            >
            </v-btn>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script setup lang="ts">
const { t } = useI18n();
</script>