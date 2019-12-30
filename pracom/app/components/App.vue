<template>
  <Page>
    <ActionBar title="Master" />
    <StackLayout>
      <Button text="To Details directly" @tap="goToDetailPage" class="nextBtn" />
      <Label text="hello world" @tap="goToDetailPage2" class="helloworld" />
      <AbsoluteLayout backgroundColor="#3c495e">
        <Label text="10,10" left="10" top="10" width="100" height="100" backgroundColor="#43b883"/>
        <Label text="120,10" left="120" top="10" width="100" height="100" backgroundColor="#43b883"/>
        <Label text="10,120" left="10" top="120" width="100" height="100" backgroundColor="#43b883"/>
        <Label text="120,120" left="120" top="120" width="100" height="100" backgroundColor="#43b883"/>
      </AbsoluteLayout>
    </StackLayout>
  </Page>
</template>

<script >
import Detail from './Detail.vue';
import Detail2 from './Detail2.vue';

export default {
  methods: {
    goToDetailPage() {
      this.$navigateTo(Detail);
    },

    goToDetailPage2() {
      this.$navigateTo(Detail2);
    },

    // Detail Page를 Modal Page로 보여주고 싶은 경우
    // showDetailPageModally() {
    //   this.$showModal(Detail);
    // }
  }
}
</script>

<style scoped>
    ActionBar {
        background-color: #53ba82;
        color: #ffffff;
    }

    .message {
        vertical-align: center;
        text-align: center;
        font-size: 20;
        color: #333333;
    }

    .nextBtn {
        background: #E61773;
        border-radius: 3px;
        color: #FFF;
        font-size: 30rem;
        height: 200px;
        font-weight: bold;
    }

    .helloworld {
      background: #333333;
      text-align: center;
      color: #FFF;
    }
</style>
