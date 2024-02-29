<template>
  <div>
    <a-modal
      v-model:open="openDrawer"
      title="Contacteaz&#259;-ne"
      class="contact-modal"
    >
      <template #footer>
        <a-button key="back" @click="handleCancel">&#206;napoi</a-button>
        <a-button type="primary" :loading="loading" @click="handleSubmit"
          >Trimite</a-button
        >
      </template>
      <a-row>
        <a-col :span="8">
          <i><b>Agen&#355;ie de turism online</b></i> <br /><br />
          <b>Adresa:</b> <br />
          Intrarea T&#226;rgu Frumos nr. 7, sector 4 Bucure&#351;ti
          <br /><br />
          <b>Telefon:</b> <br />
          +40 726 919 690 <br />
        </a-col>
        <a-col :span="1" style="display: flex; justify-content: center">
          <a-divider type="vertical" style="height: 100%" />
        </a-col>
        <a-col :span="15">
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
        </a-col>
      </a-row>
    </a-modal>
  </div>
</template>
<script lang="ts">
import type { FormState } from "~/types/formTypes";
const { $mail } = useNuxtApp();
export default {
  setup() {
    const openDrawer = useOpenDrawer();

    return {
      openDrawer,
    };
  },
  data() {
    return {
      loading: false,
      formState: {
        email: "",
        title: "",
        message: "",
      } as FormState,
    };
  },
  methods: {
    handleCancel() {
      this.openDrawer = false;
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
          } catch (error) {
            console.error("Failed to send email:", error);
            // Handle error appropriately
          } finally {
            this.openDrawer = false;
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
<style>
.contact-modal {
  height: fit-content !important;
  width: 60% !important;
}
.contact-modal .ant-modal-title {
  text-align: center;
}
</style>
