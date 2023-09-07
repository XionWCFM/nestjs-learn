# body

body 데코레이터는 request의 바디 부분을 제공합니다.

```tsx

  @Post()
  createBoards(@Body() createBoardDto: CreateBoardDto) {
    return this.boardsService.createBoard(createBoardDto);
  }

```

그렇다면 파라미터의 값은 어떻게 가져올 수 있을까요?

예를 들어 쿼리스트링을 사용한 값이라면?

# param

```tsx
  @Get('/:id')
  getBoardById(@Param('id') id: string) {
    return this.boardsService.getBoardById(id);
  }

```

param 데코레이터를 이용하여 가져올 수 있습니다.

param 데코레이터에는 인수를 전달하지 않으면

string[] 을 반환하며 만약 인수를 전달하였다면

해당 인수에 해당하는 string 만을 반환합니다.

