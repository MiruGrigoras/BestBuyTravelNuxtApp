<template>
  <div class="footer">
    <a-row>
      <a-col :span="8">
        <PdfViewer />
      </a-col>
      <a-col :span="8">
        <div class="social-media">
          <a-button type="primary" @click="showModal"
            >Conteaz&#259;-ne</a-button
          >
          <div class="text">sau g&#259;se&#351;te-ne via</div>
          <a
            href="https://www.facebook.com/bestbuytravelromania"
            target="_blank"
          >
            <img
              src="/img/Facebook_Logo_Secondary.png"
              alt="Facebook"
              style="height: 25px; width: 25px"
            />
          </a>
        </div>
      </a-col>
      <a-col :span="8">
        <div class="all-rights">© 2024 - Toate drepturile rezervate <br /></div>
      </a-col>
    </a-row>

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
.social-media {
  display: flex;
  justify-content: center;
  height: 100%;
  align-items: center;
}

.social-media .text {
  padding: 0 10px;
}
.all-rights {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  align-items: flex-end;
}
</style>
