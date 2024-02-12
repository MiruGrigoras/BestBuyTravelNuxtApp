<template>
  <div>
    <a-button type="primary" @click="showModal">Conteaz&#259;-ne</a-button>
    <a-modal v-model:open="open" title="Scrie-ne">
      <template #footer>
        <a-button key="back" @click="handleCancel">Return</a-button>
        <a-button type="primary" :loading="loading" @click="handleSubmit"
          >Submit</a-button
        >
      </template>
      <a-form
        ref="form"
        :model="formState"
        name="basic"
        layout="horizontal"
        :label-col="{ span: 4 }"
        :wrapper-col="{ span: 20 }"
        autocomplete="off"
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
            {
              required: true,
              message: 'Te rog introdu-&#355;i adresa de e-mail!',
            },
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
import type { FormState } from "~/types/formTypes";
const { $mail } = useNuxtApp();

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
    handleSubmit() {
      const form = this.$refs.form as any;
      form.validate().then(async (valid: boolean) => {
        if (valid) {
          this.loading = true;
          console.log("Form:", this.formState);

          try {
            const response = await fetch("/api/send-email", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(this.formState),
            });
            this.loading = false;
            this.open = false;
          } catch (error) {
            console.error("Failed to send email:", error);
            // Handle error appropriately
          } finally {
            this.loading = false;
          }
        }
      });
    },

    onFinishFailed(errorInfo: any) {
      console.log("Failed:", errorInfo);
    },
  },
};
</script>
