import { Controller, Get, Query, Header } from '@nestjs/common';
import axios from 'axios';

@Controller('movie')
export class MovieController {
  @Get()
  @Header('Access-Control-Allow-Origin', 'http://localhost:3001')
  async getMovie(@Query('title') title: string, @Query('year') year: string) {
    const apiKey = '8384263e';

    const url = `http://www.omdbapi.com/?t=${title}&y=${year}&apikey=${apiKey}`;

    const response = await axios.get(url);

    return response.data;
  }
}
