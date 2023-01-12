/**

Your task here is to program the behaviour of a dog.

Dogs can be in a variety of sizes: small, medium and large.

Small dogs don't need to be walked as far to become tired.

Longer walks makes dogs happy, but if the walk is too long then the dogs happiness will start to decrease and could even become sad!

If you dont walk your dog at all then it will also be a sad doggo.


*/


// Hint: you may have to amend some of the types to support different values!
type Happiness = "happy"

export enum Size {
  Small
}


export class Dog {
  size: Size;
  private happiness: Happiness;
  private tiredness: number;
  private tooTiredToWalk: boolean;

  constructor(size: Size) {
    this.size = size;
    this.happiness = "happy";
    this.tiredness = 0;
  }

  // returns the distance walked
  walk = (distance: number): number => {
    // TODO: write your logic here

    return 0;
  }

  // dont touch me
  getTiredness = () => {
    return this.tiredness
  }

  // dont touch me
  getHappiness = () => {
    return this.happiness;
  }
}
