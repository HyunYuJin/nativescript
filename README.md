# nativescript

<p>Page element는 Nativescript + Vue.js의 최상위 요소다.</p>
<p>ActionBar element는 동작하는 바를 나타낸다.</p>

<h4>NativeScript-Vue 에서 라우팅</h4>
<h6>Master 와 Detail 이라는 컴포넌트들이 있다고 가정</h6>
<ol>
    <li>
        $navigateTo
        <ul>
            <li>Master 에서 Detail 로 이동하기를 원할때 $navigateTo를 호출</li>
        </ul>
    </li>
    <li>
        $navigateBack
        <ul>
            <li>Detail 에 전역적으로 노출된 $navigateBack 함수를 호출하는 버튼을 추가</li>
        </ul>
    </li>
    <li>
        $showModal
        <ul>
            <li>Detail 페이지를 모달 페이지로 보여주고 싶을때 $navigateTo를 $showModal로 바꾸면 된다.</li>
            <li>모달을 닫으려면 $modal.close을 호출</li>
        </ul>
    </li>
</ol>