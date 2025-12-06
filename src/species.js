/**
 * Generate species name based on last name and birth month
 * Rules: First 3 letters of last name + suffix based on birth month
 * If last letter is a vowel, use suffix starting with consonant
 * If last letter is a consonant, use suffix starting with vowel
 */
export function generateSpecies(lastName, birthMonth) {
  const prefix = lastName.substring(0, 3).toLowerCase();
  const lastLetter = prefix.charAt(2).toLowerCase();
  
  // Check if last letter is a vowel
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  const isVowel = vowels.includes(lastLetter);

  // Each month has two options: one starting with vowel, one with consonant
  const speciesSuffixMap = {
    1: { vowel: 'aris', consonant: 'garis' },        // January
    2: { vowel: 'ogenes', consonant: 'genes' },      // February
    3: { vowel: 'enesis', consonant: 'nesis' },      // March
    4: { vowel: 'ificus', consonant: 'nificus' },    // April
    5: { vowel: 'abilis', consonant: 'bilis' },      // May
    6: { vowel: 'anii', consonant: 'nii' },          // June
    7: { vowel: 'uginosa', consonant: 'ginosa' },    // July
    8: { vowel: 'alactiae', consonant: 'lactiae' },  // August
    9: { vowel: 'inosus', consonant: 'nosus' },      // September
    10: { vowel: 'anella', consonant: 'nella' },     // October
    11: { vowel: 'ophyticus', consonant: 'phyticus' }, // November
    12: { vowel: 'estis', consonant: 'stis' }        // December
  };

  // If prefix ends with vowel, use consonant suffix; if consonant, use vowel suffix
  const suffix = isVowel ? speciesSuffixMap[birthMonth].consonant : speciesSuffixMap[birthMonth].vowel;
  const species = prefix + suffix;
  
  return species;
}
