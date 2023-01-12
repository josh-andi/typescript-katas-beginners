/**

Your task here is to program the behaviour of a dog.

Dogs can be in a variety of sizes: small, medium and large.

Because we all love dogs, we wish to keep them happy. To do this we give them a nice walk.


Walking mechanics:

- Small dogs don't need to be walked as far to become tired.

- Longer walks makes dogs happy, but if the walk is too long then the dogs happiness will start to decrease and could even become sad!

- Dogs can't walk forever and at some point refuse to continue on walking.

- If you dont walk your dog at all then it will also become a sad doggo.


FAQ:

How far can each dog walk before giving up?:

small => 300
medium => 600
large => 900

How long is a 'long' walk?:

small => 100
medium => 200
large => 300

To run your test, type this command in your console:

npm test -- --grep "Dog Walker simulation"

*/


// Hint: you may have to amend some of the types to support different values!
type Happiness = "happy"

export enum Size {
  Small,
  Medium,
  Large
}


export class Dog {
  size: Size;
  private happiness: Happiness;
  private tiredness: number; // a number between 0 and 100
  private tooTiredToWalk: boolean;

  constructor(size: Size) {
    this.size = size;
    this.happiness = "happy";
    this.tiredness = 0;
  }

  /**
    @param distance = the distance to walk
    
    @return the distance the dog walked
  */
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
