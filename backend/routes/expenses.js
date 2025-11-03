const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Expense = require('../models/Expense');

// POST /api/expenses  -> add an expense
router.post('/', auth, async (req, res) => {
  try {
    const { title, amount, category, date } = req.body;
    if(!title || !amount) return res.status(400).json({ msg: 'Missing fields' });

    const newExpense = new Expense({
      userId: req.user.id,
      title,
      amount,
      category: category || 'General',
      date: date || Date.now()
    });

    const saved = await newExpense.save();
    res.json(saved);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

// GET /api/expenses -> fetch all expenses for the logged-in user
router.get('/', auth, async (req, res) => {
  try {
    const expenses = await Expense.find({ userId: req.user.id }).sort({ date: -1 });
    res.json(expenses);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

// DELETE /api/expenses/:id -> delete an expense (only owner)
router.delete('/:id', auth, async (req, res) => {
  try {
    const expense = await Expense.findById(req.params.id);

    if (!expense) {
      return res.status(404).json({ msg: 'Expense not found' });
    }

    if (expense.userId.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'Not authorized' });
    }

    await expense.deleteOne(); // ✅ fixed line

    res.json({ msg: 'Expense deleted successfully' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});


module.exports = router;
