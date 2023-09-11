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

