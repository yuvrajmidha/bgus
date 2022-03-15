// const  userRoutes = require('./user')
const  serviceRoutes = require('./service')
const  feedBackRoutes = require('./feedback')
const  reportRoutes = require('./report')
const  contactRoutes = require('./contact')
// const  docuRoutes = require('./eSign')



const express =require('express')
const router = express.Router()

// router.use("/api/user", userRoutes)
router.use("/service", serviceRoutes)
router.use("/feedback", feedBackRoutes)
router.use("/contact", contactRoutes)
router.use("/report", reportRoutes)
// router.use("/api/document", docuRoutes)


const errorMessage = {
    pageNotFound: 'Page Not Found'
}

//handling error 404 (Not Found)
router.use((req, res, next) => {
  
    const error = new Error(errorMessage.pageNotFound);
    error.status = 404;
    res.status(error.status).json({
        message: error.message
    })
});
    
module.exports = router