// prompt-enhancer-backend.js
const express = require('express');
const bodyParser = require('body-parser');

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(express.static('public'));

// Prompt Enhancer Agent
class PromptEnhancerAgent {
  constructor() {
    this.techUpgrades = {
      frontend: {
        basic: ['HTML', 'CSS', 'JavaScript'],
        enhanced: ['React', 'Vite', 'Tailwind CSS']
      },
      backend: {
        basic: ['Express', 'REST API'],
        enhanced: ['NestJS', 'GraphQL', 'TypeScript']
      },
      database: {
        basic: ['MongoDB', 'MySQL'],
        enhanced: ['PostgreSQL', 'Prisma ORM']
      },
      deployment: {
        basic: ['manual upload'],
        enhanced: ['Docker', 'CI/CD', 'Vercel']
      }
    };
    
    this.bestPractices = [
      'Use TypeScript for type safety',
      'Implement responsive design',
      'Follow component-based architecture',
      'Include proper error handling',
      'Add basic accessibility features',
      'Set up a proper project structure',
      'Implement dark/light theme toggle',
      'Add loading states and error boundaries'
    ];
  }

  enhancePrompt(userPrompt) {
    // Detect request type
    const requestType = this.detectRequestType(userPrompt);
    
    // Base enhanced prompt
    let enhancedPrompt = `Enhanced version of request: "${userPrompt}"\n\n`;
    
    // Add project setup
    enhancedPrompt += this.addProjectSetup(requestType);
    
    // Add specific enhancements based on request type
    enhancedPrompt += this.addSpecificEnhancements(requestType, userPrompt);
    
    // Add best practices
    enhancedPrompt += this.addBestPractices(requestType);
    
    // Add implementation steps
    enhancedPrompt += this.addImplementationSteps(requestType);
    
    return enhancedPrompt;
  }
  
  detectRequestType(userPrompt) {
    const prompt = userPrompt.toLowerCase();
    
    if (prompt.includes('website') || prompt.includes('web app') || 
        prompt.includes('landing page') || prompt.includes('frontend')) {
      return 'website';
    } else if (prompt.includes('api') || prompt.includes('backend') || 
              prompt.includes('server')) {
      return 'backend';
    } else if (prompt.includes('full stack') || prompt.includes('fullstack') || 
              (prompt.includes('website') && 
              (prompt.includes('database') || prompt.includes('backend')))) {
      return 'fullstack';
    } else {
      // Default to website if unclear
      return 'website';
    }
  }
  
  addProjectSetup(requestType) {
    let setup = "## Enhanced Project Setup\n\n";
    
    if (requestType === 'website' || requestType === 'fullstack') {
      setup += "### Frontend\n";
      setup += "- Framework: React with Vite for fast development and optimized builds\n";
      setup += "- Styling: Tailwind CSS for utility-first styling approach\n";
      setup += "- Language: TypeScript for type safety and better developer experience\n";
      setup += "- State Management: React Context API or Zustand for simpler state management\n\n";
    }
    
    if (requestType === 'backend' || requestType === 'fullstack') {
      setup += "### Backend\n";
      setup += "- Framework: NestJS with TypeScript\n";
      setup += "- API: GraphQL for flexible data fetching\n";
      setup += "- Database: PostgreSQL with Prisma ORM\n";
      setup += "- Authentication: JWT with refresh token strategy\n\n";
    }
    
    if (requestType === 'fullstack') {
      setup += "### Development Environment\n";
      setup += "- Docker for consistent development environments\n";
      setup += "- ESLint and Prettier for code quality\n";
      setup += "- GitHub Actions for CI/CD pipeline\n";
      setup += "- Deployment: Vercel (frontend) and Railway/Render (backend)\n\n";
    }
    
    return setup;
  }
  
  addSpecificEnhancements(requestType, userPrompt) {
    let enhancements = "## Specific Enhancements\n\n";
    
    if (requestType === 'website') {
      enhancements += "- Replace basic HTML/CSS with React components using Tailwind CSS\n";
      enhancements += "- Add responsive design using Tailwind's breakpoint system\n";
      enhancements += "- Implement proper routing with React Router\n";
      enhancements += "- Use React hooks for state management\n";
      enhancements += "- Add animations using Framer Motion for better UX\n";
      enhancements += "- Implement lazy loading for images and components\n";
    } else if (requestType === 'backend') {
      enhancements += "- Use NestJS modules for better organization\n";
      enhancements += "- Implement GraphQL API instead of REST\n";
      enhancements += "- Add proper validation with class-validator\n";
      enhancements += "- Set up comprehensive error handling\n";
      enhancements += "- Add request logging middleware\n";
      enhancements += "- Implement rate limiting for API endpoints\n";
    } else if (requestType === 'fullstack') {
      enhancements += "- Create a monorepo structure with pnpm workspace\n";
      enhancements += "- Share types between frontend and backend\n";
      enhancements += "- Use GraphQL codegen for type-safe queries\n";
      enhancements += "- Implement authentication with JWT and refresh tokens\n";
      enhancements += "- Add end-to-end testing with Cypress\n";
      enhancements += "- Set up database migrations and seeding\n";
    }
    
    enhancements += "\n";
    return enhancements;
  }
  
