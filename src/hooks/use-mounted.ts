import { useSyncExternalStore } from 'react';

// Never notifies: the value only differs between the server and client snapshots.
const subscribe = () => () => {};

export const useMounted = () =>
  useSyncExternalStore(
    subscribe,
    () => true,
    () => false
  );
