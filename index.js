function BoardMember(name, homeState, training) {
  this.name = name;
  this.homeState = homeState;
  this.training = training;
}

BoardMember.prototype.veto = () => "No, I must disagree";
BoardMember.prototype.approve = () => "You can do that!";
BoardMember.prototype.doCharity = () => "I like to help people.";
BoardMember.prototype.releasePressStatement = () =>
  "You will see great things from Scuber.";
BoardMember.prototype.sayHi = () => {
  return `Hi, my name is ${this.name}. I am from ${this.homeState}, and I was trained in ${this.training}.`;
};
