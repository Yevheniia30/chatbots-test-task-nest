// КОНТРОЛЛЕРЫ (РОУТЫ)

import {
  Controller,
  Get,
  Body,
  Post,
  HttpStatus,
  HttpCode,
  // Param,
  // Delete,
  // Put,
  // Redirect,
  // Header,
  // Req,
  // Res,
} from '@nestjs/common';
import { CreateImageDto } from './dto/create-image.dto';
import { ImagesService } from './images.service';
import { Image } from './schemas/image.schema';

// import { Request, Response } from 'express';
// import { UpdateImageDto } from './dto/update-image.dto';

// express
// app.use((req, res, next) => {
//   res.status(201).json('status:201');
// });

// routes
@Controller('images')
export class ImagesController {
  constructor(private imagesService: ImagesService) {}

  // ------------------- РОУТЫ ДЛЯ ТЗ!!!!------------------
  @Post('upload/dog/image')
  @HttpCode(HttpStatus.CREATED)
  createDog(@Body() createImageDto: CreateImageDto): Promise<Image> {
    return this.imagesService.create(createImageDto);
  }

  @Get('list/dog/images')
  @HttpCode(HttpStatus.OK)
  getAll(): Promise<Image[]> {
    return this.imagesService.getAll();
  }

  // ---------------ПРИМЕРЫ----------------
  // one by id
  // @Get(':id')
  // getOne(@Param('id') id: string) {
  //   return this.imagesService.getById(id);
  // }

  // create one (send body create dto)
  // @Post()
  // показать статус (статусы это енамы)
  // @HttpCode(HttpStatus.CREATED)
  // показать хедеры
  // @Header('Cache-Control', 'none')
  // create(@Body() createImageDto: CreateImageDto) {
  //   return this.imagesService.create(createImageDto);
  // }

  // delete one
  // @Delete(':id')
  // remove(@Param('id') id: string): string {
  //   return 'remove' + id;
  // }

  // update one (send body create dto)
  // @Put(':id')
  // update(
  //   @Body() updateImageDto: UpdateImageDto,
  //   @Param('id') id: string,
  // ): string {
  //   return `Title: ${updateImageDto.title} Url: ${updateImageDto.url} ${id}`;
  // }
}
