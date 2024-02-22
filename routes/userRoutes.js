//Get all users
router.route("/").get(async (_req, res) => {
  try {
    const users = await knex("user");
    res.json(users);
  } catch {
    res.status(400).json({
      message: "Error getting users",
    });
  }
});

//Get single user by id
router.route("/:id").get(async (req, res) => {
  try {
    const user = await knex("user").where({ id: req.params.id }).first();
    res.json(user);
  } catch {
    res.status(404).json({
      message: `Error getting user ${req.params.id}`,
    });
  }
});
