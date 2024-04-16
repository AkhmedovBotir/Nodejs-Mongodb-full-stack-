export default function(res, req, next){
    const isAth = req.cookie.token ? true : false;
    res.locals.token = isAth
    next()
}