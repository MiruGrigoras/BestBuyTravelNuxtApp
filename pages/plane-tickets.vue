<template>
  <CardPage
    title="C&#259;l&#259;tore&#351;te c&#259;tre urm&#259;toarea ta destina&#355;ie de vis"
    :cards="planeCards"
  />
</template>

<script>
import { CardPage } from "#components";
export default {
  components: {
    CardPage,
  },
  data() {
    return {
      planeCards: [
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
};
</script>
