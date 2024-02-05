<template>
  <div>
    <a-button type="primary" @click="showModal"
      >Vizualizeaz&#259; documentele companiei</a-button
    >
    <a-modal v-model:open="open" @ok="handleOk" class="modal">
      <template #footer> </template>
      <embed
        src="/files/Documente_Best_Buy_Travel.pdf"
        width="100%"
        height="100%"
      />
    </a-modal>
  </div>
</template>
<script lang="ts">
export default {
  data() {
    return {
      loading: false,
      open: false,
    };
  },
  methods: {
    showModal() {
      this.open = true;
    },
    handleOk() {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
        this.open = false;
      }, 2000);
    },
    handleCancel() {
      this.open = false;
    },
  },
};
</script>
<style>
.modal {
  width: auto !important;
  height: 100% !important;
  padding: 100px !important;
  top: 0 !important;
}

:where(.css-dev-only-do-not-override-19yxfbp).ant-modal .ant-modal-content,
:where(.css-dev-only-do-not-override-19yxfbp).ant-modal .ant-modal-body {
  height: 100%;
}
:where(.css-dev-only-do-not-override-19yxfbp).ant-modal .ant-modal-content {
  padding: 35px 35px;
}
</style>
