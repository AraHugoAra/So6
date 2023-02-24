import { seedQueries, dropQueries } from "./queriesDB";

export const dropData = async (db) => {
  for (let query of dropQueries) {
    await db.query(query);
  }
};

export const seedData = async (db) => {
  for (let query of seedQueries) {
    await db.query(query);
  }
};