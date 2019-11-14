<template>
  <div class="test">
    <h1>Welcome</h1>

  <!-- VISIBILITY AND BREAKPOINTS -->
    <v-btn class="hidden-sm-and-down"
          depressed dark color="indigo">
      <v-icon left>home</v-icon>
      <span>Home</span>
    </v-btn>


    <v-btn class="hidden-md-and-up">
      Click me
    </v-btn>

    <v-btn class="hidden-sm-only" depressed dark color="indigo-darken4">text</v-btn>
  <!-- -->

    <p class="cyan darken-4 white--text"> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus ad ex atque sint distinctio dolor? Magnam optio minus voluptatem ad rem vitae impedit fuga. Ipsum voluptatem corporis assumenda perferendis non?</p>
    <h1 class="display-4">Massive display</h1>
    <v-btn class="pink white--text">Click me</v-btn>
    <v-btn dark depressed color="indigo">text</v-btn>
    <v-btn text color="pink">text</v-btn>



    <v-btn depressed small class="pink white--text">
      <v-icon left small>home</v-icon>
      <span>Home</span>
    </v-btn>

    <v-btn depressed large class="pink white--text">
      <span>Home</span>
      <v-icon right large>home</v-icon>
    </v-btn>

    <v-btn fab depressed small dark color="indigo">
      <v-icon>favorite</v-icon>
    </v-btn>

  </div>
</template>

<script>
export default {
  name: "Testing",

}
</script>

<style>

</style>