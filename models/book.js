var mongoose=require('mongoose');

var bookSchema= mongoose.Schema({
title:{
type:String,
required:true
},
generes:{
type:String,
required:true
},
description:{
type:String
},
author:{
type:String,
required:true
},
publisher:{
type:String,
required:true
},
pages:{
type:String,
},
image_url:{
type:String,
},
buy_url:{
type:String,
},
create_date:{
type:Date,
default:Date.now
}


});

var Books=module.exports=mongoose.model('Book',bookSchema);

module.exports.getBooks=function(callback,limit){
Book.find(callback).find(limit);
}


module.exports.getBookById=function(id,callback){
Book.findById(id,callback);
}


module.exports.addBook=function(book,callback){
Book.create(book,callback);
}

module.exports.updateBook=function(id,book,options,callback){
var query ={_id: id};
var update={
title:book.title,
generes:book.generes,
description:book.description,
author:book.author,
publisher:book.publisher,
pages:book.pages,
image_url:book.image_url,
buy_url:book.buy_url

}
Book.findOneAndUpdate(query,update,options,callback);
}
module.exports.removeBook=function(id,callback){
var query={_id:id}
Book.remove(query,callback);

}
