# 에러 던지기

예외 인스턴스를 생성해서 이용하면 nestjs에서 에러를 던질 수 있습니다.

# 이렇게요

```tsx

getBoardById(id:string) {
    const found = this.boards.find(board => board.id === id)
    if(!found) {
        throw new NotFoundException()
    }
    return found
}

```

이렇게 에러를 던지게되면 응답반환값은

```tsx
{
    statusCode:404,
    error:"Not Found"
}
```

와 같은 형태로 출력됩니다.


# new NotFoundException() 이 뭐야

```tsx
import {  NotFoundException } from '@nestjs/common';
     throw new NotFoundException(`can't found id ${id}`);

```

nestjs에서 기본적으로 제공하는 클래스입니다.

내부적으로는 

```tsx

export declare class NotFoundException extends HttpException {
        constructor(objectOrError?: string | object | any, descriptionOrOptions?: string | HttpExceptionOptions);
}
```

HttpException을 상속받고 있네요

