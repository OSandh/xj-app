<template>
  <v-card
    class="text-uppercase"
    height="150"
    min-width="250"
  >

  
  <div class="title-wrapper">
    <div class="title-content">
      <span class="secondary--text font-weight-medium">{{ title }}</span>
    </div>
  </div>

  <div class="content-wrapper">
    <div class="content info--text">

      <div class="digits-wrapper">
        <div class="digits ">

          <span class="font-weight-bold" >{{ cardVal }} </span>
          <span class="font-weight-light">{{ cardSecVal }}</span>

        </div>
      </div>

      <div class="benchmark-wrapper">

        <div class="icon-wrapper">
          <div class="icon-number">

            <span>
              <v-icon color="green darken-2">arrow_upward</v-icon>
            </span>
            <span>8%</span>

          </div>
        </div>
        
        <span class="font-weight-light overline">Benchmark</span>
      </div>

    </div>
  </div>


  </v-card>

</template>

<script>
export default {
  props: {
    title: String,
    cardVal: Number,
    cardSecVal: String,
    data: []
  },
  data: () => {
    return {

    }
  }

}
</script>

<style>
.title-wrapper{
  display: flex;
  height: 0%;
  width: 100%;
}

.title-content{
  margin-top: 13px;
  margin-bottom: auto;
  margin-right: auto;
  margin-left: auto;
  font-size: 17px;
}

.content-wrapper{
   /* border:1px solid red; */
   display:flex;
   height: 100%;
   width: 100%
}

.content{
   display:flex;
   margin:auto;
   /* border:1px solid red; */
}

.digits-wrapper{
   display:flex;
   margin-right: 15px
}

.digits{
   margin:auto;
   font-size:25px;
}

@media only screen and (max-width: 1368px) {
  .digits {
    margin:auto;
    font-size:23px;
  }
}
@media only screen and (max-width: 1265px) {
  .digits {
    margin:auto;
    font-size:25px;
  }
} 

.icon-wrapper{
   /* border:1px solid red; */
   display:flex;
}

.icon-number{
   margin:auto;
}

.benchmark-wrapper{
   /* border:1px solid blue; */
}
</style>