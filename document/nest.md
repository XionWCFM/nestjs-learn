# di

```tsx
@Controller('boards')
export class BoardsController {

    boardService: BoardsService;

    constructor(boardService: BoardsService) {
        this.boardsService = boardsService
    }
}

```

외부에서 Service 인스턴스를 주입받아 사용하는 형태를 통하여

dependency injection을 구현합니다.

# 접근 제한자를 이용하는 경우

```tsx
@Controller('boards')
export class BoardsController {

    constructor(private boardService: BoardsService) {}
}

```

접근 제한자를 사용하여 생성자 파라미터에 선언을 하게되면

접근제한자가 사용된 생성자 파라미터는 암묵적으로 클래스 프로퍼티로 선언됩니다.

따라서 필드를 정의하거나 this 할당문을 사용하지 않더라도 바로 사용할 수 있습니다.

