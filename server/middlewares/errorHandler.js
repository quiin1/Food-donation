export const errorHandler = (err, req, res, next) => {
     err.statusCode = err.statusCode || 500

     /** [register] error duplicate key value */
     if (err.code === 11000) {
         err.statusCode = 400
         for (let p in err.keyValue) {
            err.message = `${p} has to be unique`
         }
     }

     /** [Upadte Delete Post] invalid post id 
      * => ObjectID: not found
      * ***
      * if not handle this error, error message default example will be: 
      * Cast to ObjectId failed for value \"64ae6ad2022ab02a46e16389sdds\" (type string) at path \"_id\" for model \"Post\"
      * 
      * */ 
     if (err.kind == "ObjectId") {
        err.statusCode = 404
        err.message = `The ${req.originalUrl} is not found because of wrong ID`
     }

     res.status(err.statusCode).json({
        status: 'fail',
        message: err.message
     })
}