const Page = require("../models/page");

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
};
