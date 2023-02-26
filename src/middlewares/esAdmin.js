let admins = ['Ada','Greta','Vim','Tim']
//devuelve solo ada por el for
let esAdmin = function(req, res, next){
    for (let i = 0; i < admins.length; i++) {
        if (req.query.user === admins[i]) {
          next()  
    }else{
        res.send('No tienes los privilegios para ingresar')
        
    }

}
}
module.exports = {esAdmin}