export class UserData{
  /*description: string;
  skills: Map<number, string> = new Map();
  id: number;

  constructor() {
  }

  setDescription(des: string): void{
    this.description = des;
  }

  addSkill(newSkill: string): void{
    this.id++;
    this.skills.set(this.id, newSkill);
  }

  editSkill(newSkill: string, itsId: number): void{
    this.skills.set(itsId, newSkill);
  }

  removeSkill(itsId: number): void{
    this.skills.delete(itsId);
  }*/

  text: string[] = [];

  constructor(text: string[]) {
    this.text = text;
  }
}
