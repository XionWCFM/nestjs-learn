import { BoardsService } from './boards.service';
import { Controller, Get, Param } from '@nestjs/common';

@Controller('boards')
export class BoardsController {
  constructor(private boardsService: BoardsService) {}
  @Get('/:id')
  getBoardById(@Param('id') id: number) {
    return this.boardsService.getBoardById(id);
  }
}
