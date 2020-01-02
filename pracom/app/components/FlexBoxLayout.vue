<template>
<Page>
    <ActionBar title="FlexboxLayout" />
    <FlexboxLayout backgroundColor="#DDD" class="flexstyle" color='#FFF'>
        <Label text="first" width="100" backgroundColor="#43B883" />
        <Label text="second" width="100" backgroundColor="#1C6B48" />
        <Label text="third" width="100" backgroundColor="#289062" />
        <FlexboxLayout width="550" flexDirection="column">
            <Label text="first" height="70" backgroundColor="#43b883" />
            <Label text="second" height="70" backgroundColor="#1c6b48" />
            <Label text="third" height="70" backgroundColor="#289062" />

            <Button text="Back to Master" width="300" height="50" @tap="$navigateBack" />

            <FlexboxLayout alignItems="flex-start" flexWrap="wrap">
                <Label text="first" width="30%" order="2" height="70" backgroundColor="#43b883" />
                <Label text="second" width="30%" order="3" height="70" backgroundColor="#1c6b48" />
                <Label text="third" width="30%" order="1" height="70" backgroundColor="#289062" />
                <Label text="fourth" width="30%" order="5" height="70" backgroundColor="#289062" />
                <Label text="fifth" width="30%" order="4" height="70" backgroundColor="#289062" />
            </FlexboxLayout>

            <FlexboxLayout flexDirection="column-reverse" justifyContent="space-around" backgroundColor="#3c495e">
                <Label text="first" height="70" backgroundColor="#43B883" />
                <Label text="second" width="100" height="70" alignSelf="center" backgroundColor="#1C6B48" />
                <Label text="third flex-end" alignSelf="flex-end" width="100" height="70" backgroundColor="#289062" />
                <Label text="fourth" height="70" backgroundColor="#289062" />
            </FlexboxLayout>
        </FlexboxLayout>
    </FlexboxLayout>
</Page>
</template>

<script>
export default {

}
</script>

<style>
.flexstyle {
    font-weight: bold;
    font-size: 20rem;
    text-align: center;
}
</style>
