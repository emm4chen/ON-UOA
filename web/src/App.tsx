import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useState } from 'react';
import  EventCard, { EventCardProps } from './components/eventCard';
import Home from '@pages/Home';

const Index = () => (
  <>
  {events.map(({event}) => (
    <EventCard event={event} />
  ))}
  </>
)


const router = createBrowserRouter([
  {
    path: '/:name',
    element: <Home />,
  },
  {
    path: '/',
    element: <Index />
  },
]);


const events: EventCardProps[] = [
  {event: {
    name: "DEVS",
    date: new Date(),
    location: "Oggb",
    price: 3,
    type: 'social',
    description: "a fun social event for devs",
  }},
  {event:{ 
    name: "WDCC",
    date: new Date(),
    location: "Engineering",
    price: 2,
    type: 'tech',
    description: "awesome tech event",
  }}

]



export default function App() {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}
