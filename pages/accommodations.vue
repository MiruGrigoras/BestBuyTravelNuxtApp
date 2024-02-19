<template>
  <a-layout style="height: 100vh">
    <a-layout-header style="padding: 0">
      <nav-bar />
    </a-layout-header>
    <a-layout-content style="height: 100%">
      <div class="title">
        G&#259;se&#351;te cele mai incredibile caz&#259;ri
      </div>
      <div class="cards-container" @click="showModal">
        <a-card
          style="flex-grow: 1; margin: 0 10px"
          v-for="card in cards"
          :key="card.id"
        >
          <template #cover>
            <img alt="example" :src="card.image" />
          </template>
          <a-card-meta :title="card.title" @click="showModal">
            <template #description>
              <div v-html="parsedDescription(card.description)"></div>
            </template>
          </a-card-meta>
          <a-img :src="card.image" alt="Card Image" />
        </a-card>
      </div>
      <Contact />
    </a-layout-content>
    <a-layout-footer style="padding: 0">
      <Footer />
    </a-layout-footer>
  </a-layout>
</template>

<script>
import { Contact, Footer } from "#components";
export default {
  setup() {
    const openDrawer = useOpenDrawer();
    return {
      openDrawer,
    };
  },
  data() {
    return {
      cards: [
        {
          id: 1,
          title: "Berlin",
          description: "&#206;ncep&#226;nd de la 30 euro/persoan&#259;",
          image: "/img/berlin-new.jpg",
        },
        {
          id: 2,
          title: "Barcelona",
          description: "&#206;ncep&#226;nd de la 65 euro/persoan&#259;",
          image: "/img/barcelona-new.jpg",
        },
        {
          id: 3,
          title: "Roma",
          description: "&#206;ncep&#226;nd de la 55 euro/persoan&#259;",
          image: "/img/rome-new.jpg",
        },
      ],
    };
  },
  components: {
    Footer,
    Contact,
  },
  methods: {
    parsedDescription(description) {
      return description;
    },

    showModal() {
      this.openDrawer = true;
    },
  },
};
</script>
<style>
.title {
  text-align: center;
  font-size: 30px;
  margin: 20px;
  color: #234589;
}
.cards-container {
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  justify-content: space-around;
  cursor: pointer;
}
</style>
