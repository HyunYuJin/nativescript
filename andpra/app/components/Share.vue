<template>
  <Page>
      <Label class="message" :text="message" />
  </Page>
</template>

<script>
export default {
    data() {
        return {
            message: '여기는 공유 알림 페이지 입니다.'
        }
    }

}
</script>

<style scoped>
.message {
    vertical-align: center;
    text-align: center;
    font-size: 20;
    color: #333333;
}
</style>