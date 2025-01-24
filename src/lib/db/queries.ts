import { drizzle } from 'drizzle-orm/vercel-postgres';
import { eq } from 'drizzle-orm';
import { sql } from '@vercel/postgres';
import { users as user } from './schema';
import * as schema from './schema';

const db = drizzle(sql, { schema });

// Get all the users
export async function getUsers() {
  try {
    const users = await db.select().from(user);
    console.log('Users:', users);
    return users;
  } catch (error) {
    console.error('Failed to fetch users', error);
    throw error;
  }
}

// Get user by email
export async function getUserByEmail(email: string) {
  try {
    const [userData] = await db
      .select()
      .from(user)
      .where(eq(user.email, email));
    return userData || null;
  } catch (error) {
    console.error('Failed to fetch user by email', error);
    throw error;
  }
}

export type NewUser = typeof user.$inferInsert;
// Create a new user
export async function createUser(userData: NewUser) {
  try {
    const [newUser] = await db
      .insert(user)
      .values({
        ...userData,
        createdAt: new Date(),
        updatedAt: new Date(),
      })
      .returning();
    return newUser;
  } catch (error) {
    console.error('Failed to create user', error);
    throw error;
  }
}
// export async function createUser(email: string, provider: 'google' | 'facebook' | 'github', name: string, image: string) {
//   try {
//     const [newUser] = await db.insert(user).values({
//       email,
//       provider,
//       name,
//       image,
//       createdAt: new Date(),
//       updatedAt: new Date(),
//       role: 'user', // Default role
//     }).returning();
//     return newUser;
//   } catch (error) {
//     console.error('Failed to create user', error);
//     throw error;
//   }
// }

// Get user by ID
export async function getUser(id: string) {
  try {
    const [dbUser] = await db.select().from(user).where(eq(user.id, id));
    return dbUser || null;
  } catch (error) {
    console.error('Failed to get user by ID', error);
    throw error;
  }
}

// Update user details
export async function updateUser(userData: {
  id: string;
  email?: string;
  name?: string;
  image?: string;
}) {
  try {
    const [updatedUser] = await db
      .update(user)
      .set({
        ...userData,
        updatedAt: new Date(),
      })
      .where(eq(user.id, userData.id))
      .returning();
    return updatedUser;
  } catch (error) {
    console.error('Failed to update user', error);
    throw error;
  }
}