  addBestPractices(requestType) {
    let practices = "## Best Practices\n\n";
    
    // Select relevant best practices based on request type
    const relevantPractices = this.bestPractices.filter(practice => {
      if (requestType === 'website' && 
          !practice.toLowerCase().includes('database')) {
        return true;
      }
      if (requestType === 'backend' && 
          !practice.toLowerCase().includes('theme')) {
        return true;
      }
      if (requestType === 'fullstack') {
        return true;
      }
      return false;
    });
    
    relevantPractices.forEach(practice => {
      practices += `- ${practice}\n`;
    });
    
    practices += "\n";
    return practices;
  }
  
  addImplementationSteps(requestType) {
    let steps = "## Implementation Steps\n\n";
    
    if (requestType === 'website' || requestType === 'fullstack') {
      steps += "### Frontend Setup\n";
      steps += "1. Initialize a new Vite project with React and TypeScript template:\n";
      steps += "   ```bash\n   npm create vite@latest my-app --template react-ts\n   ```\n";
      steps += "2. Install Tailwind CSS and necessary dependencies:\n";
      steps += "   ```bash\n   npm install -D tailwindcss postcss autoprefixer\n   npx tailwindcss init -p\n   ```\n";
      steps += "3. Configure Tailwind CSS in the project\n";
      steps += "4. Create responsive layouts with Tailwind's utility classes\n";
      steps += "5. Implement component structure and routing\n\n";
    }
    
    if (requestType === 'backend' || requestType === 'fullstack') {
      steps += "### Backend Setup\n";
      steps += "1. Create a new NestJS project:\n";
      steps += "   ```bash\n   npm i -g @nestjs/cli\n   nest new backend\n   ```\n";
      steps += "2. Set up GraphQL with NestJS:\n";
      steps += "   ```bash\n   npm i @nestjs/graphql @nestjs/apollo graphql apollo-server-express\n   ```\n";
      steps += "3. Configure PostgreSQL with Prisma:\n";
      steps += "   ```bash\n   npm install prisma @prisma/client\n   npx prisma init\n   ```\n";
      steps += "4. Define database schema and generate Prisma client\n";
      steps += "5. Create GraphQL resolvers and services\n\n";
    }
    
    if (requestType === 'fullstack') {
      steps += "### Integration Steps\n";
      steps += "1. Set up shared types between frontend and backend\n";
      steps += "2. Implement API fetching on frontend using Apollo Client\n";
      steps += "3. Set up authentication flow between frontend and backend\n";
      steps += "4. Configure deployment pipeline for both services\n\n";
    }
    
    return steps;
  }
  
  // Process user request
  processUserRequest(userRequest) {
    return this.enhancePrompt(userRequest);
  }
}

// Create agent instance
const promptEnhancer = new PromptEnhancerAgent();

// API endpoint for enhancing prompts
app.post('/api/enhance', (req, res) => {
  const { prompt } = req.body;
  
  if (!prompt) {
    return res.status(400).json({ error: 'Prompt is required' });
  }
  
  const enhancedPrompt = promptEnhancer.processUserRequest(prompt);
  res.json({ enhancedPrompt });
});

// HTML form for command line usage
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Prompt Enhancer</title>
      <style>
        body { font-family: Arial, sans-serif; max-width: 800px; margin: 0 auto; padding: 20px; }
        textarea { width: 100%; height: 100px; margin: 10px 0; padding: 10px; }
        button { padding: 10px 15px; background: #4CAF50; color: white; border: none; cursor: pointer; }
        pre { background: #f5f5f5; padding: 15px; white-space: pre-wrap; border-radius: 5px; }
      </style>
    </head>
    <body>
      <h1>AI Prompt Enhancer</h1>
      <p>Enter your basic request and get an enhanced version with modern tech stack recommendations.</p>
      
      <textarea id="promptInput" placeholder="Example: Create me a website"></textarea>
      <button onclick="enhancePrompt()">Enhance Prompt</button>
      
      <h2>Enhanced Prompt:</h2>
      <pre id="output">Your enhanced prompt will appear here...</pre>
      
      <script>
        async function enhancePrompt() {
          const prompt = document.getElementById('promptInput').value;
          
          if (!prompt) {
            alert('Please enter a prompt');
            return;
          }
          
          try {
            const response = await fetch('/api/enhance', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ prompt }),
            });
            
            const data = await response.json();
            
            if (data.error) {
              document.getElementById('output').textContent = 'Error: ' + data.error;
            } else {
              document.getElementById('output').textContent = data.enhancedPrompt;
            }
          } catch (error) {
            document.getElementById('output').textContent = 'Error: ' + error.message;
          }
        }
      </script>
    </body>
    </html>
  `);
});

// Command line interface implementation
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Check if this file is being run directly
if (require.main === module) {
  console.log('=================================');
  console.log('AI Prompt Enhancer - CLI Mode');
  console.log('=================================');
  console.log('Type your prompt or "exit" to quit');
  console.log('Server is also running on http://localhost:' + PORT);
  console.log('=================================\n');
  
  promptUser();
} else {
  // Only start the server when imported as a module
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

function promptUser() {
  rl.question('\nEnter your prompt: ', (input) => {
    if (input.toLowerCase() === 'exit') {
      console.log('Goodbye!');
      rl.close();
      process.exit(0);
    } else {
      const enhancedPrompt = promptEnhancer.processUserRequest(input);
      console.log('\n' + enhancedPrompt);
      promptUser(); // Ask for another prompt
    }
  });
}

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});