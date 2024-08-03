import { Module } from '@nestjs/common';
import { OnlineCourseModule } from './online-course/online-course.module';

@Module({
  imports: [OnlineCourseModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
