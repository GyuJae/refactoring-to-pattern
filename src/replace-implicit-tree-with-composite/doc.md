# Replace Implicit Tree With Composite

실질적으로 트리 구조인 데이터를 String과 같은 기본 타입으로 표현하고 있다면, 그 기본 타입의 표현을 컴포짓 구조로 바꾼다.

### 장점

- 노드를 추가/삭제/포매팅하는 등의 반복적인 코드를 캡슐화한다.
- 빈번하게 사용하는 유사한 로직을 다루기 위한 일반화된 방법을 제공한다.
- 클라이언트가 데이터를 생성하는 방법이 단순해진다.

### 단점

- 묵시적인 트리로도 충분한 경우에는 괜히 설계만 복잡하게 만드는 것이다.
