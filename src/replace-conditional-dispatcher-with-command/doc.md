# Replace Conditional Dispatcher with Command

요청에 대한 디스패처(dispatcher)가 조건로직으로 구현되어 있다면.
각 액션에 대한 커맨드(command) 객체를 만들어 컬렉션에 저장해 두고, 조건 로직은 컬렉션에서 원하는 command 객체를 찾아 실행하는 코드로 대체한다.

### 장점

- 다양한 액션을 단일한 방식으로 실행하는 단순한 구조를 제공한다.
- 요청을 처리하는 로직의 구성을 런타임에 변경할 수 있다.
- 간단한 코드로 구현할 수 있다

### 단점

- 조건적 디스패처로도 충분한 상황에서는 괜히 설계만 복잡하게 만드는 것이다.
