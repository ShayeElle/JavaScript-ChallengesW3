
class Person {
  constructor(name, job, age) {
      this.name = name;
      this.job = job;
      this.age = age;
  }
  exercise() {
      console.log("Running is fun! - said no one ever");
  }
  fetchJob() {
      console.log(`${this.name} is a ${this.job}.`);
  }
}

class Programmer extends Person {
  constructor(name, job, age, languages) {
      super(name, job, age);
      this.languages = languages;
      this.busy = true;
  }
  completeTask() {
      this.busy = false;
  }
  acceptNewTask() {
      this.busy = true;
  }
  offerNewTask() {
      if (this.busy) {
          console.log(`${this.name} can't accept any new tasks right now.`);
      } else {
          console.log(`${this.name} would love to take on a new responsibility.`);
      }
  }
  learnLanguage(language) {
      this.languages.push(language);
  }
  listLanguages() {
      console.log(`${this.name} knows: ${this.languages.join(', ')}.`);
  }
}

const Shaye = new Person("Shaye", "Front-end developer", 24);
const Tom = new Programmer("Tom", "Back-end developer", 29, ["JavaScript", "Python", "CSS"]);

Shaye.exercise();
Shaye.fetchJob();

Tom.offerNewTask();
Tom.learnLanguage("C++");
Tom.listLanguages();
Tom.completeTask();
Tom.offerNewTask();
