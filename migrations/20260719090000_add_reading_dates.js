/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.alterTable("reviews", (table) => {
    table.date("date_started");
    table.date("date_finished");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.alterTable("reviews", (table) => {
    table.dropColumn("date_started");
    table.dropColumn("date_finished");
  });
};
