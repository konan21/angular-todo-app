export class Todo {
    user;
    items;

    constructor() {
        this.user = 'Adam';
        this.items = [
            new TodoItem('Buy flowers', false),
            new TodoItem('Get shoes', false),
            new TodoItem('Collect tickets', false),
            new TodoItem('Call Joe', false),
        ];
    }
}

export class TodoItem {
    action;
    done;

    constructor(action, done) {
        this.action = action;
        this.done = done;
    }
}
