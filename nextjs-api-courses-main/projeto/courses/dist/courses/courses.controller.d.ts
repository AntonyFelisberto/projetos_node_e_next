import { CreateCourseDto } from './create-course.dto';
import { CoursesService } from './courses.service';
export declare class CoursesController {
    private coursesService;
    constructor(coursesService: CoursesService);
    getCourses(): Promise<any>;
    getCourse(courseId: any): Promise<any>;
    addCourses(createCourseDto: CreateCourseDto): Promise<any>;
    deleteCourses(query: any): Promise<any>;
}
