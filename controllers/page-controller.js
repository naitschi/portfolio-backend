const Page = require("../models/page");

/**
 * Create Function for Page
 */
createPage = (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: "You must provide a Page",
    });
  }

  const page = new Page(body);

  if (!page) {
    return res.status(400).json({ success: false, error: err });
  }

  page
    .save()
    .then(() => {
      return res.status(201).json({
        success: true,
        id: page._id,
        message: "Page Created!",
      });
    })
    .catch((error) => {
      return res.status(400).json({
        error,
        message: "Something went wrong! Page not created!",
      });
    });
};

updatePage = async (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: "You must provide a body to update",
    });
  }

  Page.findOne({ _id: req.params.id }, (err, page) => {
    if (err) {
      return res.status(404).json({
        err,
        message: "Page not found!",
      });
    }
    page.title = body.title;
    page.body = body.body;

    page
      .save()
      .then(() => {
        return res.status(200).json({
          success: true,
          id: movie._id,
          message: "Page updated!",
        });
      })
      .catch((error) => {
        return res.status(404).json({
          error,
          message: "Page not updated!",
        });
      });
  });
};

deletePage = async (req, res) => {
  await Page.findOneAndDelete({ _id: req.params.id }, (err, page) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }

    if (!page) {
      return res.status(404).json({ success: false, error: `Page not found` });
    }

    return res.status(200).json({ success: true, data: page });
  }).catch((err) => console.log(err));
};

getPageById = async (req, res) => {
  await Page.findOne({ _id: req.params.id }, (err, page) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }

    if (!page) {
      return res.status(404).json({ success: false, error: `Page not found` });
    }
    return res.status(200).json({ success: true, data: page });
  }).catch((err) => console.log(err));
};

getPages = async (req, res) => {
  await Page.find({}, (err, pages) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }
    if (!pages.length) {
      return res.status(404).json({ success: false, error: `Page not found` });
    }
    return res.status(200).json({ success: true, data: pages });
  }).catch((err) => console.log(err));
};

module.exports = {
  createPage,
  updatePage,
  deletePage,
  getPageById,
  getPages,
};
