<template>
  <Page>
    <ActionBar title="GridLayout" />
      <GridLayout columns="40, auto, *" rows="40, auto, *" backgroundColor="#3c495e">
        <Label text="0, 0" row="0" col="0" backgroundColor="#43b883" />
        <Label text="0, 1" row="0" col="1" colSpan="2" backgroundColor="#1C6B48" />
        <Label text="1, 0" row="1" col="0" rowSpan="2" backgroundColor="#289062" />
        <Label text="1, 1" row="1" col="1" backgroundColor="#43b883" />
        <Label text="1, 2" row="1" col="2" backgroundColor="#289062" />
        <Label text="2, 1" row="2" col="1" backgroundColor="#1c6b48" />
        <Label text="2, 2" row="2" col="2" backgroundColor="#43b883" />
        <Button text="Back to Master" row="3" col="3" width="300" height="50" @tap="$navigateBack" />

        <GridLayout columns="*, *" rows="*, *" backgroundColor="#3c495e" color="#FFF">
          <Label text="0, 0" row="0" col="0" backgroundColor="red" />
          <Label text="0, 1" row="0" col="1" backgroundColor="orange" />
          <Label text="1, 0" row="1" col="0" backgroundColor="blue" /> 
          <Label text="1, 1" row="1" col="1" backgroundColor="purple" />
        </GridLayout>
      </GridLayout>
  </Page>
</template>

<script>
export default {

}
</script>

<style scoped>
</style>