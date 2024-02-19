<template>
  <CardPage
    title="G&#259;se&#351;te cele mai incredibile caz&#259;ri"
    :cards="accommodationCards"
  />
</template>

<script>
import { CardPage } from "#components";
export default {
  data() {
    return {
      accommodationCards: [
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
    CardPage,
  },
};
</script>
