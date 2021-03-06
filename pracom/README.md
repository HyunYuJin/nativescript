# NativeScript-Vue Application

> A native application built with NativeScript-Vue

## Usage

``` bash
# Install dependencies
npm install

# Preview on device
tns preview

# Build, watch for changes and run the application
tns run

# Build, watch for changes and debug the application
tns debug <platform>

# Build for production
tns build <platform> --env.production

```


**NativeScript Vue**

<h3>Elements Layouts</h3>
<p>도킹 매커니즘을 제공하는 레이아웃</p>
<p>자식 요소들의 레이아웃을 left, right, top, bottom, center에 도킹될 수 있다.</p>
<p>자식 요소를 center에 정의하고 싶으면 마지막 자식으로 삽입하고 DockLayout의 stretchLastChild가 true여야 한다.</p>

<ul>
    <li>
        StackLayout
        <ul>
            <li>StackLayout 컨테이너는 자식 요소들을 세로(기본값)나 가로로 쌓는다.</li>
            <li>가로로 쌓기: StackLayout element의 속성으로 <b>orientaion="horizontal"</b>을 넣어주면 된다.</li>
        </ul>
    </li>
</ul>

