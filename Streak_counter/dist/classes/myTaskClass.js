class myTaskClass {
    constructor(task, image, date) {
        this.id = this.generateId();
        this.task = task;
        this.image = image;
        this.date = date;
    }
    generateId() {
        return Math.floor(Math.random() * 1000);
    }
}
export default myTaskClass;
