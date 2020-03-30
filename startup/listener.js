const PORT = process.env.PORT || 5000;
module.exports = app => {
  app.listen(PORT, () => {
    console.log(`Service started on PORT ${PORT}.`);
  });
};
