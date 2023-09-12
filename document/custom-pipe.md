# 커스텀 파이프 구현하기

커스텀 파이프를 구현하기 위해서는 일부 수행해줘야할 것들이 있습니다.

1. PipeTransform 이라는 인터페이스를 구현해야합니다.

이것은 모든 파이프에서 구현되어야하는 인터페이스로서

이것과 함께 모든 파이프는 transform() 메서드가 필요합니다.

이 메서드는 nestjs가 인자를 처리하기 위해서 사용됩니다.

```tsx
import { ArgumentMetadata, PipeTransform } from '@nestjs/common';

export class BoardStatusValidationPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    console.log(value);
    console.log(metadata);
    return value;
  }
}
```

이런 형태로 타입스크립트의 implements 키워드를 이용합니다.

# transform 메서드

이 메서드는 두개의 파라미터를 필요로합니다.

첫번째 파라미터에는 처리가 된 인자의 값을

두번째 파라미터는 인자에 대한 메타 데이터를 포함한 객체가 들어갑니다.

transform() 메서드에서 리턴된 값은 Route 핸들러로 전해지게 됩니다.


예제를 통해 이해를 해보도록 하겠습니다.

src/boards/pipes/board-status-validation.pipe.ts
```tsx
import { BadRequestException, PipeTransform } from '@nestjs/common';
import { BoardStatus } from '../boards.model';

export class BoardStatusValidationPipe implements PipeTransform {
  readonly StatusOptions = [BoardStatus.PRIVATE, BoardStatus.PUBLIC];
  transform(value: any) {
    if (typeof value !== 'string') {
      return value;
    }
    value = value.toUpperCase();
    if (!this.isStatusValid(value)) {
      throw new BadRequestException(`${value} isn't in the status options `);
    }
    return value;
  }

  private isStatusValid(status: any) {
    const index = this.StatusOptions.indexOf(status);
    return index !== -1;
  }
}
```

StatusOptions를 통해 ENUM인 값이 아니면 에러를 던지도록 만들었습니다.

다만 Enum은 자바스크립트 오브젝트로 컴파일되기 때문에

굳이 배열형태로 쓰지 않아도 object 순회 메서드를 통해 순회할 수 있습니다.

이해를 쉽게 하기 위해 만들어진 예제라는 점 이해부탁드립니다.

