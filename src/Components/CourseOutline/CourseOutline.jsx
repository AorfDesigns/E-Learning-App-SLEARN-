import React, { useState } from 'react';

const CourseOutline = () => {
  const [section, setSection] = useState(1);

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">Advanced React Course Outline</h1>
      <div className="flex justify-between mb-4">
        <button
          className={`px-4 py-2 rounded-full ${section === 1 ? 'bg-orange-400 text-white' : 'bg-gray-800 text-white'}`}
          onClick={() => setSection(1)}
        >
          Section 1
        </button>
        <button
          className={`px-4 py-2 rounded-full ${section === 2 ? 'bg-orange-400 text-white' : 'bg-gray-800 text-white'}`}
          onClick={() => setSection(2)}
        >
          Section 2
        </button>
        <button
          className={`px-4 py-2 rounded-full ${section === 3 ? 'bg-orange-400 text-white' : 'bg-gray-800 text-white'}`}
          onClick={() => setSection(3)}
        >
          Section 3
        </button>
      </div>

      {section === 1 && (
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Section 1: Advanced Component Patterns</h2>
          <div>
            <h3 className="text-xl font-medium">1.1 Higher-Order Components (HOCs)</h3>
            <p>Higher-Order Components are functions that take a component and return a new component...</p>
          </div>
          <div>
            <h3 className="text-xl font-medium">1.2 Render Props</h3>
            <p>Render props are a technique for sharing code between React components using a prop whose value is a function...</p>
          </div>
          <div>
            <h3 className="text-xl font-medium">1.3 Compound Components</h3>
            <p>Compound components are a pattern where multiple components work together to create a more complex component...</p>
          </div>
        </div>
      )}

      {section === 2 && (
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Section 2: State Management with Context and Reducers</h2>
          <div>
            <h3 className="text-xl font-medium">2.1 Context API</h3>
            <p>The Context API is a way to manage state globally. It is an alternative to prop drilling and is useful for passing down state...</p>
          </div>
          <div>
            <h3 className="text-xl font-medium">2.2 useReducer Hook</h3>
            <p>The useReducer hook is an alternative to useState for managing complex state logic...</p>
          </div>
        </div>
      )}

      {section === 3 && (
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Section 3: Performance Optimization</h2>
          <div>
            <h3 className="text-xl font-medium">3.1 Memoization with useMemo and useCallback</h3>
            <p>Memoization helps to avoid unnecessary re-renders by caching the results of expensive calculations...</p>
          </div>
          <div>
            <h3 className="text-xl font-medium">3.2 React.memo</h3>
            <p>React.memo is a higher-order component that memoizes a functional component...</p>
          </div>
          <div>
            <h3 className="text-xl font-medium">3.3 Lazy Loading with React.lazy and Suspense</h3>
            <p>Lazy loading allows you to load components only when they are needed, reducing the initial load time of your application...</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CourseOutline;
