/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { Controller, Get } from '@nestjs/common';
import axios from 'axios';

@Controller('api')
export class ApiController {
  @Get()
  async fetchData() {
    try {
      // List of open APIs
      const apiUrls = [
        'https://jsonplaceholder.typicode.com/todos/1', // Sample To-Do Item
        'https://jsonplaceholder.typicode.com/users/1', // Sample User Info
        'https://jsonplaceholder.typicode.com/posts/1', // Sample Blog Post
      ];

      // Fetch data from all APIs in parallel
      const responses = await Promise.all(apiUrls.map((url) => axios.get(url)));

      // Return combined data
      return responses.map((res, index) => ({
        api: apiUrls[index],
        data: res.data,
      }));
    } catch (error) {
      return { error: 'Failed to fetch data', details: error.message };
    }
  }
}
