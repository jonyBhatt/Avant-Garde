// import { use } from "react";
// ("use server");
// import prisma from "@/lib/prisma";
// import { handleError } from "@/lib/utils";
// import { CreateUserProps, UpdateUserProps } from "@/utils/types";

// export async function createUser(user: CreateUserProps) {
//   try {
//     const newUser = await prisma.user.create({
//       data: {
//         clerkId: user.clerkId,
//         firstName: user.firstName,
//         lastName: user.lastName,
//         email: user.email,
//         photo: user.photo,
//         username: user.username,
//       },
//     });
//     console.log(newUser);

//     return {
//       newUser,
//     };
//   } catch (error) {
//     return {
//       error: handleError(error),
//     };
//   }
// }

// /**
//  * * Read user by id
//  */

// export async function getUserById(userId: string) {
//   try {
//     const user = await prisma.user.findUnique({
//       where: {
//         clerkId: userId,
//       },
//     });
//     return {
//       user,
//     };
//   } catch (error) {
//     return {
//       error: handleError(error),
//     };
//   }
// }

// /**
//  * * Update user
//  */

// export async function updateUser(clerkId: string, user: UpdateUserProps) {
//   try {
//     await prisma.user.update({
//       where: {
//         clerkId,
//       },
//       data: user,
//     });
//   } catch (error) {
//     return {
//       error: handleError(error),
//     };
//   }
// }

// /**
//  * * Delete user
//  */

// export async function deleteUser(clerkId: string) {
//   try {
//     await prisma.user.delete({
//       where: {
//         clerkId,
//       },
//     });
//   } catch (error) {
//     return {
//       error: handleError(error),
//     };
//   }
// }
