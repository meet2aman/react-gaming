import { create } from "zustand";

const useSoundStore = create((set) => ({
  isIndicatorActive: false, // showing music indicator on navbar
  isOpenDrawer: false, // to open the side drawer where button exists
  selectedAmenities: [],

  // audio states
  isAllAudio: false, // tracks audio should play or not
  isBackgroundAudio: false,
  isButtonAudio: false,
  isRestoreAudio: false,

  toggleIsOpenDrawer: () =>
    set((state) => ({
      isOpenDrawer: !state.isOpenDrawer,
    })),
  toggleAudioIndicator: () =>
    set((state) => ({
      isOpenDrawer: !state.isOpenDrawer,
    })),
  toggleAllAudioButton: () =>
    set((state) => ({
      isAllAudio: !state.isAllAudio,
      isBackgroundAudio: !state.isBackgroundAudio,
      isButtonAudio: !state.isButtonAudio,
      isIndicatorActive: !state.isIndicatorActive,
    })),
  toggleBackgroundAudioButton: () =>
    set((state) => ({
      isBackgroundAudio: !state.isBackgroundAudio,
      isIndicatorActive: !state.isIndicatorActive,
    })),
  toggleButtonAudioButton: () =>
    set((state) => ({
      isButtonAudio: !state.isButtonAudio,
    })),
  toggleRestoreAudioButton: () =>
    set(() => ({
      isAllAudio: false,
      isBackgroundAudio: false,
      isButtonAudio: false,
      isRestoreAudio: false,
      isIndicatorActive: false,
    })),
}));

export default useSoundStore;



