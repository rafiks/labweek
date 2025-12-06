import './style.css'
import { generateGenus } from './genus.js'
import { generateSpecies } from './species.js'
import { jsPDF } from 'jspdf'

// Get form and result elements
const form = document.getElementById('bacteria-form');
const resultDiv = document.getElementById('result');
const genusResult = document.getElementById('genusResult');
const speciesResult = document.getElementById('speciesResult');
const fullName = document.getElementById('fullName');
const printBtn = document.getElementById('printBtn');

// Get print template elements
const printGenus = document.getElementById('printGenus');
const printSpecies = document.getElementById('printSpecies');

// Store current bacteria name
let currentGenus = '';
let currentSpecies = '';

// Handle form submission
form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // Get form values
  const firstName = document.getElementById('firstName').value.trim();
  const lastName = document.getElementById('lastName').value.trim();
  const birthDate = document.getElementById('birthDate').value;
  
  // Parse birth date
  const date = new Date(birthDate);
  const birthYear = date.getFullYear();
  const birthMonth = date.getMonth() + 1; // JavaScript months are 0-indexed
  
  // Generate bacteria names
  currentGenus = generateGenus(firstName, birthYear);
  currentSpecies = generateSpecies(lastName, birthMonth);
  
  // Display results on screen
  genusResult.textContent = currentGenus;
  speciesResult.textContent = currentSpecies;
  fullName.textContent = `${currentGenus} ${currentSpecies}`;
  
  // Update print template
  printGenus.textContent = currentGenus;
  printSpecies.textContent = currentSpecies;
  
  // Show result div with animation
  resultDiv.classList.remove('hidden');
  resultDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
});

// Function to generate PDF sticker
function generatePDFSticker() {
  // Create PDF with exact 3" x 4" dimensions (in points: 1 inch = 72 points)
  const width = 3 * 72;  // 3 inches = 216 points
  const height = 4 * 72; // 4 inches = 288 points
  
  const pdf = new jsPDF({
    orientation: 'portrait',
    unit: 'pt',
    format: [width, height]
  });

  // Set background color (light gradient effect using a light color)
  pdf.setFillColor(245, 247, 250);
  pdf.rect(0, 0, width, height, 'F');

  // Add border
  pdf.setDrawColor(102, 126, 234); // #667eea
  pdf.setLineWidth(3);
  pdf.rect(5, 5, width - 10, height - 10);

  // Calculate center positions
  const centerX = width / 2;
  const centerY = height / 2;

  // Add genus name (top, centered)
  pdf.setTextColor(102, 126, 234); // #667eea
  pdf.setFontSize(48);
  pdf.setFont('helvetica', 'bold');
  
  // Get text width to center it
  const genusWidth = pdf.getTextWidth(currentGenus);
  pdf.text(currentGenus, centerX - (genusWidth / 2), centerY - 30);

  // Add species name (bottom, centered)
  pdf.setTextColor(118, 75, 162); // #764ba2
  pdf.setFontSize(42);
  pdf.setFont('helvetica', 'bold');
  
  const speciesWidth = pdf.getTextWidth(currentSpecies);
  pdf.text(currentSpecies, centerX - (speciesWidth / 2), centerY + 40);

  // Save the PDF
  pdf.save(`${currentGenus}_${currentSpecies}_sticker.pdf`);
}

// Handle print button click
printBtn.addEventListener('click', () => {
  generatePDFSticker();
});
