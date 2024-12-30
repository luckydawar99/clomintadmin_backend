// creat user model schema
const mongoose=require('mongoose');
const productSchema = new mongoose.Schema({ 
userId:{
	type:mongoose.Schema.Types.ObjectId,
	required:true, 
	ref: 'user', 
},	
categoryId:{
	type:mongoose.Schema.Types.ObjectId,
	required:true, 
	ref: 'category', 
},
subcategoryId:{
	type:mongoose.Schema.Types.ObjectId,
	required:true, 
	ref: 'subcategory', 
},
address:{
    type:String,
    required:false
},
salary_period:{
    type:String,
    required:false
},
position_type:{
    type:String,
    required:false
},
salary_from:{
    type:String,
    required:false
},
salary_to:{
    type:String,
    required:false
},
ad_title:{
    type:String,
    required:false
},
description:{
    type:String,
    required:false
},
price:{
    type:Number,
    required:false
},
product_image:{
    type:Array,
    required:false
},
// author information
post_type:{
	type:String,
	required:false
},
post_bhk:{
	type:String,
	required:false
},
bathrooms:{
	type:String,
	required:false
},
furnishing:{
	type:String,
	required:false
},
project_status:{
	type:String,
	required:false
},
listing_by:{
	type:String,
	required:false
},
super_area_sqft:{
	type:String,
	required:false
},
carpet_area_sqft:{
	type:String,
	required:false
},
bachelors_allowed:{
    type:String,
    required:false
},
maintenance_monthly:{
	type:String,
	required:false
},
total_floors:{
	type:String,
	required:false
},
floor_number:{
	type:String,
	required:false
},
car_parking:{
	type:String,
	required:false
},
facing:{
	type:String,
	required:false
},
project_name:{
	type:String,
	required:false
},
washrooms:{
    type:String,
	required:false
},
plot_area:{
    type:String,
    required:false
},
length:{
    type:String,
    required:false
},
breadth:{
    type:String,
    required:false
},
sub_type:{
    type:String,
    required:false
},
meals_included:{
    type:String,
    required:false
},
brand:{
	type:String,
	required:false,
},
fuel:{
	type:String,
	required:false,
},
transmission:{
	type:String,
	required:false,
},
km_driven:{
	type:String,
	required:false,
},
year:{
	type:String,
	required:false,
},
no_of_owners:{
	type:String,
	required:false,
},
physical_condition:{
	type:String,
	required:false,
},
installed_ram_size:{
	type:String,
	required:false,
},
storage_capacity:{
	type:String,
	required:false,
},
network:{
	type:String,
	required:false, 
},
charger:{
	type:String,
	required:false,
},
original_receipt:{
	type:String,
	requird:false,
},
box_with_imei:{
	type:String,
	required:false,
},
product_status:{
    type:Number,
    required:true,
    default:0
},
product_rating:{
    type:Number,
    required:true,
    default:0
},

},{timestamps:true});
module.exports = ProductModel= mongoose.model("product",productSchema);