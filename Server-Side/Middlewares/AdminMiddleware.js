const Admin = async (req, resp, next) => {
  try {
    const Admin = req.user.isAdmin;

    if (!Admin) {
      return resp(500).json({
        message: "Access Denied",
      });
    }

    next();
  } catch (error) {
    next(error);
  }
};

module.exports = Admin;
