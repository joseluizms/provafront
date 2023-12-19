import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Socket } from 'socket.io-client';
import useAuth from './hooks/useAuth';
import { Home } from './Home';
import { Account } from './CreateAccount';
import { Room } from './RoomStudio';
import { Online } from './OnlineGame';

interface RouterProps {
  socket: Socket;
}

interface CustomRouteProps {
  component: (props: { socket: Socket }) => JSX.Element;
  socket: Socket;
}

function RegisterRoute({ component: Component, socket }: CustomRouteProps) {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    return <Navigate to='/home' />;
  }
  
  return <Component socket={socket} />;
}

function PrivateRoute({ component: Component, socket }: CustomRouteProps) {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    return <Component socket={socket} />;
  }

  return <Navigate to='/' />;
}

function Router({ socket }: RouterProps) {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={<RegisterRoute component={() => <Account socket={socket} />} socket={socket} />}
        />
        <Route
          path='/home'
          element={<PrivateRoute component={() => <Home socket={socket} />} socket={socket} />}
        />
        <Route
          path='/room/create'
          element={<PrivateRoute component={() => <Room socket={socket} />} socket={socket} />}
        />
        <Route
          path='/room'
          element={<PrivateRoute component={() => <Online socket={socket} />} socket={socket} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
