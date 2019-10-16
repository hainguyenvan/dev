export const commonMiddleware = (req, res, next) => {
  console.log('Common middleware ...');
  next();
};
