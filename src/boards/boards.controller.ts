import { CreateBoardDto } from './dto/create-board.dto';
import { BoardsService } from './boards.service';
import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';

@Controller('boards')
export class BoardsController {
  constructor(private boardsService: BoardsService) {}

  @Post()
  @UsePipes(ValidationPipe)
  CreateBoardDto(@Body() createBoardDto: CreateBoardDto) {
    return this.boardsService.createBoard(createBoardDto);
  }

  @Get('/:id')
  getBoardById(@Param('id') id: number) {
    return this.boardsService.getBoardById(id);
  }
}
