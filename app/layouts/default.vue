<template>
  <!-- App bar -->
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
              @click="scrollToSection(item.section)"
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
                  {{ selectedLanguage.name }}
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
                v-for="(language, index) in locales"
                :key="index"
                :value="language.code"
                link
                @click="chooseLanguage(language)"
                :class="[{'bg-container': selectedLanguage.code === language.code}]"
              >
                <template #prepend>
                  <v-avatar size="30">
                    <v-img :src="getImagePath(language.icon)" />
                  </v-avatar>
                </template>
                <template #title>
                  <span class="text-subtitle-2">{{ language.name }}</span>
                </template>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>

  <!-- Navigation drawer -->
  <v-navigation-drawer
    v-model="drawer.visible"
    app
    temporary
  >
    <v-list>
      <v-list-item
        v-for="(item, index) in menu"
        :key="index"
        link
        @click="scrollToSection(item.section)"
      >
        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>

  <!-- Main content -->
  <v-main>
    <v-container fluid class="pa-0">
      <slot />
    </v-container>
  </v-main>

  <!-- Footer -->
  <v-footer
    class="bg-white text-center"
  >
    <v-container max-width="1200" class="mx-auto">
      <v-row no-gutters>
        <v-col
          cols="12" sm="12" md="4"
        >
          <v-card class="bg-transparent elevation-0 d-flex flex-column align-center">
            <v-responsive :aspect-ratio="5/1">
              <v-img
                :src="getImagePath('home-massage-text.png')"
                alt="Home Massage Da Nang Logo"
                cover
                width="300"
              ></v-img>
            </v-responsive>
            <v-card-text>
              <p class="text-body-2">{{ $t('hero-slogan') }}</p>
            </v-card-text>
          </v-card>
        </v-col>
        
        <v-col
          cols="12" sm="6" md="4"
        >
          <v-card class="bg-transparent elevation-0">
            <v-card-title>
              <span class="text-subtitle-1 font-weight-bold">
                <v-icon>mdi-phone</v-icon>
                {{ $t('nav-booking') }}:
              </span>
            </v-card-title>
            <v-card-text>
              <p class="text-h6 text-primary font-weight-bold cursor-pointer">+84935922854</p>
            </v-card-text>
          </v-card>
        </v-col>

        <v-col
          cols="12" sm="6" md="4"
        >
          <v-card class="bg-transparent elevation-0">
            <v-card-title>
              <span class="text-subtitle-1 font-weight-bold">
                {{ $t('nav-contact') }}:
              </span>
            </v-card-title>
            <v-card-text>
              <v-btn
                icon
                variant="text"
                size="50"
                color="blue"
                v-for="contact in contacts"
                :key="contact.title"
                :href="contact.link"
                target="_blank"
              >
                <v-img
                  :src="getImagePath(contact.icon)"
                  width="40"
                  height="40"
                  cover
                  rounded="circle"
                />
              </v-btn>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12">
          <p class="text-body-2">© {{ new Date().getFullYear() }} Home Massage Da Nang. All rights reserved.</p>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>
<script setup lang="ts">
const drawer = reactive({
  visible: false,
});

const { mdAndDown } = useDisplay();
const { locales, setLocale, t:translator, locale } = useI18n();

const selectedLanguage = reactive({
  code: 'vi',
  name: 'Tiếng Việt',
  file: 'vi.json',
  icon: 'vn.png'
});

const menu = ref([
  { title: translator('nav-features'), section: 'features' },
  { title: translator('nav-services'), section: 'services' },
  { title: translator('nav-testimonials'), section: 'testimonials' },
]);

const contacts = [
  {
    title: 'Zalo',
    icon: 'zalo.svg',
    link: 'https://zalo.me/0935922854',
  },
  {
    title: 'Facebook',
    icon: 'facebook.svg',
    link: 'https://www.messenger.com/t/100009511365248',
  },
  {
    title: 'Whatsapp',
    icon: 'whatsapp.svg',
    link: 'https://wa.me/qr/XETIG4TOJI5QO1',
  },
  {
    title: 'KakaoTalk',
    icon: 'kakaoTalk.svg',
    link: 'http://qr.kakao.com/talk/0diNs_cW8DuEbDIrdyHsbGQsh5Q-',
  },
];

watch(
  () => locale.value,
  (newLocale) => {
    menu.value = [
      { title: translator('nav-features'), section: 'features' },
      { title: translator('nav-services'), section: 'services' },
      { title: translator('nav-testimonials'), section: 'testimonials' },
    ];
    const lang = locales.value.find(lang => lang.code === newLocale);
    if (lang) {
      selectedLanguage.name = lang.name;
      selectedLanguage.code = lang.code;
      selectedLanguage.icon = lang.icon;
      selectedLanguage.file = lang.file;
    }
  },
  { immediate: true }
);

type Language = {
  code: string;
  name: string;
  file: string;
  icon: string;
};

function scrollToSection(section: string) {
  const el = document.getElementById(section);
  if (el) {
    const yOffset = -80;
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
}

function chooseLanguage(language: Language) {
  selectedLanguage.name = language.name;
  selectedLanguage.code = language.code;
  selectedLanguage.icon = language.icon;
  setLocale(language.code as 'vi' | 'en' | 'kr' | 'cn');
  console.log('Language changed to => ', selectedLanguage);
}
</script>