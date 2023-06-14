const Album = require("../models/album");

// แสดงรายการอัลบั้มเพลงทั้งหมด
exports.getAllAlbums = async (req, res) => {
  try {
    const albums = await Album.findAll();

    res.status(200).json({ albums });
  } catch (error) {
    console.error("Error retrieving albums:", error);
    res
      .status(500)
      .json({ error: "An error occurred while retrieving albums" });
  }
};
// เพิ่มอัลบั้มเพลงใหม่
exports.createAlbum = async (req, res) => {
  try {
    const { title, artist, genre } = req.body;

    // สร้างอัลบั้มเพลงในฐานข้อมูล
    const album = await Album.create({
      title,
      artist,
      genre,
    });

    res.status(201).json({ album });
  } catch (error) {
    console.error("Error creating album:", error);
    res
      .status(500)
      .json({ error: "An error occurred while creating the album" });
  }
};

// แก้ไขข้อมูลของอัลบั้มเพลง
exports.updateAlbum = async (req, res) => {
  try {
    const { albumId } = req.params;
    const { title, artist, genre } = req.body;

    // ค้นหาอัลบั้มเพลงตาม ID
    const album = await Album.findByPk(albumId);

    if (!album) {
      return res.status(404).json({ error: "Album not found" });
    }

    // อัพเดตข้อมูลของอัลบั้มเพลง
    album.title = title;
    album.artist = artist;
    album.genre = genre;
    await album.save();

    res.status(200).json({ album });
  } catch (error) {
    console.error("Error updating album:", error);
    res
      .status(500)
      .json({ error: "An error occurred while updating the album" });
  }
};

// ลบอัลบั้มเพลงออกจากระบบ
exports.deleteAlbum = async (req, res) => {
  try {
    const { albumId } = req.params;

    // ค้นหาอัลบั้มเพลงตาม ID
    const album = await Album.findByPk(albumId);

    if (!album) {
      return res.status(404).json({ error: "Album not found" });
    }

    // ลบอัลบั้มเพลง
    await album.destroy();

    res.status(200).json({ message: "Album deleted successfully" });
  } catch (error) {
    console.error("Error deleting album:", error);
    res
      .status(500)
      .json({ error: "An error occurred while deleting the album" });
  }
};

exports.getAlbumDetails = async (req, res) => {
  try {
    const { albumId } = req.params;

    // ค้นหาอัลบั้มเพลงตาม ID
    const album = await Album.findByPk(albumId);

    if (!album) {
      return res.status(404).json({ error: "Album not found" });
    }

    res.status(200).json({ album });
  } catch (error) {
    console.error("Error retrieving album details:", error);
    res
      .status(500)
      .json({ error: "An error occurred while retrieving album details" });
  }
};
