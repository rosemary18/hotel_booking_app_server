module.exports = app => {
  // User Routes
  app.use("/api/user", require("../routes/api/UsersRoutes"));
  app.use("/api/room", require("../routes/api/RoomsRoutes"));
  app.use("/api/payment", require("../routes/api/PaymentsRoutes"));
  app.use("/api/book", require("../routes/api/BooksRoutes"));
};
