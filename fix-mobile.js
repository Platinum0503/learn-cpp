const fs = require('fs');
const path = require('path');

const cssBlock = `
  @media (max-width: 640px) {
    .main {
      grid-template-columns: 1fr;
    }
    .code-panel {
      border-right: none;
      border-bottom: 1px solid #2d3154;
      max-height: 240px;
    }
    .line-code {
      white-space: pre-wrap;
      word-break: break-word;
    }
    .toolbar {
      justify-content: center;
    }
    .step-counter {
      margin-left: 0;
      width: 100%;
      text-align: center;
    }
  }
`;

const dir = path.join(__dirname, 'docs', 'public');
const files = fs.readdirSync(dir).filter(f => f.startsWith('visualizer') && f.endsWith('.html'));

files.forEach(f => {
  const filePath = path.join(dir, f);
  let content = fs.readFileSync(filePath, 'utf8');
  if (content.includes('max-width: 640px')) {
    console.log(`Bo qua (da co fix): ${f}`);
    return;
  }
  content = content.replace('</style>', cssBlock + '</style>');
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Da sua: ${f}`);
});