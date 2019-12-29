<template>
<Page class="page">
    <ActionBar title="Card UI" class="action-bar" />
    <ScrollView>
        <StackLayout class="home-panel">
            <!-- On Android the card view plugin requires adding an external library
	              therefore it can't be demoed on Playground. You will have to download this project
	              and build it locally to try it on Android -->
            <!-- <CardView v-if="showCardView" v-bind:key="item.heading" v-for="item in items" class="card" elevation="40" radius="10" ios:shadowRadius="3"> -->
							<CardView v-bind:key="item.heading" v-for="item in items" class="card" elevation="40" radius="10" ios:shadowRadius="3">
                <StackLayout class="card-layout">
                    <Label class="h2" :text="item.heading" />
                    <Label class="body" textWrap="true" :text="item.content" />
                </StackLayout>
            </CardView>
            <Label v-show="!showCardView" class="p-20" textWrap="true" text="On Android the card view plugin requires adding an external library therefore it can't be demoed on Playground. You will have to download this project and build it locally to try it on Android" />
        </StackLayout>
    </ScrollView>
</Page>
</template>

<script>
const {
    isAndroid
} = require('tns-core-modules/platform');
const isPlayground = true; // change this to show card view on android when building locally
export default {
    data() {
        return {
            showCardView: !isAndroid || !isPlayground,
            items: [{
                    heading: "Bulbasaur",
                    content: "Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun’s rays, the seed grows progressively larger."
                },
                {
                    heading: "Ivysaur",
                    content: "To support its weight, Ivysaur’s legs and trunk grow thick and strong. If it starts spending more time lying in the sunlight, it’s a sign that the bud will bloom into a large flower soon."
                },
                {
                    heading: "Venusaur",
                    content: "There is a large flower on Venusaur’s back. The flower is said to take on vivid colors if it gets plenty of nutrition and sunlight. The flower’s aroma soothes the emotions of people."
                },
                {
                    heading: "Charmander",
                    content: "The flame that burns at the tip of its tail is an indication of its emotions. The flame wavers when Charmander is enjoying itself. If the Pokémon becomes enraged, the flame burns fiercely."
                },
                {
                    heading: "Charmeleon",
                    content: "Charmeleon mercilessly destroys its foes using its sharp claws. If it encounters a strong foe, it turns aggressive. In this excited state, the flame at the tip of its tail flares with a bluish white color."
                },
                {
                    heading: "Charizard",
                    content: "Charizard flies around the sky in search of powerful opponents. It breathes fire of such great heat that it melts anything. However, it never turns its fiery breath on any opponent weaker than itself."
                },
                {
                    heading: "Squirtle",
                    content: "Squirtle’s shell is not merely used for protection. The shell’s rounded shape and the grooves on its surface help minimize resistance in water, enabling this Pokémon to swim at high speeds."
                },
                {
                    heading: "Wartortle",
                    content: "Its tail is large and covered with a rich, thick fur. The tail becomes increasingly deeper in color as Wartortle ages. The scratches on its shell are evidence of this Pokémon’s toughness as a battler."
                },
                {
                    heading: "Blastoise",
                    content: "Blastoise has water spouts that protrude from its shell. The water spouts are very accurate. They can shoot bullets of water with enough accuracy to strike empty cans from a distance of over 160 feet."
                }
            ]
        }
    },

};
</script>

<style scoped>
/*
In NativeScript, the app.css file is where you place CSS rules that
you would like to apply to your entire application. Check out
http://docs.nativescript.org/ui/styling for a full list of the CSS
selectors and properties you can use to style UI components.

/*
In many cases you may want to use the NativeScript core theme instead
of writing your own CSS rules. For a full list of class names in the theme
refer to http://docs.nativescript.org/ui/theme.
The imported CSS rules must precede all other types of rules.
*/
@import 'nativescript-theme-core/css/core.light.css';

.card {
    background-color: #fff;
    color: #4d4d4d;
    margin: 15 15 0;
}

.card-layout {
    padding: 20;
}

.card-layout .h1 {
    margin-bottom: 15;
}
</style>
