import { BoardsService } from './boards.service';
import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller('boards')
export class BoardsController {
  constructor(private boardsService: BoardsService) {}

  @Get()
  getAllBoards() {
    return this.boardsService.getAllBoards();
  }

  @Post()
  createBoards(
    @Body('title') title: string,
    @Body('description') description: string,
  ) {
    return this.boardsService.createBoard(title, description);
  }
}
