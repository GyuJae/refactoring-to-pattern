# Replace State-Altering Conditionals with State

어떤 객체의 상태 전이를 제어하는 조건 로직이 복잡하다면,
각 상테에 해당하는 스테이트(state) 클래스를 하나씩 만들고 그들이
스스로 다른 상태로 전이하는 것을 책임지도록 하여 복잡한 조건 로직을 제거한다.

### 리팩토링 하기 전

1. 원래의 설계에서도 쉽게 이해할 수 있는지 확인있다면 굳이 리팩토링 안함. + 복잡해질 계획이 없다고 가정
2. Extract Method 리팩토링 기법으로 작업이 가능한지 확인

### 주의할점

1. State와 Strategy 구별이 필요.

- State: 여러 상태간의 전이가 쉬움 때
- Strategy: 런타임에 상황에 맞는 로직을 선택할 때

### 절차

1. state String 타입의 필드를 별도의 클래스의 만든다. (필드 이름도 permissionState로 바꾼다)
2. PermissionState 추상클래스로 만든다.
