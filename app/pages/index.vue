<template>
  <!-- Banner -->
  <v-container fluid class="pa-0 ma-0">
    <v-row no-gutters>
      <v-col cols="12" class="text-center">
        <v-carousel
          hide-delimiters
          :show-arrows="false"
          :cycle="true"
          :interval="6000"
          class="pa-0"
          height="400"
        >
          <v-carousel-item
            v-for="(banner, index) in banners"
            :key="index"
            cover
          >
            <v-card
              class="bg-transparent"
              height="100%"
              tile
            >
              <v-img
                :src="getImagePath(banner.src)"
                :lazy-src="getImagePath('tiny-banner.png')"
                transition="fade-transition"
                height="400"
                cover
              >
                <v-card-title
                  :class="['text-center mt-15 text-primary text-wrap', mdAndDown ? 'text-h4' : 'text-h2']"
                >
                  {{ $t('hero-title') }}
                </v-card-title>
                <v-card-text
                  :class="['text-center text-white mt-5', mdAndDown ? 'text-h6' : 'text-h4']"
                >
                  {{ $t('hero-subtitle') }}
                </v-card-text>
              </v-img>
            </v-card>
          </v-carousel-item>
        </v-carousel>
      </v-col>
    </v-row>
  </v-container>

  <!-- Features -->
  <v-container max-width="1200" class="mx-auto mt-10 rounded-lg">
    <h2 class="text-center text-secondary" id="features">{{ $t('feature-header') }}</h2>
    <v-container max-width="1000" class="mx-auto rounded-lg">
      <v-row no-gutters>
        <v-col
          v-for="(feature, index) in data.features"
          :key="index"
          cols="12" sm="6" md="6" lg="6"
        >
          <FeatureCard :feature="feature" />
        </v-col>
      </v-row>
    </v-container>
  </v-container>

  <!-- Services -->
  <v-container id="services" max-width="1200" class="mx-auto rounded-lg">
    <v-card-title
      :class="['text-center text-h5 font-weight-bold', $vuetify.display.smAndDown ? 'pa-5' : 'pt-10 pb-15']"
      style="border: 2px solid #B1873F; border-radius: 15px;"
    >
      {{ $t('service-header') }}
    </v-card-title>
    <v-container
      max-width="1200" class="mx-auto rounded-lg"
      :style="{'margin-top': $vuetify.display.smAndDown ? '0px' : '-60px'}"
    >
      <v-row>
        <v-col
          cols="12" sm="6" md="3"
          v-for="(service, index) in data.services"
          :key="index"
        >
          <ServiceCard
            :service="service"
          />
        </v-col>
      </v-row>
    </v-container>
  </v-container>

  <!-- Services -->
  <v-container max-width="1200" class="mx-auto rounded-lg">
    <v-row no-gutters>
      <v-col
        cols="12" sm="12" md="4"
        v-for="(benefit, index) in data.offers"
        :key="index"
      >
        <BenefitCard
          :service="benefit"
        />
      </v-col>
    </v-row>
  </v-container>

  <v-divider class="my-5" color="amber" :thickness="5"/>

  <!-- Testaments -->
  <v-container
    id="testimonials"
    max-width="1200"
    class="mx-auto mt-5 rounded-lg"
  >
    <h2 class="text-center text-secondary">{{ $t('testimonial-header') }}</h2>
    <h4 class="text-center">{{ $t('testimonial-subtitle') }}</h4>
    <v-container max-width="1200" class="mx-auto rounded-lg px-0 mt-4">
      <v-row no-gutters>
        <v-col
          v-for="(column, columnIndex) in data.feedbacks"
          :key="`column-${columnIndex}`"
          :cols="12"
          :sm="12"
          :md="3"
        >
          <div
            v-for="feedback in column"
            :key="feedback.name"
          >
            <FeedbackCard :feedback="feedback" />
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>
<script setup lang="ts">
const { mdAndDown, sm } = useDisplay();
const { locale } = useI18n();

console.log('Current locale:', locale.value);

const { data, status, error } = await useAsyncData(
  `data-${locale.value}`,
  async() => await import(`../content/${locale.value}/data.json`),
  {
    watch: [locale],
    immediate: true,
    transform: (data) => {
      if (data && data.feedbacks) {
        const columnCount = 4;
        const cols: any[][] = Array(columnCount).fill(null).map(() => []);
        data?.feedbacks.forEach((project: any, index: number) => {
          const columnIndex = index % columnCount;
          if (cols[columnIndex]) {
            cols[columnIndex].push(project);
          }
        });
        return {
          ...data,
          feedbacks: cols,
        };
      }
    },
  }
);

console.log('Error', error.value);
console.log('Status:', status.value);
console.log('Data fetched:', data.value);

const banners = [
  {
    src: 'banner-1.png',
  },
  {
    src: 'banner-2.png',
  },
  {
    src: 'banner-3.png',
  },
  {
    src: 'banner-4.png',
  },
  {
    src: 'banner-6.png',
  },
  {
    src: 'banner-7.png',
  },
];
</script>