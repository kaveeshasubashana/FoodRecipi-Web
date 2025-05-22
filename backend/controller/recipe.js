const getRecipes = (req,res)=>{
    res.json({message:"hello"})
}
const getRecipe = (req,res)=>{
    res.json({message:"hello"})
}
const addRecipe = (req,res)=>{
    const {title,ingredients,instruction,time}=req.body

    if(!title || !ingredients || instruction){
        res.json({message:"Requierd filed cant be empty"})
    }
}
const editRecipe = (req,res)=>{
    res.json({message:"hello"})
}
const deleteRecipe = (req,res)=>{
    res.json({message:"hello"})
}

module.exports={getRecipes,getRecipe,addRecipe,editRecipe,deleteRecipe}