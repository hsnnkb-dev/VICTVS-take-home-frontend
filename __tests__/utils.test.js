import { handleAddFilters } from "../src/utils/FilterUtils"

describe('Util tests', () => {
  describe('handleAddFilters()', () => { 
    test('it returns an object', () => {
      const actualOutput = handleAddFilters();
      expect(typeof actualOutput).toBe('object');
    })
  })
})