<template>
    <Page actionBarHidden="true">
        <FlexboxLayout class="page">
            <StackLayout class="form">
                <!-- <Image class="logo" src="~/images/logo.png"></Image> -->
                <v-template>
                    <Logo class="logo" :logo="logo"></Logo>
                </v-template>
                <Label class="header" text="안녕하세요 타시오 입니다"></Label>

                <!-- GridLayout: 자식 요소를 테이블과 같은 방식으로 정렬 할 수있는 레이아웃 컨테이너 -->
                <GridLayout rows="auto, auto, auto">
                    <!-- StackLayout: 하위 요소를 세로 (기본값) 또는 가로로 쌓을 수있는 레이아웃 컨테이너 -->
                    <StackLayout row="0" class="input-field">
                        <TextField class="input" hint="Email" :isEnabled="!processing"
                            keyboardType="email" autocorrect="false"
                            autocapitalizationType="none" v-model="user.email"
                            returnKeyType="next" @returnPress="focusPassword"></TextField>
                        <StackLayout class="hr-light"></StackLayout>
                    </StackLayout>

                    <StackLayout row="1" class="input-field">
                        <TextField class="input" ref="password" :isEnabled="!processing"
                            hint="Password" secure="true" v-model="user.password"
                            :returnKeyType="isLoggingIn ? 'done' : 'next'"
                            @returnPress="focusConfirmPassword"></TextField>
                        <StackLayout class="hr-light"></StackLayout>
                    </StackLayout>

                    <StackLayout row="2" v-show="!isLoggingIn" class="input-field">
                        <TextField class="input" ref="confirmPassword" :isEnabled="!processing"
                            hint="Confirm password" secure="true" v-model="user.confirmPassword"
                            returnKeyType="done"></TextField>
                        <StackLayout class="hr-light"></StackLayout>
                    </StackLayout>

                    <!-- ActivityIndicator: 백그라운드에서 실행중인 오퍼레이션을 사용자에게 알리는 진행 표시기를 표시하는 UI 구성 요소 -->
                    <ActivityIndicator rowSpan="3" :busy="processing"></ActivityIndicator>
                </GridLayout>

                <Button :text="isLoggingIn ? '로그인' : 'Sign Up'" :isEnabled="!processing"
                    @tap="submit" class="btn btn-primary m-t-20 loginBtn"></Button>
                <Label *v-show="isLoggingIn" text="Forgot your password?"
                    class="login-label" @tap="forgotPassword()"></Label>
            </StackLayout>

            <Label class="login-label sign-up-label" @tap="toggleForm">
                <FormattedString>
                    <Span :text="isLoggingIn ? 'Don’t have an account? ' : 'Back to Login'"></Span>
                    <Span :text="isLoggingIn ? 'Sign up' : ''" class="bold"></Span>
                </FormattedString>
            </Label>
        </FlexboxLayout>
    </Page>
</template>

<script>
    import Home from "./Home";
    import Logo from "./logo.vue";

    export default {
        components: {
            Logo
        },

        data() {
            return {
                isLoggingIn: true,
                processing: false,
                user: {
                    email: "vue@nativescript.org",
                    password: "vue",
                    confirmPassword: "vue"
                }
            };
        },
        methods: {
            toggleForm() {
                this.isLoggingIn = !this.isLoggingIn;
            },

            submit() {
                if (!this.user.email || !this.user.password) {
                    this.alert(
                        "Please provide both an email address and password."
                    );
                    return;
                }

                this.processing = true;
                if (this.isLoggingIn) {
                    this.login();
                } else {
                    this.register();
                }
            },

            login() {
                this.$backendService
                    .login(this.user)
                    .then(() => {
                        this.processing = false;
                        this.$navigateTo(Home, { clearHistory: true });
                    })
                    .catch(() => {
                        this.processing = false;
                        this.alert(
                            "Unfortunately we could not find your account."
                        );
                    });
            },

            register() {
                if (this.user.password != this.user.confirmPassword) {
                    this.alert("Your passwords do not match.");
                    this.processing = false;
                    return;
                }

                this.$backendService
                    .register(this.user)
                    .then(() => {
                        this.processing = false;
                        this.alert(
                            "Your account was successfully created.");
                        this.isLoggingIn = true;
                    })
                    .catch(() => {
                        this.processing = false;
                        this.alert(
                            "Unfortunately we were unable to create your account."
                        );
                    });
            },

            forgotPassword() {
                prompt({
                    title: "Forgot Password",
                    message: "Enter the email address you used to register for APP NAME to reset your password.",
                    inputType: "email",
                    defaultText: "",
                    okButtonText: "Ok",
                    cancelButtonText: "Cancel"
                }).then(data => {
                    if (data.result) {
                        this.$backendService
                            .resetPassword(data.text.trim())
                            .then(() => {
                                this.alert(
                                    "Your password was successfully reset. Please check your email for instructions on choosing a new password."
                                );
                            })
                            .catch(() => {
                                this.alert(
                                    "Unfortunately, an error occurred resetting your password."
                                );
                            });
                    }
                });
            },

            focusPassword() {
                this.$refs.password.nativeView.focus();
            },
            focusConfirmPassword() {
                if (!this.isLoggingIn) {
                    this.$refs.confirmPassword.nativeView.focus();
                }
            },

            alert(message) {
                return alert({
                    title: "APP NAME",
                    okButtonText: "OK",
                    message: message
                });
            }
        }
    };
</script>

<style scoped>
    .page {
        align-items: center;
        flex-direction: column;
    }

    .form {
        margin-left: 30;
        margin-right: 30;
        flex-grow: 2;
        vertical-align: middle;
    }

    .logo {
        margin-bottom: 12;
        height: 90;
        font-weight: bold;
    }

    .header {
        horizontal-align: center;
        font-size: 25;
        font-weight: 600;
        margin-bottom: 70;
        text-align: center;
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        letter-spacing: -1px;
        color: #555555;
    }

    .input-field {
        margin-bottom: 25;
    }

    .input {
        font-size: 18;
        placeholder-color: #A8A8A8;
    }

    .input:disabled {
        background-color: white;
        opacity: 0.5;
    }

    .btn-primary {
        margin: 30 5 15 5;
    }

    .login-label {
        horizontal-align: center;
        color: #A8A8A8;
        font-size: 16;
    }

    .sign-up-label {
        margin-bottom: 20;
    }

    .bold {
        color: #000000;
    }

    .loginBtn {
        background: #E61773;
        border-radius: 3px;
        color: #FFF;
    }
</style>
