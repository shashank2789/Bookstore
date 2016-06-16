var mongoose=require('mongoose');

var genereSchema=mongoose.Schema({
name:{
 type:String,
 required:true
}, 
create_date:{
type:Date,
default:Date.now
}

});

var Genre=module.exports=mongoose.model('Genre',genreSchema);

module.exports.getGenres=function(callback, limit){
Genere.find(callback).limit(limit);

}