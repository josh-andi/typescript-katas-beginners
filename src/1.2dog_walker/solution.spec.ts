import { expect } from 'chai';
import { Dog, Size } from './solution';

describe("Dog Walker simulation", () => {
  describe("Given you have a small dog", () => {
    describe("when you take it on a walk", () => {
      describe("when the walk is long", () => {
        it("should make the dog tired", () => {
          const smallDog = new Dog(Size.Small)

          smallDog.walk(100)

          expect(smallDog.getTiredness()).to.eql(100)
        })

        it("should make the dog very happy", () => {
          const smallDog = new Dog(Size.Small)
          smallDog.walk(100)
          expect(smallDog.getHappiness()).to.eql("very happy")
        })

        it('should finish the walk', () => {
          const smallDog = new Dog(Size.Small)
          const dist = 100;
          const distWalked = smallDog.walk(dist)

          expect(distWalked).to.eql(dist)
        })
      })

      describe("when you dont take a single step", () => {

        it("should make the dog sad", () => {
          const smallDog = new Dog(Size.Small)
          smallDog.walk(0)

          expect(smallDog.getHappiness()).to.eql("sad")
        })

        it("the dog will not be tired", () => {
          const smallDog = new Dog(Size.Small)
          smallDog.walk(0)

          expect(smallDog.getTiredness()).to.eql(0)
        })

        it('distance walked should be 0', () => {
          const smallDog = new Dog(Size.Small)
          const distWalked = smallDog.walk(0);

          expect(distWalked).to.eql(0);
        })

      })

      describe("when you walk the dog too far", () => {
        const distance = 1000;

        it("should make the dog sad", () => {
          const smallDog = new Dog(Size.Small)
          smallDog.walk(distance)

          expect(smallDog.getHappiness()).to.eql("sad")
        })
        it("the dog will be too tired to finish the walk", () => {
          const smallDog = new Dog(Size.Small)
          const distWalked = smallDog.walk(distance);

          expect(smallDog.getTiredness()).to.eql(100)
          expect(distWalked).to.be.lessThan(distance);
          expect(distWalked).to.eql(300)
        })

      })

    })
  })

  describe("Given you have a large dog", () => {
    describe("when you take it on a walk", () => {
      describe("when the walk is long", () => {
        const distance = 300;
        it("should make the dog tired", () => {
          const largeDog = new Dog(Size.Large)
          largeDog.walk(distance)

          expect(largeDog.getTiredness()).to.eql(100)
        })

        it("should make the dog very happy", () => {
          const largeDog = new Dog(Size.Large)
          largeDog.walk(distance)
          expect(largeDog.getHappiness()).to.eql("very happy")
        })

        it('should finish the walk', () => {
          const largeDog = new Dog(Size.Large)
          const distWalked = largeDog.walk(distance)

          expect(distWalked).to.eql(distance)
        })
      })

      describe("when you dont take a single step", () => {
        const distance = 0;
        it("should make the dog sad", () => {
          const largeDog = new Dog(Size.Large)
          largeDog.walk(distance)

          expect(largeDog.getHappiness()).to.eql("sad")
        })

        it("the dog will not be tired", () => {
          const largeDog = new Dog(Size.Large)
          largeDog.walk(distance)

          expect(largeDog.getTiredness()).to.eql(0)
        })

        it('distance walked should be 0', () => {
          const largeDog = new Dog(Size.Large)
          const distWalked = largeDog.walk(distance);

          expect(distWalked).to.eql(0);
        })

      })

      describe("when you walk the dog too far", () => {
        const distance = 1000;

        it("should make the dog sad", () => {
          const largeDog = new Dog(Size.Large)
          largeDog.walk(distance)

          expect(largeDog.getHappiness()).to.eql("sad")
        })
        it("the dog will be too tired to finish the walk", () => {
          const largeDog = new Dog(Size.Small)
          const distWalked = largeDog.walk(distance);

          expect(largeDog.getTiredness()).to.eql(100)
          expect(distWalked).to.be.lessThan(distance);
          expect(distWalked).to.eql(900)
        })

      })

    })
  })

  describe("Given you have a medium dog", () => {
    describe("when you take it on a walk", () => {
      describe("when the walk is long", () => {
        const distance = 200;
        it("should make the dog tired", () => {
          const mediumDog = new Dog(Size.Medium)
          mediumDog.walk(distance)

          expect(mediumDog.getTiredness()).to.eql(100)
        })

        it("should make the dog very happy", () => {
          const mediumDog = new Dog(Size.Medium)
          mediumDog.walk(distance)
          expect(mediumDog.getHappiness()).to.eql("very happy")
        })

        it('should finish the walk', () => {
          const mediumDog = new Dog(Size.Medium)
          const distWalked = mediumDog.walk(distance)

          expect(distWalked).to.eql(distance)
        })
      })

      describe("when you dont take a single step", () => {

        it("should make the dog sad", () => {
          const mediumDog = new Dog(Size.Medium)
          mediumDog.walk(0)

          expect(mediumDog.getHappiness()).to.eql("sad")
        })

        it("the dog will not be tired", () => {
          const mediumDog = new Dog(Size.Medium)
          mediumDog.walk(0)

          expect(mediumDog.getTiredness()).to.eql(0)
        })

        it('distance walked should be 0', () => {
          const mediumDog = new Dog(Size.Medium)
          const distWalked = mediumDog.walk(0);

          expect(distWalked).to.eql(0);
        })

      })

      describe("when you walk the dog too far", () => {
        const distance = 1000;

        it("should make the dog sad", () => {
          const mediumDog = new Dog(Size.Medium)
          mediumDog.walk(distance)

          expect(mediumDog.getHappiness()).to.eql("sad")
        })
        it("the dog will be too tired to finish the walk", () => {
          const mediumDog = new Dog(Size.Small)
          const distWalked = mediumDog.walk(distance);

          expect(mediumDog.getTiredness()).to.eql(100)
          expect(distWalked).to.be.lessThan(distance);
          expect(distWalked).to.eql(600)
        })

      })

    })
  })

})


