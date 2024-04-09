import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useState } from 'react';
import  EventCard, { EventCardProps } from './components/eventCard';
import Home from '@pages/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Index />,
  },
  {
    path: '/:name',
    element: <Home />,
  },
]);

function Index(){

  const events: EventCardProps[] = [
    {event: {
      name: "DEVS",
      date: new Date,
      location: "OGGB",
      price: 3,
      type: "tech",
      description: "fun social event",
    }},
    {event: {
      name: "WDCC",
      date: new Date,
      location: "Engineering",
      price: 2,
      type: "social",
      description: "fun tech event",
    }},
  ]

  return (
    <>
    {
      events.map((({event}) => (
        <EventCard event={event}/>
      )))
    }
    </>
  )
}



export default function App() {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}
