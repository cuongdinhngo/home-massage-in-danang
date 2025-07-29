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
              :image="getImagePath(banner.src)"
              height="100%"
            >
              <v-card-title
                :class="['text-center mt-15 text-primary text-wrap', mdAndDown ? 'text-h4' : 'text-h2']"
              >
                Dịch vụ massage tại nhà <br/>Đà Nẵng
              </v-card-title>
              <v-card-text
                :class="['text-center text-white mt-5', mdAndDown ? 'text-h6' : 'text-h4']"
              >
                <p>Chúng tôi cung cấp dịch vụ massage tại nhà chuyên nghiệp tại Đà Nẵng, <br/>mang lại sự thư giãn tối ưu cho bạn.</p>
              </v-card-text>
            </v-card>
          </v-carousel-item>
        </v-carousel>
      </v-col>
    </v-row>
  </v-container>

  <!-- Features -->
  <v-container max-width="1200" class="mx-auto mt-10 rounded-lg">
    <h2 class="text-center text-secondary">Find your perfect escape</h2>
    <v-container max-width="1000" class="mx-auto rounded-lg">
      <v-row no-gutters>
        <v-col
          v-for="(feature, index) in features"
          :key="index"
          cols="12" sm="6" md="6" lg="6"
        >
          <FeatureCard :feature="feature" />
        </v-col>
      </v-row>
    </v-container>
  </v-container>

  <!-- Services -->
  <v-container max-width="1200" class="mx-auto rounded-lg">
    <v-card-title
      :class="['text-center text-h5 font-weight-bold', $vuetify.display.smAndDown ? 'pa-5' : 'pt-10 pb-15']"
      style="border: 2px solid #B1873F; border-radius: 15px;"
    >
      Our Services
    </v-card-title>
    <v-container
      max-width="1200" class="mx-auto rounded-lg"
      :style="{'margin-top': $vuetify.display.smAndDown ? '0px' : '-60px'}"
    >
      <v-row>
        <v-col
          cols="12" sm="6" md="3"
          v-for="(service, index) in services"
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
        v-for="(benefit, index) in benefits"
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
    max-width="1200"
    class="mx-auto mt-5 rounded-lg"
  >
    <h2 class="text-center text-secondary">Testaments</h2>
    <h4 class="text-center">We are so grateful for your positive review and appreciate your support of our product</h4>
    <v-container max-width="1200" class="mx-auto rounded-lg px-0 mt-4">
      <v-row no-gutters>
        <v-col
          v-for="(column, columnIndex) in columns"
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

const feedbacks = [
  {
    name: 'Lee Hae In',
    location: 'Seoul, South Korea',
    rating: 5,
    comment: 'The massage was absolutely amazing! I felt so relaxed and rejuvenated. Highly recommend!',
    avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
  },
  {
    name: 'Maria Rossi',
    location: 'Texas, USA',
    rating: 4,
    comment: 'Great service and very professional staff. Will come back again!',
    avatar: 'https://randomuser.me/api/portraits/women/56.jpg'
  },
  {
    name: 'Nguyễn Văn An',
    location: 'Hà Nội, Việt Nam',
    rating: 5,
    comment: 'Best massage experience ever! The atmosphere was so calming and the staff was very attentive.',
    avatar: 'https://randomuser.me/api/portraits/men/26.jpg'
  },
  {
    name: 'Li Wei',
    location: 'Beijing, China',
    rating: 4,
    comment: 'Very good massage, but the room was a bit noisy. Overall, a great experience.',
    avatar: 'https://randomuser.me/api/portraits/men/90.jpg'
  },
  {
    name: 'Lee Hae In',
    location: 'Seoul, South Korea',
    rating: 5,
    comment: 'The massage was absolutely amazing! I felt so relaxed and rejuvenated. Highly recommend!',
    avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
  },
  {
    name: 'Maria Rossi',
    location: 'Texas, USA',
    rating: 4,
    comment: 'Great service and very professional staff. Will come back again!',
    avatar: 'https://randomuser.me/api/portraits/women/56.jpg'
  },
  {
    name: 'Nguyễn Văn An',
    location: 'Hà Nội, Việt Nam',
    rating: 5,
    comment: 'Best massage experience ever! The atmosphere was so calming and the staff was very attentive.',
    avatar: 'https://randomuser.me/api/portraits/men/26.jpg'
  },
  {
    name: 'Li Wei',
    location: 'Beijing, China',
    rating: 4,
    comment: 'Very good massage, but the room was a bit noisy. Overall, a great experience.',
    avatar: 'https://randomuser.me/api/portraits/men/90.jpg'
  }
];

