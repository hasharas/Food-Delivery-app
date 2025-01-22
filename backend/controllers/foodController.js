import foodModel from "../models/foodModel.js";
import fc from "fs"

//add food item

const addFood = async (req, res) => {

      let image_filename = `${req.file.filename}`;

      const food = new foodModel({
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            category: req.body.category,
            image: image_filename
      })

      try {
            await food.save();
            res.json({ success: true, message: "Food Added success..", data: food })

      } catch (error) {
            console.log(error)
            res.json({ success: false, message: "Error" })
      }
}

//get all food items
const listFood = async (req, res) => {
      try {
            const foods = await foodModel.find();
            res.json({ success: true, data: foods })
      } catch (error) {
            console.log(error)
            res.json({ success: false, message: "Error" })
      }
}


// remove food item

const removeFood = async (req, res) => {
      try {
            const food = await foodModel.findById(req.body.id);
            fs.unlink(`uploads/${food.image}`, () => { })
      } catch (error) {

      }
}
export { addFood, listFood }
