"use client";

import { notFound } from "next/navigation";
import BlogPostClient from "@/components/blog-post-client";

// This would typically come from a CMS or database
const blogPosts = [
  {
    id: 1,
    title: "Building Responsive Layouts with CSS Grid",
    excerpt:
      "Learn how to create complex, responsive layouts using CSS Grid with practical examples.",
    content: `
      <p>CSS Grid Layout is a two-dimensional layout system designed for the web. It lets you lay content out in rows and columns, and has many features that make building complex layouts straightforward.</p>
      
      <h2>Getting Started with CSS Grid</h2>
      <p>To get started with CSS Grid, you need to define a container element as a grid with <code>display: grid</code>, set the column and row sizes with <code>grid-template-columns</code> and <code>grid-template-rows</code>, and then place its child elements into the grid with properties like <code>grid-column</code> and <code>grid-row</code>.</p>
      
      <h2>Creating a Basic Grid</h2>
      <p>Here's a simple example of a grid with three equal columns:</p>
      <pre><code>.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;
}</code></pre>

      <h2>Responsive Grids with minmax() and auto-fill</h2>
      <p>One of the most powerful features of CSS Grid is the ability to create responsive layouts without media queries using functions like <code>minmax()</code> and <code>auto-fill</code>:</p>
      <pre><code>.responsive-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 20px;
}</code></pre>

      <h2>Grid Areas for Complex Layouts</h2>
      <p>For more complex layouts, you can use named grid areas:</p>
      <pre><code>.layout {
  display: grid;
  grid-template-areas:
    "header header header"
    "sidebar content content"
    "footer footer footer";
  grid-template-rows: auto 1fr auto;
  grid-template-columns: 200px 1fr 1fr;
}</code></pre>

      <h2>Conclusion</h2>
      <p>CSS Grid is a powerful tool for creating complex, responsive layouts with clean, easy-to-understand CSS. By mastering Grid, you can simplify your layout code and create more flexible designs.</p>
    `,
    image: "/placeholder.svg?height=300&width=500",
    date: "May 15, 2023",
    readTime: "5 min read",
    slug: "building-responsive-layouts",
    author: {
      name: "John Doe",
      avatar: "/placeholder.svg?height=100&width=100",
    },
  },
  {
    id: 2,
    title: "State Management in React: Context API vs. Redux",
    excerpt:
      "A comparison of different state management approaches in React applications.",
    content: `
      <p>State management is a critical aspect of building React applications, especially as they grow in size and complexity. In this article, we'll compare two popular state management solutions: React's built-in Context API and Redux.</p>
      
      <h2>React Context API</h2>
      <p>The Context API is built into React and provides a way to pass data through the component tree without having to pass props down manually at every level.</p>
      
      <h3>Pros of Context API:</h3>
      <ul>
        <li>Built into React, no additional dependencies</li>
        <li>Simpler setup compared to Redux</li>
        <li>Sufficient for many applications</li>
        <li>Easier learning curve</li>
      </ul>
      
      <h3>Cons of Context API:</h3>
      <ul>
        <li>Performance concerns with frequent updates</li>
        <li>Less developer tooling compared to Redux</li>
        <li>Can become unwieldy in very large applications</li>
      </ul>
      
      <h2>Redux</h2>
      <p>Redux is a predictable state container for JavaScript apps, often used with React. It helps you write applications that behave consistently and are easier to test.</p>
      
      <h3>Pros of Redux:</h3>
      <ul>
        <li>Predictable state management with a single source of truth</li>
        <li>Powerful developer tools for debugging</li>
        <li>Middleware support for async operations</li>
        <li>Large ecosystem and community</li>
      </ul>
      
      <h3>Cons of Redux:</h3>
      <ul>
        <li>More boilerplate code</li>
        <li>Steeper learning curve</li>
        <li>Might be overkill for simple applications</li>
      </ul>
      
      <h2>When to Use Each</h2>
      <p><strong>Use Context API when:</strong></p>
      <ul>
        <li>Your application is small to medium sized</li>
        <li>Your state updates are infrequent</li>
        <li>You want to avoid additional dependencies</li>
      </ul>
      
      <p><strong>Use Redux when:</strong></p>
      <ul>
        <li>Your application is large with complex state logic</li>
        <li>You need powerful debugging capabilities</li>
        <li>You have frequent state updates that need to be optimized</li>
        <li>You need middleware for handling side effects</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>Both Context API and Redux have their place in React development. The best choice depends on your specific application needs, team familiarity, and the complexity of your state management requirements. Many modern applications even use a combination of both: Context for simpler, more localized state, and Redux for more complex global state management.</p>
    `,
    image: "/placeholder.svg?height=300&width=500",
    date: "April 22, 2023",
    readTime: "8 min read",
    slug: "state-management-react",
    author: {
      name: "John Doe",
      avatar: "/placeholder.svg?height=100&width=100",
    },
  },
  {
    id: 3,
    title: "Getting Started with TypeScript in React Projects",
    excerpt:
      "A beginner's guide to integrating TypeScript into your React projects for type safety.",
    content: `
      <p>TypeScript has become increasingly popular in the React ecosystem, offering type safety and improved developer experience. This guide will help you get started with TypeScript in your React projects.</p>
      
      <h2>Why TypeScript with React?</h2>
      <p>TypeScript adds static type checking to JavaScript, which can help catch errors during development rather than at runtime. When used with React, it provides:</p>
      <ul>
        <li>Better autocomplete and IntelliSense in your editor</li>
        <li>Type checking for props, state, and other React patterns</li>
        <li>Safer refactoring</li>
        <li>Improved documentation through type definitions</li>
      </ul>
      
      <h2>Setting Up a New React Project with TypeScript</h2>
      <p>The easiest way to start a new React project with TypeScript is to use Create React App with the TypeScript template:</p>
      <pre><code>npx create-react-app my-app --template typescript</code></pre>
      
      <h2>Adding TypeScript to an Existing React Project</h2>
      <p>If you have an existing React project, you can add TypeScript by installing the necessary dependencies:</p>
      <pre><code>npm install --save typescript @types/node @types/react @types/react-dom @types/jest</code></pre>
      <p>Then create a <code>tsconfig.json</code> file in your project root:</p>
      <pre><code>{
  "compilerOptions": {
    "target": "es5",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noFallthroughCasesInSwitch": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx"
  },
  "include": ["src"]
}</code></pre>
      
      <h2>Basic TypeScript Patterns in React</h2>
      
      <h3>Typing Component Props</h3>
      <pre><code>type ButtonProps = {
  text: string;
  onClick: () => void;
  disabled?: boolean;
};

const Button: React.FC<ButtonProps> = ({ text, onClick, disabled = false }) => {
  return (
    <button onClick={onClick} disabled={disabled}>
      {text}
    </button>
  );
};</code></pre>
      
      <h3>Typing Component State</h3>
      <pre><code>interface State {
  count: number;
  isActive: boolean;
}

const [state, setState] = useState<State>({
  count: 0,
  isActive: false
});</code></pre>
      
      <h3>Typing Event Handlers</h3>
      <pre><code>const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  setInputValue(event.target.value);
};</code></pre>
      
      <h2>Common TypeScript Utilities for React</h2>
      <p>React with TypeScript provides several utility types that are helpful:</p>
      <ul>
        <li><code>React.ReactNode</code> - For anything that can be rendered</li>
        <li><code>React.FC</code> or <code>React.FunctionComponent</code> - For function components</li>
        <li><code>React.CSSProperties</code> - For style objects</li>
        <li><code>React.ChangeEvent</code>, <code>React.FormEvent</code>, etc. - For event types</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>TypeScript adds a valuable layer of type safety to React applications, improving developer experience and code quality. While there is a learning curve, the benefits of catching errors early and having better tooling support make it worth the investment for most projects.</p>
    `,
    image: "/placeholder.svg?height=300&width=500",
    date: "March 10, 2023",
    readTime: "6 min read",
    slug: "typescript-react-projects",
    author: {
      name: "John Doe",
      avatar: "/placeholder.svg?height=100&width=100",
    },
  },
];

interface PageProps {
  params: {
    slug: string;
  };
}

export default function BlogPostClientPage({ params }: PageProps) {
  const post = blogPosts.find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen pt-16">
      <BlogPostClient post={post} />
    </main>
  );
}
