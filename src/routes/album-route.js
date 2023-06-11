const express = require("express");
const router = express.Router();

const albumController = require("../controllers/album-controller");

router.get("/albums", albumController.getAllAlbums); // ดูรายการอัลบั้มเพลงทั้งหมด
router.get("/albums/:albumId", albumController.getAlbumById); // ดูรายละเอียดของอัลบั้มเพลง
router.post("/albums", albumController.createAlbum); // สร้างอัลบั้มเพลงใหม่
router.put("/albums/:albumId", albumController.updateAlbum); // แก้ไขข้อมูลของอัลบั้มเพลง
router.delete("/albums/:albumId", albumController.deleteAlbum); // ลบอัลบั้มเพลง

module.exports = router;
