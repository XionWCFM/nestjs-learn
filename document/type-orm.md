# typeorm

typeORM은 node.js 에서 실행되고

TypeScript 로 작성된 객체 관계형 매퍼 라이브러리입니다.

이 typeORM은 MySQL, PostgreSQL, MariaDB, SQLite, MS SQL Server, Oracle, SAP Hana 등등

정말 많은 데이터베이스를 지원하네요..


# what is ORM

ORM은 Object Relational Mapping의 약자로

객체와 관계형 데이터베이스의 데이터를 자동으로 변형 - 연결하는 작업입니다.

ORM을 이용한 개발은 객체와 데이터베이스의 변형에 유연하게 사용할 수 있습니다.

# 왜 ORM 이 필요할까요?

객체지향 프로그래밍에서는 클래스를 사용하지만

관계형 데이터베이스에서는 테이블이라는 개념을 사용합니다.

따라서 클래스와 테이블 사이의 간극(불일치)가 존재하게됩니다.

ORM은 이 간극을 개발자가 알기쉽게 메꾸어주는 역할을 수행하게됩니다.

ORM을 사용한 것과 사용하지 않은 코드를 통해 비교해보겠습니다.


```tsx
const boards = Board.find({title:'Hello', status:'PUBLIC'})

db.query('SELECT * FROM boards WHERE title = "Hello" AND status = "PUBLIC"', 
(err,result) => {
    if(err) {
        throw new Error('error')
    }
    boards = result.rows
} )

```

쌩으로 쿼리를 짜는 일이 압도적으로 힘들어보이는 것을 알 수 있습니다.

이처럼 TypeORM은 모델을 기반으로 데이터베이스 테이블 체계를 자동으로 생성하기에

데이터베이스에서 개체를 쉽게 삽입, 업데이트, 삭제할 수 있습니다.

테이블 간의 매핑(일대일, 다대다, 일대다)를 만들며

간단한 CLI 명령을 제공합니다.


# TypeORM을 사용하기 위한 준비물(모듈)

@nestjs/typeorm

네스트에서 typeorm을 사용하기 위해 연동시켜주는 모듈입니다.

typeorm

typeorm입니다.

pg

postgres 모듈을 뜻합니다.


즉 명령어로 바꿔보면

```
npm install pg typeorm @nestjs/typeorm --save
```