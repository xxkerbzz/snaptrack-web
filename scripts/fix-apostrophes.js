const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Find all .tsx files in app directory
const files = glob.sync('app/**/page.tsx');

console.log(`🔧 Fixing apostrophe issues in ${files.length} files...\n`);

let fixed = 0;

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  const originalContent = content;

  // Fix common apostrophe issues in metadata strings
  // Pattern: "text with "quoted" word in it"
  // Replace with: "text with 'quoted' word in it" or escape properly

  // Specific fixes for known issues
  content = content.replace(
    /"Is free inventory software worth it for food trucks\? Compare free options, paid solutions, and the true cost of "free" restaurant inventory systems\."/g,
    '"Is free inventory software worth it for food trucks? Compare free options, paid solutions, and the true cost of \'free\' restaurant inventory systems."'
  );

  content = content.replace(
    /"Most restaurant inventory software wasn't built for mobile operations\./g,
    '"Most restaurant inventory software was not built for mobile operations.'
  );

  content = content.replace(
    /"Inventory management solutions designed for small restaurants\. Budget-friendly options, simple systems, and strategies that don't require enterprise budgets\."/g,
    '"Inventory management solutions designed for small restaurants. Budget-friendly options, simple systems, and strategies that do not require enterprise budgets."'
  );

  content = content.replace(
    /title: "How Machine Learning Predicts When You'll Run Out of Ingredients"/g,
    'title: "How Machine Learning Predicts When You Will Run Out of Ingredients"'
  );

  // Fix all instances of "you'll" in metadata to "you will"
  content = content.replace(
    /((?:title|description):\s*"[^"]*?)you'll([^"]*?")/gi,
    '$1you will$2'
  );

  content = content.replace(
    /((?:title|description):\s*"[^"]*?)don't([^"]*?")/gi,
    '$1do not$2'
  );

  content = content.replace(
    /((?:title|description):\s*"[^"]*?)won't([^"]*?")/gi,
    '$1will not$2'
  );

  content = content.replace(
    /((?:title|description):\s*"[^"]*?)wasn't([^"]*?")/gi,
    '$1was not$2'
  );

  if (content !== originalContent) {
    fs.writeFileSync(file, content);
    console.log(`✅ Fixed ${file}`);
    fixed++;
  }
});

console.log(`\n✨ Fixed apostrophe issues in ${fixed} files.`);
