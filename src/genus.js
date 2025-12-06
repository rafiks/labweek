/**
 * Generate genus name based on first name and birth year
 * Rules: First 3 letters of first name + suffix based on last digit of birth year
 * If last letter is a vowel, use suffix starting with consonant
 * If last letter is a consonant, use suffix starting with vowel
 */
export function generateGenus(firstName, birthYear) {
  const prefix = firstName.substring(0, 3).toLowerCase();
  const lastDigit = birthYear % 10;
  const lastLetter = prefix.charAt(2).toLowerCase();
  
  // Check if last letter is a vowel
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  const isVowel = vowels.includes(lastLetter);

  // Each digit has two options: one starting with vowel, one with consonant
  const genusSuffixMap = {
    0: { vowel: 'ridium', consonant: 'idium' },
    1: { vowel: 'obacter', consonant: 'bacter' },
    2: { vowel: 'ophilus', consonant: 'philus' },
    3: { vowel: 'ophyticus', consonant: 'phyticus' },
    4: { vowel: 'isteria', consonant: 'steria' },
    5: { vowel: 'oteus', consonant: 'teus' },
    6: { vowel: 'omonas', consonant: 'monas' },
    7: { vowel: 'illus', consonant: 'llus' },
    8: { vowel: 'etella', consonant: 'tella' },
    9: { vowel: 'ococcus', consonant: 'coccus' }
  };

  // If prefix ends with vowel, use consonant suffix; if consonant, use vowel suffix
  const suffix = isVowel ? genusSuffixMap[lastDigit].consonant : genusSuffixMap[lastDigit].vowel;
  
  // Capitalize first letter for proper genus naming convention
  const genus = prefix.charAt(0).toUpperCase() + prefix.slice(1) + suffix;
  
  return genus;
}
