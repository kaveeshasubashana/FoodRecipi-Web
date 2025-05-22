const express=require("express")
const { getRecipes,getRecipe,addRecipe,editRecipe,deleteRecipe } = require("../controller/recipe")
const router = express.Router()

router.get("/",getRecipes)//get all recipe
router.get("/:id",getRecipe) //get recipe by id
router.post("/",addRecipe) //ADD RECIPE
router.put("/:id",editRecipe) //edit recipe
router.delete("/:id",deleteRecipe)//delet recipe




module.exports=router