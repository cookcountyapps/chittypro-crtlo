import { sql } from 'drizzle-orm';
import {
  index,
  jsonb,
  pgTable,
  timestamp,
  varchar,
  text,
  boolean,
  integer,
} from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// Session storage table (mandatory for Replit Auth)
export const sessions = pgTable(
  "sessions",
  {
    sid: varchar("sid").primaryKey(),
    sess: jsonb("sess").notNull(),
    expire: timestamp("expire").notNull(),
  },
  (table) => [index("IDX_session_expire").on(table.expire)],
);

// User storage table (mandatory for Replit Auth)
export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  email: varchar("email").unique(),
  firstName: varchar("first_name"),
  lastName: varchar("last_name"),
  profileImageUrl: varchar("profile_image_url"),
  stripeCustomerId: varchar("stripe_customer_id"),
  stripeSubscriptionId: varchar("stripe_subscription_id"),
  subscriptionStatus: varchar("subscription_status").default("free"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

// Properties table for RTLO verification
export const properties = pgTable("properties", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  userId: varchar("user_id").references(() => users.id),
  address: text("address").notNull(),
  city: varchar("city").notNull().default("Chicago"),
  zipCode: varchar("zip_code").notNull(),
  propertyType: varchar("property_type").notNull(), // single-family, multi-unit, condo, etc.
  units: integer("units").default(1),
  isOwnerOccupied: boolean("is_owner_occupied").default(false),
  isRtloCovered: boolean("is_rtlo_covered"),
  verificationDate: timestamp("verification_date"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

// RTLO Questions and Answers
export const rtloQuestions = pgTable("rtlo_questions", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  userId: varchar("user_id").references(() => users.id),
  question: text("question").notNull(),
  answer: text("answer"),
  rtloSection: varchar("rtlo_section"), // e.g., "5-12-080"
  confidence: varchar("confidence"), // high, medium, low
  createdAt: timestamp("created_at").defaultNow(),
});

// Generated Documents
export const documents = pgTable("documents", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  userId: varchar("user_id").references(() => users.id),
  propertyId: varchar("property_id").references(() => properties.id),
  documentType: varchar("document_type").notNull(), // lease-addendum, notice, court-form
  title: varchar("title").notNull(),
  content: text("content").notNull(),
  metadata: jsonb("metadata"), // additional document data
  createdAt: timestamp("created_at").defaultNow(),
});

// AI Analysis Results
export const aiAnalyses = pgTable("ai_analyses", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  userId: varchar("user_id").references(() => users.id),
  documentId: varchar("document_id").references(() => documents.id),
  analysisType: varchar("analysis_type").notNull(), // lease-review, compliance-check
  originalText: text("original_text").notNull(),
  analysis: text("analysis").notNull(),
  recommendations: jsonb("recommendations"),
  complianceScore: integer("compliance_score"), // 0-100
  createdAt: timestamp("created_at").defaultNow(),
});

export type UpsertUser = typeof users.$inferInsert;
export type User = typeof users.$inferSelect;
export type Property = typeof properties.$inferSelect;
export type InsertProperty = typeof properties.$inferInsert;
export type RTLOQuestion = typeof rtloQuestions.$inferSelect;
export type InsertRTLOQuestion = typeof rtloQuestions.$inferInsert;
export type Document = typeof documents.$inferSelect;
export type InsertDocument = typeof documents.$inferInsert;
export type AIAnalysis = typeof aiAnalyses.$inferSelect;
export type InsertAIAnalysis = typeof aiAnalyses.$inferInsert;

// Zod schemas for validation
export const insertPropertySchema = createInsertSchema(properties).omit({ id: true, createdAt: true, updatedAt: true });
export const insertRTLOQuestionSchema = createInsertSchema(rtloQuestions).omit({ id: true, createdAt: true });
export const insertDocumentSchema = createInsertSchema(documents).omit({ id: true, createdAt: true });
export const insertAIAnalysisSchema = createInsertSchema(aiAnalyses).omit({ id: true, createdAt: true });
