import { Body, Controller, Delete, Get, Param, Post, Query } from '@nestjs/common';
import { CreateCourseDto } from './create-course.dto';
import { CoursesService } from './courses.service'
import { ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger';

@Controller('courses')
export class CoursesController {

    constructor(private coursesService: CoursesService){}

    @Get()
    @ApiOkResponse({description: 'list of all courses'})
    async getCourses(){
        const courses = await this.coursesService.getCourses();
        return courses;
    }

    @Get(':courseId')
    @ApiOkResponse({description: 'list 1 course'})
    async getCourse(@Param('courseId') courseId){
        const courses = await this.coursesService.getCourse(courseId);
        return courses;
    }


    @Post()
    @ApiCreatedResponse({description: 'add 1 course'})
    async addCourses(@Body() createCourseDto: CreateCourseDto){
        const courses = await this.coursesService.addCourse(createCourseDto);
        return courses;
    }

    @Delete()
    @ApiOkResponse({description: 'delete 1 course'})
    async deleteCourses(@Query() query){
        const courses = await this.coursesService.deleteCourse(query.courseId);
        return courses;
    }
    
}
