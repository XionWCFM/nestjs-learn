# pipe

파이프는 @Injectable () 데코레이터로 주석이 달린 클래스입니다.

파이프는 data transformation과 data validation을 위해 주로 사용됩니다.

파이프는 컨트롤러 경로 처리기에 의해 처리되는 인수에 대하여 작동합니다.

nest는 메서드가 호출되기 직전에 파이프를 삽입하고

파이프는 메서드로 향하는 인수를 수신하고 이에대해 작동합니다.

# 작동 방식

1. client가 Post Request를 던짐

example

```tsx
"title":"Hello"
```

2. 삽입된 파이프는 인수에 대하여 transformation이나 validation을 수행함

3. 통과하면 다음 동작을 수행 실패하면 에러 던지기

# data transformation 이란?

입력 데이터를 원하는 형식으로 변환하는 것을 말합니다.

예컨대 문자열을 정수로 변환한다든지 정수를 문자열로 변환한다든지의 작업입니다.

# data validation 이란?

말그대로 데이터를 검증하는 과정을 뜻합니다. 유효한 경우 데이터를 전달하면 되고

그렇지 않은 경우에는 예외, 에러를 발생시킵니다.

# 파이프는

라우트 핸들러가 처리하는 인수에 대해서 작동합니다.

# 파이프 사용법

파이프를 사용하는 것은 Binding Pipes라고도 표현합니다.

파이프 사용법은 크게 세가지로 나눌 수 있습니다.

1. Handler-level Pipes

2. Parameter-level Pipes

3. Global-level Pipes

## Handler-level Pipes

핸들러 레벨에서 @UsePipes() 데코레이터를 이용하면 되빈다.

이 파이프는 모든 파라미터에게 적용됩니다.

```tsx
@Post()
@UsePipes(pipe)
createBoard(
    @Body('title') title,
    @Body('description') description
)

```

이 예제에서는 createBoard라는 핸들러 하나에만 파이프가 적용되기 때문에

핸들러레벨 파이프에 해당합니다.

## Parameter-level Pipes

파라미터 레벨의 파이프는 특정 파라미터에만 적용되는 파이프입니다.

아래 예제를 보며 이해해보겠습니다.

```tsx

@Post()
createBoard(
    @Body('title' , ParameterPipe) title,
    @Body('description')
)

```

위 예제에서 파이프는 title 인수에만 적용됩니다.

## Global Pipes

글로벌 파이프는 애플리케이션 레벨의 파이프입니다.

이것은 클라이언트에서 들어오는 모든 요청에 적용되는 파이프로서

가장 상단 영역 main.ts에 넣어주면 됩니다.

```tsx
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(GlobalPipes);
  await app.listen(3000);
}
bootstrap();
```

# Built-in Pipes

Nestjs에는 기본적으로 사용할 수 있게 만들어둔 6가지 파이프가 있습니다.

1. Validation Pipe
2. ParseIntPipe
3. ParseBoolPipe
4. ParseArrayPipe
5. ParseUUIDPipe
6. DefaultValuePipe

이름만으로도 각 파이프가 어떤 일을 수행하는 지 어느정도 예상할 수 있습니다.

```tsx
@Get(':id')
findOne(@Param('id', ParseIntPipe) id: number) {
    return ;
}
```

# 파이프를 이용한 유효성 검사

파이프를 이용해서 유효성 검사를 수행할 수 있습니다.

이를 위한 많은 라이브러리가 존재하는데요

대표적으로는 class-validator, class-transformer 등이 있습니다.

```
npm i class-validator class-transformer --save
```

각자 사용하는 패키지매니저를 이용해 설치해주면 됩니다.

```tsx
import { IsNotEmpty } from 'class-validator';

export class CreateBoardDto {
  @IsNotEmpty()
  title: string;
  @IsNotEmpty()
  description: string;
}
```

```tsx
  @Post()
  @UsePipes(ValidationPipe)
  createBoards(@Body() createBoardDto: CreateBoardDto) {
    return this.boardsService.createBoard(createBoardDto);
  }
```

중요한것은 usePipes와 같은 데코레이터를 이용하여

Pipe를 사용한다는 것을 나타내는 것입니다.
