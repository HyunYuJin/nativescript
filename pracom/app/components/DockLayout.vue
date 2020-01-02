<template>
  <Page>
    <ActionBar title="DockLayout" />
    <DockLayout stretchLastChild="true" backgroundColor="#555">
      <Label text="left" dock="left" width="40" backgroundColor="#FFF" />
      <Label text="top" dock="top" height="40" backgroundColor="#FFF" />
      <Label text="right" dock="right" width="40" backgroundColor="#FFF" />
      <Label text="Back To Master" dock="bottom" height="40" backgroundColor="#43b883" color="#FFF" @tap="$navigateBack" />
      <Label text="center" dock="center" background="#AAA"></Label>
    </DockLayout>
  </Page>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.helloworld {
  background: #333333;
  text-align: center;
  color: #FFF;
}
</style>