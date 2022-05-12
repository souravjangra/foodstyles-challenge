import {ApolloProvider} from '@apollo/client';
import Router from '@application/navigation/Router';
import {apolloClient} from '@business/services/network/graphQL/apollo';
import {persistor, store} from '@store/index';
import React from 'react';
import {StyleSheet} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

const App = () => {
  return (
    <GestureHandlerRootView style={styles.root}>
      <ApolloProvider client={apolloClient}>
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <Router />
          </PersistGate>
        </Provider>
      </ApolloProvider>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});

export default App;
