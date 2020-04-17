import React from 'react';
import {StatusBar, View} from 'react-native';
import './config/ReactotronConfig';
import Routes from './routes';

// import { Container } from './styles';

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
      <Routes />
    </>
  );
}
