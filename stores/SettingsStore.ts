import { create } from 'zustand';

type SettingsStoreState = {
  resource: string;
  api: string;
};

type SettingsStoreActions = {
  setResource: (arg: string) => void;
  setApi: (arg: string) => void;
};

type SettingsStore = SettingsStoreState & SettingsStoreActions;

export const useSettingsStore = create<SettingsStore>((set) => ({
  resource: 'SamuNatsu/live2d-widget-enhanced',
  api: 'fghrsh/live2d_api',
  setResource: (resource: string) =>
    set((state) => ({
      resource: resource,
    })),
  setApi: (api: string) =>
    set((state) => ({
      api: api,
    })),
}));
