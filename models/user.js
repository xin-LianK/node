const mongodb = require('./index');
const Schema = mongodb.mongoose.Schema;
const UserSchema = new Schema({
    id:Number,
    name:String,
    email:String,
    password:String,
    create_data:{type:Date,default:Date.now}
});

const User = mongodb.mongoose.model('User',UserSchema);

class Userdb{
    constructor(){}

    query(obj={}){
        return new Promise((resolve,reject)=>{
            User.find(obj,(err,res)=>{
                if(err){
                    reject(err);
                }
                resolve(res);
            })
        });
    }
    queryEmail(em) {
        return new Promise((resolve, reject) => {
            User.find({
                email: em
            }, (err, res) => {
                if (err) {
                    reject(err)
                }
                const len = res.length
                if (len >= 1) {
                    // 存在
                    resolve(res)
                } else {
                    // 不存在
                    resolve(null)
                }
            })
        })
    }
    save(obj){
        const u = new User(obj)
        return new Promise((resolve,reject)=>{
            u.save((err,res)=>{
                if(err){
                    reject(err);
                }
                resolve(res);
            })
        });
    }
}

module.exports = new Userdb();