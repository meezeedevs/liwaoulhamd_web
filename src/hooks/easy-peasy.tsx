import { createTypedHooks } from 'easy-peasy';
import { Store } from 'state/types';

const typedHooks = createTypedHooks<Store>();
export const useStoreActions = typedHooks.useStoreActions;
export const useStoreDispatch = typedHooks.useStoreDispatch;
export const useStoreState = typedHooks.useStoreState;
