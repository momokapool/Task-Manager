const getAllTasks = (req, res) =>{
    res.send("All tasks");
}

const createTasks = (req, res) =>{
    res.send("Create tasks");
}

const seeTasks = (req, res) =>{
    res.json({id: req.params.id});
}

const updateTasks = (req, res) =>{
    res.send("Edit tasks");
}

const deleteTasks = (req, res) =>{
    res.send("Delete tasks");
}




module.exports = {
    getAllTasks, createTasks, seeTasks, updateTasks, deleteTasks
}