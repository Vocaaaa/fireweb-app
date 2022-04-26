const {auth} = require('./FBconfig')

const decodeIDToken = async(req, res, next)=>{
    const header = req.headers?.authorization
    if(header !== 'Bearer null' && req.headers?.authorization?.startsWith('Bearer ')){
       const idToken = req.headers.authorization.split('Bearer ')[1]
       try {
           const decodedIdToken = await auth.verifyIdToken(idToken)
           req['currentUser'] = decodedIdToken
           console.log('Ok');
       } catch (error) {
           console.log(error);
       }
       }else {
           console.log('No token'); 
        }
    next() 
}

module.exports = decodeIDToken