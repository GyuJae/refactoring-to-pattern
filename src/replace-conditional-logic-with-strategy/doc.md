# Replace Conditional Logic with Strategy

메서드 내의 조건문을 통해 여러개의 서로 다른 로직(계산법) 가운데 어떤 것응ㄹ 실행할지 선택하고 있다면,
각 계산법에 대응하는 전략(strategy) 클래스를 만들고
해당 strategy instance에 계산을 위임하도록 메서드를 수정한다.

### 절차

1. strategy로 쓸 클래스를 하나 만든다. (클래스 이름 끝에 -Strategy를 붙임)
2. Context 클래스에 해당 메소드를 사용하는것으로 변경
3. 컴파일 후 테스트
4. 추상클래스로 만드는게 좋다

// TODO 코드작성
