/*
  Cards are represented by a number - 0 for 10 and face cards, 1 for aces, 2 for 2, 3 for 3, etc.
*/

const getMoves = (decks, hand, dealerCard) => {
  /**
    * Steps:
      * Make array of card numbers (2 through 11 or 1 through 10, count face cards as all 10s for now)
      * Loop over each potential dealer hidden card
      * Determine expected value of hit and stand at each step
      * Save results to an array to allow access at any point in tree (so recalculation is unecessary, ignore this at first)
    */
  
  const cards = [16, 4, 4, 4, 4, 4, 4, 4, 4, 4]; // 10s (+face cards), aces, 2, 3, 4, 5, 6, 7, 8, 9
  --cards[dealerCard];
};
