// Legacy App entry kept for backwards-compatibility with any direct imports.
// The real route tree now lives in src/routes.tsx and is consumed by ViteReactSSG in src/main.tsx.
import React from 'react';
import Root from './Root';

const App: React.FC = () => <Root />;

export default App;
