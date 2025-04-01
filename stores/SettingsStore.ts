import { create } from 'zustand';

type SettingsStoreState = {
  resource: string;
  api: string;
  llm_url: string;
  model: string;
};

type SettingsStoreActions = {
  setResource: (arg: string) => void;
  setApi: (arg: string) => void;
  setLLMURL: (arg: string) => void;
  setModel: (arg: string) => void;
};

type SettingsStore = SettingsStoreState & SettingsStoreActions;

export const useSettingsStore = create<SettingsStore>((set) => ({
  resource: 'SamuNatsu/live2d-widget-enhanced',
  api: 'fghrsh/live2d_api',
  llm_url: 'http://10.0.2.2:11434',
  model: 'wizard-vicuna-uncensored:30b',
  setResource: (resource: string) =>
    set((state) => ({
      resource: resource,
    })),
  setApi: (api: string) =>
    set((state) => ({
      api: api,
    })),
  setLLMURL: (llm_url: string) =>
    set((state) => ({
      llm_url: llm_url,
    })),
  setModel: (model: string) =>
    set((state) => ({
      model: model,
    })),
}));
