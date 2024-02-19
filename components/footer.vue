<template>
  <div class="footer">
    <div>
      Agen&#355;ie de turism online <br />
      Adresa: Intrarea T&#226;rgu Frumos nr. 7, sector 4 Bucure&#351;ti <br />
      Telefon: +40 726 919 690 <br />
      © 2024 - Toate drepturile rezervate <br />
    </div>
    <PdfViewer />
    <a-button type="primary" @click="showModal">Conteaz&#259;-ne</a-button>
    <Contact />
  </div>
</template>
<script>
import PdfViewer from "./pdf-viewer.vue";
import Contact from "./contact.vue";
export default {
  setup() {
    const openDrawer = useOpenDrawer();
    return {
      openDrawer,
    };
  },
  components: {
    PdfViewer,
    Contact,
  },
  methods: {
    showModal() {
      this.openDrawer = true;
    },
  },
};
</script>
<style>
.footer {
  color: white;
  background-color: #234589;
  height: 100%;
  width: 100%;
  padding: 20px;
}
</style>
