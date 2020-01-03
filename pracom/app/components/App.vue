<template>
  <Page>
    <ActionBar title="Master" />
    <FlexboxLayout flexDirection="column" backgroundColor="#FFF">
      <Label text="Elements Layouts" @tap="goToDetailPage" class="helloworld" />
      <Button text="DockLayout" @tap="goToDock" class="nextBtn" />
      <Button text="AbsoluteLayout" @tap="goToAbsolute" class="nextBtn" />
      <Button text="FlexBoxLayout" @tap="goToFlex" class="nextBtn" />
      <Button text="GridLayout" @tap="goToGrid" class="nextBtn" />
      <Button text="StackLayout" @tap="goToStack" class="nextBtn" />
    </FlexboxLayout>
  </Page>
</template>

<script >
import Detail from './Detail.vue';
import DockLayout from './DockLayout.vue';
import AbsoluteLayout from './AbsoluteLayout.vue';
import FlexBoxLayout from './FlexBoxLayout.vue';
import GridLayout from './GridLayout.vue';
import StackLayout from './StackLayout.vue';

export default {
  methods: {
    goToDetailPage() {
      this.$navigateTo(Detail);
    },

    goToDock() {
      this.$navigateTo(DockLayout);
    },

    goToAbsolute() {
      this.$navigateTo(AbsoluteLayout);
    },

    goToFlex() {
      this.$navigateTo(FlexBoxLayout);
    },

    goToGrid() {
      this.$navigateTo(GridLayout);
    },

    goToStack() {
      this.$navigateTo(StackLayout);
    }

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
      height: 100px;
      font-size: 30rem;
      font-weight: bold;
      background: #333333;
      text-align: center;
      color: #FFF;
    }
</style>
