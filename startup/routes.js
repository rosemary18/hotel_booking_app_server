module.exports = app => {
  // User Routes
  app.use("/api/user", require("../routes/api/UsersRoutes"));
};
