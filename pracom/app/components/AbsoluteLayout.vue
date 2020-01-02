<template>
  <Page>
    <ActionBar title="absoluteLayout" />
      <AbsoluteLayout backgroundColor="#3c495e">
        <Label text="10, 10" left="10" top="10" width="100" height="100" backgroundColor="#43b883"/>
        <Label text="120, 10" left="120" top="10" width="100" height="100" backgroundColor="#43b883"/>
        <Label text="10, 120" left="10" top="120" width="100" height="100" backgroundColor="#43b883"/>
        <Label text="120, 120" left="120" top="120" width="100" height="100" backgroundColor="#43b883"/>

        <Label text="250, 160" left="250" top="100" width="100" height="100" backgroundColor="#289062"/>
        <Label text="280, 200" left="280" top="140" width="100" height="100" backgroundColor="#43b883"/>

        <!-- Mater 페이지로 이동하고 싶은 경우 -->
        <Button text="Back to Master" top="300" width="300" height="50" @tap="$navigateBack" />
      </AbsoluteLayout>
  </Page>
</template>

<script>
export default {

}
</script>

<style>

</style>