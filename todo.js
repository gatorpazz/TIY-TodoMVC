//var chai = require('chai'),
//    expect = chai.expect;

var expect = require('chai').expect;

var taskList = [];
var placeholder;

// I can list my tasks...
function listTasks(list){
  var prettyList = '';
  for(var index = 0; index < list.length; index++){
    placeholder = index + 1 + ') ' + list[index] + ' \n';
    var prettyList = prettyList + ' \n' + placeholder;
  }
  return prettyList;
}

//I can add a task to my list...
function addTaskToList(task, list){
  //What is the task?
  //Where is the task going?
  //What order / priority?
  return list.push(task);
}

//I can check a task off my list...
function completeTask(task, list){
  return list[task - 1] += ' COMPLETE';
}

//I can delete a task off my list...
function deleteTask(task, list){
  return list.splice(task - 1, 1);
}

expect(taskList.length).to.equal(0);
addTaskToList("Remember the milk", taskList);
expect(taskList[0]).to.equal("Remember the milk");
expect(taskList.length).to.equal(1);

addTaskToList("Take out the trash", taskList);

expect(listTasks).to.exist;

expect(completeTask).to.exist;
completeTask(1, taskList);
expect(taskList[0]).to.equal("Remember the milk COMPLETE");

expect(deleteTask).to.exist;
deleteTask(1, taskList);
expect(taskList.length).to.equal(1);
expect(taskList[0]).to.equal("Take out the trash");

console.log(listTasks(taskList));
