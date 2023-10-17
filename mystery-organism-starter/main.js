// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

const pAequorFactory = (num, arr) => {
  return {
    specimenNum: num,
    dna: arr,
    mutate() {
      let randIndex = Math.floor(Math.random() * this.dna.length);
      let newBase = returnRandBase();
      while (newBase === this.dna[randIndex]) {
        newBase = returnRandBase();
      }
      this.dna[randIndex] = newBase;
    },
    compareDNA(pAequor) {
      let commonCount = 0;
      for (let i = 0; i < this.dna.length; i++) {
        if (this.dna[i] === pAequor.dna[i]) {
          commonCount++;
        }
      }
      const commonPercentage = (commonCount / this.dna.length) * 100;
      console.log(`Specimen #${this.specimenNum} and Specimen #${pAequor.specimenNum} have ${commonPercentage}% DNA in common.`);
    },
    willLikelySurvive() {
      const cgCount = this.dna.filter(base => base === 'C' || base === 'G').length;
      const survivalPercentage = (cgCount / this.dna.length) * 100;
      return survivalPercentage >= 60;
    }
  };
}

const survivalAequor = [];

while (survivalAequor.length < 30) {
  const dna = mockUpStrand();
  const aequor = pAequorFactory(survivalAequor.length + 1, dna);

  if (aequor.willLikelySurvive()) {
    survivalAequor.push(aequor);
  }
}

console.log(survivalAequor);



// let abc = mockUpStrand();
// console.log(abc);

// let def = pAequorFactory(1, abc);
// console.log("Original DNA:", def.dna);
// def.mutate();
// console.log("Mutated DNA:", def.dna);

// const ghi = pAequorFactory(2, mockUpStrand());

// console.log("Original DNA of def:", def.dna);
// console.log("Original DNA of ghi:", ghi.dna);

// def.compareDNA(ghi); // Compare the DNA of def and ghi

// console.log("Will likely survive:", def.willLikelySurvive());
