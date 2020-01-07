<template>
<Page>
    <ActionBar title="Master" android.iconVisibility="always">
        <ActionItem @tap="onTapShare" ios.systemIcon="9" ios.position="left" android.systemIcon="ic_menu_share" android.position="actionBar" />
        <ActionItem @tap="onTapDelete" ios.systemIcon="16" ios.position="right" text="delete" android.position="popup" />
        <ActionItem @tap="onTapEdit" v-show="!isEditing" ios.systemIcon="2" ios.position="right" android.systemIcon="ic_menu_edit" />
        <ActionItem @tap="onTapSave" v-show="isEditing" ios.systemIcon="3" ios.position="right" android.systemIcon="ic_menu_save" />
        <ActionItem @tap="onTapCancel" v-show="isEditing" ios.systemIcon="1" android.systemIcon="ic_menu_close_clear_cancel" />
        <NavigationButton text="Go back" android.systemIcon="ic_menu_back" @tap="goBack" />
    </ActionBar>
    <FlexboxLayout flexDirection="column" backgroundColor="#FFF">
        <Label class="message" :text="msg" />
        <Button text="WrapLayout" @tap="goToWrap" class="btn" />
    </FlexboxLayout>
</Page>
</template>

<script>
import WrapLayout from './WrapLayout.vue';
import ActionItem from './ActionItem.vue';
import Share from './Share.vue';

export default {
    data() {
        return {
            msg: 'Hello World!'
        }
    },

    methods: {
        goToWrap() {
            this.$navigateTo(WrapLayout);
        },

        onTapShare() {
            this.$showModal(Share);
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

.btn {
    background: #E61773;
    border-radius: 3px;
    color: #FFF;
    font-size: 30rem;
    height: 200px;
    font-weight: bold;
}
</style>
