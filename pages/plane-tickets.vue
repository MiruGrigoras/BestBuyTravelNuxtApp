<template>
  <a-layout style="height: 100vh">
    <a-layout-header style="padding: 0">
      <nav-bar />
    </a-layout-header>
    <a-layout-content style="height: 100%">
      <div class="title">
        C&#259;l&#259;tore&#351;te c&#259;tre urm&#259;toarea ta destina&#355;ie
        de vis
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
          <a-card-meta
            :title="card.title"
            v-html="parsedDescription(card.description)"
            @click="showModal"
          />
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
          title: "Paris",
          description: "&#206;ncep&#226;nd de la 175 euro/persoan&#259;",
          image: "/img/luvru-new.jpg",
        },
        {
          id: 2,
          title: "Londra",
          description: "&#206;ncep&#226;nd de la 160 euro/persoan&#259;",
          image: "/img/london-new.jpg",
        },
        {
          id: 3,
          title: "Madrid",
          description: "&#206;ncep&#226;nd de la 175 euro/persoan&#259;",
          image: "/img/madrid-new.jpg",
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
      return unescape(description);
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
