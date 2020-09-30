import React, { useState } from 'react';
import { NativeRouter, Route } from 'react-router-native';
import HomeScreen from './screens/Home';
import Example from './screens/Example';

const App = () => (
    <NativeRouter>
      <Route exact path='/' component={HomeScreen} />
      <Route exact path='/example' component={Example} />
    </NativeRouter>
);

export default App;
