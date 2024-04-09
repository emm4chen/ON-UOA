import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useState } from 'react';
import Home from '@pages/Home';
import EventDetails from '@pages/EventDetails';
const router = createBrowserRouter([
  {
    path: '/:EventID',
    element: <EventDetails />,
  },
  {
    path: '/:name',
    element: <Home />,
  }
]);

export default function App() {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}
