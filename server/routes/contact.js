const express = require("express");
const router = express.Router();
const db = require("../db");

// POST /api/contact
router.post("/", async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const sql = db.isPostgres
      ? "INSERT INTO messages (name, email, message) VALUES ($1, $2, $3)"
      : "INSERT INTO messages (name, email, message) VALUES (?, ?, ?)";
    await db.query(sql, [name, email, message]);
    res.status(201).json({ success: true, message: "Message sent!" });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

module.exports = router;
