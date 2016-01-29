export = class UserSerivice{
    private context;
    constructor(context){
        this.context=context;
    };
    create(user, callback){
        var User = this.context.models.User;
        var userModel = new User(user);
        userModel
            .save()
            .then((doc)=>{
                callback(null, doc)
            }, (err)=>{
                callback(err);    
            })
    };
}