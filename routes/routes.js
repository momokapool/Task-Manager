const express = require('express');
const router = express.Router();
const {getAllTasks, createTasks, seeTasks, updateTasks, deleteTasks} = require('../controller/tasks')

router.route('/').get(getAllTasks).post(createTasks);
router.route('/:id').get(seeTasks).patch(updateTasks).delete(deleteTasks)
module.exports = router;