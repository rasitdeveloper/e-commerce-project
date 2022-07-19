const Boom =  require("@hapi/boom");
const Order = require("../models/Order");

const CreateOrder = async (req, res, next) => {
    const input = req.body;
    input.items = input.items ? JSON.parse(input.items) : null;
  
    try {
      const order = new Order({
        user: input.user,
        address: input.address,
        items: input.items,
      });
  
      const savedData = await order.save();
  
      res.json(savedData);
    } catch (e) {
      next(e);
    }
};

const GetOrders = async (req, res, next) => {
  try {
    const orders = await Order.find({}).populate('user', '-password -__v').populate('items');

    res.json(orders);
  } catch (e) {
    next(e);
  }
};

module.exports = { CreateOrder, GetOrders };
