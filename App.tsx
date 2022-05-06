import { NativeBaseProvider } from 'native-base';
import * as React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import Routes from './src/routes';

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <NativeBaseProvider>
        <Routes />
      </NativeBaseProvider>
    </QueryClientProvider>
  );
}

export default App;
