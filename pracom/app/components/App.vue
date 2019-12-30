<template>
    <Page>
        <ActionBar title="NativeScript-Vue Home">
          <StackLayout orientation="horizontal">
            <Label text="NativeScript Vue 연습중" color="#FFF" fontSize="24" verticalAlignment="center" />
          </StackLayout>
        </ActionBar>
        <DockLayout stretchLastChild="true" backgroundColor="#FFF">
          <Label text="left" dock="left" width="40" backgroundColor="#43b883"/>
          <Label text="top" dock="top" height="40" backgroundColor="#289062"/>
          <Label text="right" dock="right" width="40" backgroundColor="#43b883"/>
          <Label text="bottom" dock="bottom" height="40" backgroundColor="#289062"/>
          
          <GridLayout rows="auto, auto, auto, auto">
            <!-- StackLayout: 하위 요소를 세로 (기본값) 또는 가로로 쌓을 수있는 레이아웃 컨테이너 -->
            <StackLayout row="0">
              <Label color="#3c495e" alignSelf="center" fontWeight="bold" fontSize="30rem" text="안녕하세요 타시오 입니다." height="300" />
            </StackLayout>
            <StackLayout row="1" class="input-field">
                <TextField class="input" hint="Email" keyboardType="email" autocorrect="false" autocapitalizationType="none" returnKeyType="next"></TextField>
                <StackLayout class="hr-light"></StackLayout>
            </StackLayout>
            <StackLayout row="2" class="input-field">
                <TextField class="input" ref="password" hint="Password" secure="true"></TextField>
                <StackLayout class="hr-light"></StackLayout>
            </StackLayout>
            <StackLayout row="3">
              <Button text="로그인" @tap="submit" class="btn btn-primary m-t-20 loginBtn"></Button>
            </StackLayout>
          </GridLayout>
        </DockLayout>
    </Page>
</template>

<script >
  export default {
    data() {
      return {
        msg: 'Hello World!'
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

    .box1 {
      color: #FFF;
      font-size: 20px;
      text-align: center;
      line-height: 100px;
      font-weight: bold;
    }

    FlexboxLayout > Label.hello {
      color: #FFF;
    }

    .loginBtn {
        background: #E61773;
        border-radius: 3px;
        color: #FFF;
        font-size: 30rem;
        height: 200px;
        font-weight: bold;
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
</style>
