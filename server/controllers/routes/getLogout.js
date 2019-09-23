exports.getLogout = (req, res, next) => {
  res.clearCookie('jwt');
  res.send({
    message: 'logout successfully',
    StatusCode: 200,
  });
};
