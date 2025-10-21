const { createCanvas } = require('canvas');
const fs = require('fs');

// Create a 1800x840 canvas (15 cols × 7 rows)
const width = 1800;
const height = 840;
const canvas = createCanvas(width, height);
const ctx = canvas.getContext('2d');

// Fill white background
ctx.fillStyle = 'white';
ctx.fillRect(0, 0, width, height);

const cols = 15;
const rows = 7;
const spriteW = 120;
const spriteH = 120;

const colors = ['#2c3e50', '#34495e', '#7f8c8d', '#95a5a6', '#3498db', '#e74c3c', '#2ecc71'];

// Draw 105 simple stick figures
for (let row = 0; row < rows; row++) {
  for (let col = 0; col < cols; col++) {
    const x = col * spriteW;
    const y = row * spriteH;
    const color = colors[(row * cols + col) % colors.length];

    const centerX = x + spriteW / 2;
    const centerY = y + spriteH / 2;

    ctx.fillStyle = color;
    ctx.strokeStyle = color;
    ctx.lineWidth = 8;

    // Head
    ctx.beginPath();
    ctx.arc(centerX, centerY - 20, 18, 0, Math.PI * 2);
    ctx.fill();

    // Body
    ctx.fillRect(centerX - 5, centerY - 2, 10, 35);

    // Arms (slightly different positions for variety)
    const armOffset = (col % 3) * 3 - 3;
    ctx.fillRect(centerX - 22, centerY + armOffset, 18, 8);
    ctx.fillRect(centerX + 4, centerY + armOffset, 18, 8);

    // Legs (different leg positions)
    const legOffset = (col % 2) * 5;
    ctx.fillRect(centerX - 12, centerY + 33, 8, 22 + legOffset);
    ctx.fillRect(centerX + 4, centerY + 33, 8, 22 - legOffset);
  }
}

// Save as PNG
const buffer = canvas.toBuffer('image/png');
fs.writeFileSync('public/images/peeps/all-peeps.png', buffer);

console.log('✅ Successfully created sprite sheet: public/images/peeps/all-peeps.png');
console.log('📊 Size: 1800×840 pixels (15 columns × 7 rows = 105 sprites)');
console.log('🎨 Each sprite: 120×120 pixels');
