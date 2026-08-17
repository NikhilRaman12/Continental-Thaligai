import { pgTable, text, integer, numeric, jsonb, timestamp } from "drizzle-orm/pg-core";

export const menuItemsTable = pgTable("menu_items", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  tamilName: text("tamil_name"),
  category: text("category").notNull(),
  price: numeric("price").notNull(),
  description: text("description").notNull(),
  sensoryProfile: jsonb("sensory_profile").notNull(),
  dietary: jsonb("dietary").notNull(),
  calories: integer("calories").notNull(),
  image: text("image").notNull(),
  chefNotes: text("chef_notes"),
  createdAt: timestamp("created_at").defaultNow()
});

export type InsertMenuItem = typeof menuItemsTable.$inferInsert;
export type MenuItemSelect = typeof menuItemsTable.$inferSelect;

export const reservationsTable = pgTable("reservations", {
  id: text("id").primaryKey(),
  guestName: text("guest_name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  date: text("date").notNull(),
  time: text("time").notNull(),
  partySize: integer("party_size").notNull(),
  seatingArea: text("seating_area").notNull(),
  specialRequests: text("special_requests"),
  status: text("status").default("CONFIRMED"),
  createdAt: timestamp("created_at").defaultNow()
});

export type InsertReservation = typeof reservationsTable.$inferInsert;
export type ReservationSelect = typeof reservationsTable.$inferSelect;

export const ordersTable = pgTable("orders", {
  id: text("id").primaryKey(),
  customerName: text("customer_name").notNull(),
  items: jsonb("items").notNull(),
  orderType: text("order_type").notNull(),
  tableNumber: text("table_number"),
  subtotal: numeric("subtotal").notNull(),
  tax: numeric("tax").notNull(),
  tip: numeric("tip").notNull(),
  totalAmount: numeric("total_amount").notNull(),
  status: text("status").default("PREPARING"),
  createdAt: timestamp("created_at").defaultNow()
});

export type InsertOrder = typeof ordersTable.$inferInsert;
export type OrderSelect = typeof ordersTable.$inferSelect;
