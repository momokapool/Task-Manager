const Task = require('../model/Task')

const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find({})
        res.status(200).json({ tasks })
    } catch (error) {
        res.status(500).json({ msg: error })
    }
}

const createTasks = async (req, res) => {
    const task = await Task.create(req.body)
    res.status(201).json({ task })
}

const seeTasks = async (req, res) => {
    try {
        const { id: TaskID } = req.params
        const task = await Task.findOne(TaskID)
        res.json({ id: req.params.id })
        if (!task) {
            return res.status(404)
        }

    } catch (error) {
        res.status(500).json({ msg: error })
    }
}

const updateTasks = async (req, res) => {
    try {
        const { id: TaskID } = req.params
        const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
            new: true,
            runValidators: true,
        })
        if (!task) {
            return res.status(404).json({ msg: `no task with id ${TaskID}` })
        }
        res.status(200).json({ task })
    } catch (error) {
        res.status(500).json({ msg: error })
    }
}

const deleteTasks = async (req, res) => {
    try {
        const { id: TaskID } = req.params
        const task = await Task.findOneAndDelete({ _id: TaskID })
        if (!task) {
            return res.status(404).json({ msg: `no task with id ${TaskID}` })
        }
        res.status(200).json({ task })
    } catch (error) {
        res.status(500).json({ msg: error })
    }
}




module.exports = {
    getAllTasks, createTasks, seeTasks, updateTasks, deleteTasks
}