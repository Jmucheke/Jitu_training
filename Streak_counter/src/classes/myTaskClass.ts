import myTaskInterface from '../interfaces/myTaskInterface'

class myTaskClass implements myTaskInterface {
 task: string
 image: string
 date: string
 id:number

 constructor(task: string, image: string, date: string) {
  this.id=this.generateId()
  this.task = task
  this.image = image
  this.date = date
 }
 generateId(){
  return Math.floor(Math.random()*1000)
 }

}
export default myTaskClass