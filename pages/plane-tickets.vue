<template>
    <div>
        <a-card style="width: 300px" v-for="card in cards" :key="card.id">
            <a-card-meta :title="card.title" :description="card.description" />
            <a-img :src="card.image" alt="Card Image" />
        </a-card>
    </div>
</template>

<script>
export default {
    data() {
        return {
            cards: [
                {
                    id: 1,
                    title: "Card 1",
                    description: "Description for Card 1",
                    image: "https://example.com/card1.jpg",
                },
                {
                    id: 2,
                    title: "Card 2",
                    description: "Description for Card 2",
                    image: "https://example.com/card2.jpg",
                },
                {
                    id: 3,
                    title: "Card 3",
                    description: "Description for Card 3",
                    image: "https://example.com/card3.jpg",
                },
            ],
        };
    },
};
</script>
