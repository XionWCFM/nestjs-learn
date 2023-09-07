# what is providers

프로바이더는 nest.js의 기본적인 개념 중 하나입니다.

대부분의 nest 클래스는 서비스, 레포지토리, 팩토리, 헬퍼 등의 프로바이더로 취급될 수 있습니다.

프로바이더의 주요 아이디어는 종속성으로 주입할 수 있다는 것이며

객체는 서로 다양한 관계를 만들 수 있고 객체의 인스턴스를 연결하는 기능은

nest 런타임 시스템에게 위임할 수 있습니다.

# 프로바이더 등록하기

프로바이더를 사용하기 위해서는 프로바이더를 nest에 등록해야합니다.

등록하는 작업은 module 파일에서 수행할 수 있으며

module 파일에 providers 항목 안에 해당 모듈에서 사용하고자 하는 프로바이더를 넣어주면 됩니다.

```tsx

@Module({
    controllers:[BoardsController],
    providers:[BoardsService]
})

```

이렇게용
