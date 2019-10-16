export const catsMiddleware = (req, res, next) => {
  console.log('Cats middleware ...');
  next();
};

export const catsMiddlewareByID = (req, res, next) => {
  console.log('Get cats by ID ...');
  next();
};
