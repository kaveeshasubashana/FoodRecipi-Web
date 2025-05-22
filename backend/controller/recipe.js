const recipe = require("../models/recipe")
const Recipes=require("../models/recipe")

const getRecipes = async(req,res)=>{
    const recipes=await Recipes.find()
    return res.json(recipes)
}
const getRecipe = async(req,res)=>{
    const recipe=await recipes.findById(req.params.id)
    res.json(recipe)
}
const addRecipe =async (req,res)=>{
    const {title,ingredients,instruction,time}=req.body

    if(!title || !ingredients || !instruction){
        res.json({message:"Requierd filed cant be empty"})
    }
    const newRecipe=await recipes.create({
        title,ingredients,instruction,time
    })
    return res.json(newRecipe)
}
const editRecipe =async (req,res)=>{
   const {title,ingredients,instruction,time}=req.body
   let recipe=await Recipes.findById(req.params.id)

   try{
 if(recipe){
    await Recipes.findByIdAndUpdate(req.params.id,req.body,{new:true})
    res.json({title,ingredients,instruction,time})
   }
}
catch(err) {
    return res.status(404).json({message:"error"})

}

   }
  
const deleteRecipe = (req,res)=>{
    res.json({message:"hello"})
}

module.exports={getRecipes,getRecipe,addRecipe,editRecipe,deleteRecipe}