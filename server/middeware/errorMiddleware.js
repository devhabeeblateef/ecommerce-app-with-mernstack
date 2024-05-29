const notFound = (req, res, next) => {
    const error = new Error(`Not Found - ${req.originalUrl}`);
    res.status(404);
    next(error);
}

const errorHandler = (error, req, res, next) => {
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    let message = error.message

    if (error.name == "Cast Error" && error.id == "ObjectId"){
        statusCode = 404;
        message = "Resource not Found"
    }

    res.status(statusCode).json({
        message,
        stack: process.env.NODE_ENV === "production" ? null : error.stack
    });

}

export { notFound, errorHandler };