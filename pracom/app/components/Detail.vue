<template>
  <Page>
    <ActionBar title="Detail2" />
    <StackLayout>
      <Label text="Detail Page2" />
      <!-- Mater 페이지로 이동하고 싶은 경우 -->
      <Button text="Back to Master" @tap="$navigateBack" />
    </StackLayout>
  </Page>
</template>

<script>
export default {

}
</script>

<style>

</style>