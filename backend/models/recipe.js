const mongoose = require("mongoose");

const recipeSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    ingredients: {
        type: String,
        required: true
    },
    instruction: {
        type: String,
        required: true
    },
    time: {
        type: String
    },
    coverImage: {
        type: String
    }
}, { timestamps: true });

// ✅ Use this to prevent OverwriteModelError
module.exports = mongoose.models.Recipes || mongoose.model("Recipes", recipeSchema);