// Create masonry columns
const columns = computed(() => {
  if (!feedbacks) return [[], []];
  
  const columnCount = 4;
  const cols: any[][] = Array(columnCount).fill(null).map(() => []);
  
  feedbacks.forEach((project: any, index: number) => {
    const columnIndex = index % columnCount;
    if (cols[columnIndex]) {
      cols[columnIndex].push(project);
    }
  });
  
  return cols;
});

const benefits = [
  {
    title: 'Massage trị liệu hiệu quả',
    icon: 'mdi-spa',
    subtitle: 'Giảm đau nhức và căng thẳng, mang lại sự thoải mái cho cơ thể bạn.',
  },
  {
    title: 'Phục vụ 24/7',
    icon: 'mdi-hand-heart-outline',
    subtitle: 'Luôn sẵn sàng phục vụ bạn bất kể thời gian nào',
  },
  {
    title: 'Giá cả phải chăng',
    icon: 'mdi-cards-spade',
    subtitle: 'Với chỉ 300k/60 phút. Bạn sẽ có những giây phút thư giãn thật sự cùng chúng tôi.',
  },
];

const services = [
  {
    title: 'Gói Cơ bản',
    description: 'Giảm đau nhức và căng thẳng vùng cổ và vai',
    image: 'service-1.png',
    price: '300k',
    originalPrice: '370k',
  },
  {
    title: 'Gói Tiêu chuẩn',
    description: 'Giảm giảm căng thằng và thư giãn toàn thân',
    image: 'service-3.png',
    price: '500k',
    originalPrice: '550k',
  },
  {
    title: 'Gói Nâng cao',
    description: 'Sử dụng dầu thơm để thư giãn sâu và làm dịu cơ thể',
    image: 'service-2.png',
    price: '500k',
    originalPrice: '550k',
  },
  {
    title: 'Gói Chuyên sâu',
    description: 'Giúp lưu thông máu ở chân và giảm mệt mỏi',
    image: 'service-4.png',
    price: '600k',
    originalPrice: '650k',
  },
];
  

const features = [
  {
    title: 'Massage Trị Liệu',
    description: 'Nhắm đến việc điều trị các vấn đề cụ thể như đau lưng, đau cổ, hoặc căng thẳng',
    benefits: [
      'Relieves muscle tension',
      'Improves circulation',
      'Enhances overall well-being',
    ],
    perfectFor: [
      'Chronic pain relief',
      'Stress reduction',
      'Improved mobility',
    ],
    image: 'massage-11.png',
  },
  {
    title: 'Massage Thư Giãn',
    description: 'Tập trung vào việc giảm căng thẳng và mang lại cảm giác thư giãn sâu',
    benefits: [
      'Reduces stress and anxiety',
      'Promotes relaxation',
      'Improves sleep quality',
    ],
    perfectFor: [
      'Stress relief',
      'Relaxation',
      'Better sleep',
    ],
    image: 'massage-8.png',
  },
  {
    title: 'Massage Thể Thao',
    description: 'Dành cho những người tập thể thao, giúp phục hồi cơ bắp và tăng cường hiệu suất',
    benefits: [
      'Enhances athletic performance',
      'Reduces muscle soreness',
      'Improves flexibility',
    ],
    perfectFor: [
      'Athletes',
      'Fitness enthusiasts',
      'Post-workout recovery',
    ],
    image: 'massage-7.png',
  },
  {
    title: 'Massage Bầu',
    description: 'Dành riêng cho phụ nữ mang thai, giúp giảm đau lưng và cải thiện tâm trạng',
    benefits: [
      'Relieves back pain',
      'Reduces swelling',
      'Improves mood',
    ],
    perfectFor: [
      'Stress relief',
      'Relaxation',
      'Better sleep',
    ],
    image: 'massage-9.png',
  }
];
</script>