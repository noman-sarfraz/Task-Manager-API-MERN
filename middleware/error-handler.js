const {customAPIError} = require('./../errors/custom-error')

const errorHandlerMiddleware = (err,req,res,next) => {
    if(err instanceof customAPIError) {
        return res.status(err.statusCode).json({msg: err.message})
    }
    return res.status(err.status).json({error: err.message})
}

module.exports = errorHandlerMiddleware