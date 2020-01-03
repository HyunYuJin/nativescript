<template>
    <Page>
        <ActionBar title="StackLayout" />
        <StackLayout>
            <Label text="first" height="70" backgroundColor="#43B883" />
            <Label text="second" height="70" backgroundColor="#289062" />
            <Label text="third" height="70" backgroundColor="#1C6B48" />
            <Button text="Back To Master" width="300" height="50" @tap="$navigateBack" />

            <StackLayout height="200" orientation="horizontal" backgroundColor="#DDD">
                <Label text="first" width="70" backgroundColor="skyblue" />
                <Label text="second" width="70" backgroundColor="pink" />
                <Label text="third" width="70" backgroundColor="purple" />
            </StackLayout>

            <StackLayout>
                <Label text="left" horizontalAlignment="left" width="33%" height="70" backgroundColor="#43B883" />
                <Label text="center" horizontalAlignment="center" width="33%" height="70" backgroundColor="#289062" />
                <Label text="right" horizontalAlignment="right" width="33%" height="70" backgroundColor="#1C6B48" />
                <Label text="stretch" horizontalAlignment="stretch" height="70" backgroundColor="#43b883"/>
            </StackLayout>
        </StackLayout>
    </Page>
</template>

<script>
export default {

}
</script>

<style>

</style>