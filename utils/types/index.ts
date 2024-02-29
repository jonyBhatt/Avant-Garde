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
