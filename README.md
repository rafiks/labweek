# 🦠 Bacteria Name Generator

A fun web application that generates unique bacterial names based on your name and date of birth!

**Inspired by the [ASCLS Laboratory Week Bacteria Names Game](https://ascls.org/wp-content/uploads/2024/04/Bacteria-Names-2024.pdf)**

## Features

- 🧬 Generate unique bacterial names based on personal information
- 🎨 Beautiful, responsive UI with gradient backgrounds
- 📄 Download your bacteria name as a PDF sticker (exactly 3" × 4")
- 🖨️ Print-ready PDF format for sticker paper
- 📱 Mobile-friendly design
- ✨ Smooth animations and transitions

## How It Works

The app creates a scientific bacterial name using a unique algorithm with intelligent vowel/consonant matching for better pronunciation.

### Genus Generation
The genus name is formed by:
- First 3 letters of your **first name**
- Plus a suffix based on the **last digit of your birth year**
- **Smart suffix selection**: If the 3rd letter is a vowel, use a consonant-starting suffix; if it's a consonant, use a vowel-starting suffix

**Suffix options by year digit:**
- 0 → idium (consonant) / ridium (vowel)
- 1 → bacter (consonant) / obacter (vowel)
- 2 → philus (consonant) / ophilus (vowel)
- 3 → phyticus (consonant) / ophyticus (vowel)
- 4 → steria (consonant) / isteria (vowel)
- 5 → teus (consonant) / oteus (vowel)
- 6 → monas (consonant) / omonas (vowel)
- 7 → llus (consonant) / illus (vowel)
- 8 → tella (consonant) / etella (vowel)
- 9 → coccus (consonant) / ococcus (vowel)

### Species Generation
The species name is formed by:
- First 3 letters of your **last name**
- Plus a suffix based on your **birth month**
- **Smart suffix selection**: If the 3rd letter is a vowel, use a consonant-starting suffix; if it's a consonant, use a vowel-starting suffix

**Suffix options by month:**
- January → garis (consonant) / aris (vowel)
- February → genes (consonant) / ogenes (vowel)
- March → nesis (consonant) / enesis (vowel)
- April → nificus (consonant) / ificus (vowel)
- May → bilis (consonant) / abilis (vowel)
- June → nii (consonant) / anii (vowel)
- July → ginosa (consonant) / uginosa (vowel)
- August → lactiae (consonant) / alactiae (vowel)
- September → nosus (consonant) / inosus (vowel)
- October → nella (consonant) / anella (vowel)
- November → phyticus (consonant) / ophyticus (vowel)
- December → stis (consonant) / estis (vowel)

## PDF Sticker Feature

After generating your bacteria name, click the **"📄 Download PDF Sticker (3" × 4")"** button to download a professionally formatted PDF file.

### PDF Specifications:
- **Exact dimensions**: 3 inches × 4 inches
- **Format**: PDF (ready to print)
- **Layout**: Centered bacteria name with decorative border
- **Colors**: Purple/blue gradient theme
- **Font sizes**: Large, bold text optimized for readability

### Printing Instructions:
1. Download the PDF file
2. Open it in any PDF viewer
3. Print settings:
   - Paper: 3" × 4" sticker paper
   - Scale: 100% (Actual size)
   - No margins
4. Print on adhesive sticker paper for best results

The PDF is automatically sized to 3" × 4" so you can print it directly on standard badge/sticker paper without any adjustments!

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open your browser to the URL shown (typically http://localhost:5173)

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Technologies Used

- **Vite** - Fast build tool and dev server
- **Vanilla JavaScript** - No framework dependencies
- **jsPDF** - PDF generation library
- **CSS3** - Modern styling with gradients and animations
- **HTML5** - Semantic markup

## Examples

**Example 1:**
- First Name: John (prefix: "joh" - ends with 'h', consonant)
- Last Name: Smith (prefix: "smi" - ends with 'i', vowel)
- Birth Date: May 15, 1990 (year ends in 0, month is 5)

**Output:**
- Genus: Johridium (consonant 'h' → vowel-starting suffix "ridium")
- Species: smibilis (vowel 'i' → consonant-starting suffix "bilis")
- Scientific Name: *Johridium smibilis*
- PDF Filename: `Johridium_smibilis_sticker.pdf`

**Example 2:**
- First Name: Alice (prefix: "ali" - ends with 'i', vowel)
- Last Name: Brown (prefix: "bro" - ends with 'o', vowel)
- Birth Date: July 22, 1985 (year ends in 5, month is 7)

**Output:**
- Genus: Aliteus (vowel 'i' → consonant-starting suffix "teus")
- Species: broginosa (vowel 'o' → consonant-starting suffix "ginosa")
- Scientific Name: *Aliteus broginosa*
- PDF Filename: `Aliteus_broginosa_sticker.pdf`

## Credits

This application is inspired by the Bacteria Names game from the [American Society for Clinical Laboratory Science (ASCLS)](https://ascls.org/) Laboratory Week activities.

## License

MIT

---

Enjoy discovering your bacterial identity! 🧪
