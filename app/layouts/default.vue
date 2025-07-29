<template>
  <v-app-bar class="bg-white elevation-0" app>
    <v-container max-width="1200" class="mx-auto">
      <v-row>
        <v-col
          cols="12"
          class="d-flex align-center justify-space-between"
        >
          <v-app-bar-nav-icon
            v-if="$vuetify.display.smAndDown"
            @click="drawer.visible = !drawer.visible"
          />
          <v-responsive>
            <v-img
              :src="getImagePath('home-massage.avif')"
              alt="Home Massage Da Nang Logo"
              cover
              :width="mdAndDown ? 200 : 300"
            />
          </v-responsive>
          <div
            v-if="$vuetify.display.mdAndUp"
            class="actions"
          >
            <v-btn
              v-for="(item, index) in menu"
              :key="index"
              active-color="primary"
              class="text-subtitle-1 font-weight-bold"
            >
              {{item.title}}
            </v-btn>
          </div>
          <!-- Language Selector -->
          <v-menu>
            <template v-slot:activator="{ props }">
              <v-list-item
                v-if="$vuetify.display.smAndUp"
                v-bind="props"
                append-icon="mdi-chevron-down"
                density="compact" slim
                class="pa-2 rounded-lg"
              >
                <template #prepend>
                  <v-avatar size="20">
                    <v-img :src="getImagePath(selectedLanguage.icon)" />
                  </v-avatar>
                </template>
                <v-list-item-title class="text-subtitle-2">
                  {{ selectedLanguage.title }}
                </v-list-item-title>
              </v-list-item>
              <v-btn
                v-else
                v-bind="props"
                variant="text"
              >
                <v-avatar size="20">
                  <v-img :src="getImagePath(selectedLanguage.icon)" />
                </v-avatar>
                <v-icon class="ml-1" size="20">mdi-chevron-down</v-icon>
              </v-btn>
            </template>
            <v-list
              v-model="selectedLanguage.code"
              nav density="comfortable"
            >
              <v-list-item
                v-for="(language, index) in languages"
                :key="index"
                :value="language.code"
                link
                @click="selectedLanguage = language"
                :class="[{'bg-container': selectedLanguage.code === language.code}]"
              >
                <template #prepend>
                  <v-avatar size="30">
                    <v-img :src="getImagePath(language.icon)" />
                  </v-avatar>
                </template>
                <template #title>
                  <span class="text-subtitle-2">{{ language.title }}</span>
                </template>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>
  <v-navigation-drawer
    v-model="drawer.visible"
    app
  >
    <v-list>
      <v-list-item
        v-for="(item, index) in menu"
        :key="index"
        link
      >
        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
  <v-main>
    <v-container max-width="1200" class="mx-auto" min-height="100vh">
      <slot />
    </v-container>
  </v-main>
</template>
<script setup lang="ts">
const drawer = reactive({
  visible: false,
});

const { mdAndDown } = useDisplay();

const selectedLanguage = reactive({
  title: 'Tiếng Việt (VI)',
  code: 'vi',
  icon: 'vn.png',
});

const menu = [
  {
    title: 'Features',
  },
  {
    title: 'Services',
  },
  {
    title: 'Testimonial',
  },
];

const languages = [
  {
    title: 'Tiếng Việt (VI)',
    code: 'vi',
    icon: 'vn.png',
  },
  {
    title: 'English (EN)',
    code: 'en',
    icon: 'us.png',
  },
  {
    title: '한국어 (KR)',
    code: 'kr',
    icon: 'kr.png',
  },
  {
    title: '汉语 (CN)',
    code: 'cn',
    icon: 'cn.png',
  },
];
</script>