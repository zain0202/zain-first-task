const tasks = {
    task: [{
      text: 'Grocery shopping',
      completed: true,
    }, {
      text: 'clean yard',
      completed: false,
    }, {
      text: 'film course',
      completed: false,
    }],
    getTasksToDo() {
      const tasksToDo = this.task.filter((task) => task.completed === false);
      return tasksToDo;
    },
  };
  console.log(tasks.getTasksToDo())

  