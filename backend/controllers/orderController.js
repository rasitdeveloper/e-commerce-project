const Boom =  require("@hapi/boom");
const Order = require("../models/Order");

const CreateOrder = async (req, res, next) => {
    const input = req.body;
    input.items = input.items ? JSON.parse(input.items) : null;
    console.log(req.payload)
  
    try {
      const order = new Order({
        user: input.user,
        adress: input.address,
        items: input.items,
      });
  
      const savedData = await order.save();
  
      res.json(savedData);
    } catch (e) {
      next(e);
    }
};

module.exports = { CreateOrder };
