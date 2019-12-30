<template>
  <Page>
    <ActionBar title="Master" />
    <StackLayout>
      <Button text="To Details directly" @tap="goToDetailPage" class="nextBtn" />
    </StackLayout>
  </Page>
</template>

<script >
import Detail from './Detail.vue';

export default {
  methods: {
    goToDetailPage() {
      this.$navigateTo(Detail);
    }
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
</style>
