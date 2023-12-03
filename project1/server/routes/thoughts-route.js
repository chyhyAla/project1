const router = require("express").Router();

const Thought = require("../models/Thought");

/**
 * URL: localhost:5001/api/thoughts/
 * Response: Array of all thoughts document
 */
router.get("/", async (req, res, next) => {
  try {
    const thoughts = await Thought.find({});
    res.json(thoughts);
  } catch (err) {
    next(err);
  }
});

router.post("/seed", async (req, res, next) => {
  try {
    for (let x = 0; x < 5; x++) {
      const newThought = new Thought({
        thought: `This is thought ${Math.random().toFixed(5)}`,
        dateCreated: new Date(),
      });
      await newThought.save();
      console.log("thought saved!");
    }
    res.send("Let's run the get after this to test!!");
  } catch (err) {
    next(err);
  }
});

router.post("/create", async (req, res, next) => {
  try {
    const { thought } = req.body;
    const newThought = new Thought({
      thought,
      dateCreated: new Date(),
    });
    await newThought.save();
    res.json({ newThought, msg: "thought successfully saved!" });
  } catch (err) {
    next(err);
  }
});

router.delete("/", async (req, res, next) => {
  try {
    await Thought.deleteMany({});
    res.send("Successfully deleted all thoughts");
  } catch (err) {
    next(err);
  }
});

module.exports = router;
