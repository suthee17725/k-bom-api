const Album = require("../models/album");
const Cart = require("../models/cart");
const CartItem = require("../models/cartItem");

// สร้างการซื้ออัลบั้มใหม่
exports.purchaseAlbum = async (req, res) => {
  try {
    const { albumId, quantity } = req.body;

    const album = await Album.findByPk(albumId);

    if (!album) {
      return res.status(404).json({ error: "Album not found" });
    }

    const cartItem = await CartItem.create({
      AlbumId: album.id,
      Quantity: quantity,
    });

    let cart = await Cart.findOne({ where: { UserId: req.user.id } });

    if (!cart) {
      cart = await Cart.create({ UserId: req.user.id });
    }

    await cart.addCartItem(cartItem);

    res.status(200).json({ message: "Album purchased successfully" });
  } catch (error) {
    console.error("Error purchasing album:", error);
    res
      .status(500)
      .json({ error: "An error occurred while purchasing the album" });
  }
};
