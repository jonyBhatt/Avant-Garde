import { ZodEnum } from "zod";

export interface Step {
  id: string;
  stepNumber: number;
  name: string;
}

export type CreateUserProps = {
  clerkId: string;
  email: string;
  firstName: string;
  lastName: string;
  photo: string;
  username: string;
};

export type UpdateUserProps = {
  firstName: string;
  lastName: string;
  photo: string;
};

export type CommentProps = {
  content: string;
  postId: string;
  userId: string;
};

export type JobSchema = {
  title: string;
  type: string;
  location: string;
  vacancies: string;
  experience: string;
  description: string;
  position: string;
  salary: string;
};
