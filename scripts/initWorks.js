const helper = require('./helpers/functions');

const createWork = async (networkClient, colonyClient,colony, taskId, deliverable) => {


const colonyClient = await helper.getColonyClient(networkClient,colony.id);
const updatedTask= await helper.submitTaskDeliverable(colonyClient, taskId, deliverable);



return updatedTask;

};

module.exports = createSamples;