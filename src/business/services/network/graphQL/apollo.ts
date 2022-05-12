import {RootState, store} from '@store/index';
import ApolloClient from 'apollo-boost';
import {GRAPHQL_BASE_URL} from './endpoints';

export const apolloClient = new ApolloClient({
  uri: GRAPHQL_BASE_URL,
  request: operation => {
    const rootState = store.getState() as RootState;
    operation.setContext({
      headers: {
        authorization: rootState.auth.user?.accessToken
          ? `Bearer ${rootState.auth.user!.accessToken}`
          : '',
      },
    });
  },
});
