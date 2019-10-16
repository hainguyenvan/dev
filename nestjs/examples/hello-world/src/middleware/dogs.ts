export const dogsMiddleware = (req, res, next) => {
  console.log('Dogs middleware ...');
  next();
};
