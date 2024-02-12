<template>
  <div>
    <a-button type="primary" @click="showModal">Conteaz&#259;-ne</a-button>
    <a-modal v-model:open="open" title="Scrie-ne">
      <template #footer>
        <a-button key="back" @click="handleCancel">Return</a-button>
        <a-button
          key="submit"
          type="primary"
          :loading="loading"
          html-type="submit"
          >Submit</a-button
        >
      </template>
      <a-form
        :model="formState"
        name="basic"
        layout="horizontal"
        :label-col="{ span: 4 }"
        :wrapper-col="{ span: 20 }"
        autocomplete="off"
        @finish="onFinish"
        @finishFailed="onFinishFailed"
      >
        <a-form-item
          name="email"
          label="E-mail"
          :rules="[
            {
              type: 'email',
              message: 'Adresa de e-mail nu are un format valid!',
            },
            { required: true, message: 'Te rog introdu adresa de e-mail!' },
          ]"
        >
          <a-input
            v-model:value="formState.email"
            placeholder="Ex. nume@domeniu.com"
          />
        </a-form-item>
        <a-form-item
          name="title"
          label="Titlu"
          :rules="[
            {
              required: true,
              message: 'Te rog introdu un titlu valid!',
            },
          ]"
        >
          <a-input
            v-model:value="formState.title"
            placeholder="Ex. Cerere de ofert&#259; pentru Londra"
          />
        </a-form-item>
        <a-form-item
          name="message"
          label="Mesaj"
          :rules="[
            {
              required: true,
              message: 'Te rog introdu un mesaj valid!',
            },
          ]"
        >
          <a-textarea
            v-model:value="formState.message"
            :auto-size="{ minRows: 5, maxRows: 5 }"
          />
        </a-form-item>
      </a-form>
    </a-modal>
  </div>
</template>
<script lang="ts">
interface FormState {
  email: string;
  title: string;
  message: string;
}
export default {
  data() {
    return {
      loading: false,
      open: false,
      formState: {
        email: "",
        title: "",
        message: "",
      } as FormState,
    };
  },
  methods: {
    showModal() {
      this.open = true;
    },
    handleCancel() {
      this.open = false;
    },
    onFinish(values: FormState) {
      console.log("Success:", values);
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
        this.open = false;
      }, 2000);
    },
    onFinishFailed(errorInfo: any) {
      console.log("Failed:", errorInfo);
    },
  },
};
</script>
