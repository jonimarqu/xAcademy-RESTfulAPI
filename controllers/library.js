const createLibrary = (req, res) => {
  console.log("Creates library");
  res.end();
};

const getLibrary = (req, res) => {
  console.log("Gets library and its books");
  res.end();
};

const getLibraries = (req, res) => {
  console.log("Gets all libraries with their books");
  res.end();
};

const updateLibrary = (req, res) => {
  console.log("Updates library");
  res.end();
};

const deleteLibrary = (req, res) => {
  console.log("Marks library as deleted");
  res.end();
};

module.exports = {
  createLibrary,
  getLibraries,
  getLibrary,
  updateLibrary,
  deleteLibrary,
};
