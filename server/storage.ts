import {
  users,
  properties,
  rtloQuestions,
  documents,
  aiAnalyses,
  type User,
  type UpsertUser,
  type Property,
  type InsertProperty,
  type RTLOQuestion,
  type InsertRTLOQuestion,
  type Document,
  type InsertDocument,
  type AIAnalysis,
  type InsertAIAnalysis,
} from "@shared/schema";
import { db } from "./db";
import { eq, and, desc } from "drizzle-orm";

export interface IStorage {
  // User operations (mandatory for Replit Auth)
  getUser(id: string): Promise<User | undefined>;
  upsertUser(user: UpsertUser): Promise<User>;
  updateUserStripeInfo(userId: string, customerId: string, subscriptionId: string): Promise<User>;
  
  // Property operations
  createProperty(property: InsertProperty): Promise<Property>;
  getPropertiesByUser(userId: string): Promise<Property[]>;
  updatePropertyRTLOStatus(propertyId: string, isRtloCovered: boolean): Promise<Property>;
  
  // RTLO Q&A operations
  createRTLOQuestion(question: InsertRTLOQuestion): Promise<RTLOQuestion>;
  getRTLOQuestionsByUser(userId: string): Promise<RTLOQuestion[]>;
  
  // Document operations
  createDocument(document: InsertDocument): Promise<Document>;
  getDocumentsByUser(userId: string): Promise<Document[]>;
  getDocumentById(id: string): Promise<Document | undefined>;
  
  // AI Analysis operations
  createAIAnalysis(analysis: InsertAIAnalysis): Promise<AIAnalysis>;
  getAIAnalysesByUser(userId: string): Promise<AIAnalysis[]>;
}

export class DatabaseStorage implements IStorage {
  // User operations
  async getUser(id: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user;
  }

  async upsertUser(userData: UpsertUser): Promise<User> {
    const [user] = await db
      .insert(users)
      .values(userData)
      .onConflictDoUpdate({
        target: users.id,
        set: {
          ...userData,
          updatedAt: new Date(),
        },
      })
      .returning();
    return user;
  }

  async updateUserStripeInfo(userId: string, customerId: string, subscriptionId: string): Promise<User> {
    const [user] = await db
      .update(users)
      .set({
        stripeCustomerId: customerId,
        stripeSubscriptionId: subscriptionId,
        subscriptionStatus: "active",
        updatedAt: new Date(),
      })
      .where(eq(users.id, userId))
      .returning();
    return user;
  }

  // Property operations
  async createProperty(property: InsertProperty): Promise<Property> {
    const [newProperty] = await db.insert(properties).values(property).returning();
    return newProperty;
  }

  async getPropertiesByUser(userId: string): Promise<Property[]> {
    return db.select().from(properties).where(eq(properties.userId, userId)).orderBy(desc(properties.createdAt));
  }

  async updatePropertyRTLOStatus(propertyId: string, isRtloCovered: boolean): Promise<Property> {
    const [property] = await db
      .update(properties)
      .set({
        isRtloCovered,
        verificationDate: new Date(),
        updatedAt: new Date(),
      })
      .where(eq(properties.id, propertyId))
      .returning();
    return property;
  }

  // RTLO Q&A operations
  async createRTLOQuestion(question: InsertRTLOQuestion): Promise<RTLOQuestion> {
    const [newQuestion] = await db.insert(rtloQuestions).values(question).returning();
    return newQuestion;
  }

  async getRTLOQuestionsByUser(userId: string): Promise<RTLOQuestion[]> {
    return db.select().from(rtloQuestions).where(eq(rtloQuestions.userId, userId)).orderBy(desc(rtloQuestions.createdAt));
  }

  // Document operations
  async createDocument(document: InsertDocument): Promise<Document> {
    const [newDocument] = await db.insert(documents).values(document).returning();
    return newDocument;
  }

  async getDocumentsByUser(userId: string): Promise<Document[]> {
    return db.select().from(documents).where(eq(documents.userId, userId)).orderBy(desc(documents.createdAt));
  }

  async getDocumentById(id: string): Promise<Document | undefined> {
    const [document] = await db.select().from(documents).where(eq(documents.id, id));
    return document;
  }

  // AI Analysis operations
  async createAIAnalysis(analysis: InsertAIAnalysis): Promise<AIAnalysis> {
    const [newAnalysis] = await db.insert(aiAnalyses).values(analysis).returning();
    return newAnalysis;
  }

  async getAIAnalysesByUser(userId: string): Promise<AIAnalysis[]> {
    return db.select().from(aiAnalyses).where(eq(aiAnalyses.userId, userId)).orderBy(desc(aiAnalyses.createdAt));
  }
}

export const storage = new DatabaseStorage();
