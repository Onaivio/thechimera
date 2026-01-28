import { create } from "zustand";

type SubmissionsState = {
  consultationReferenceId: string | null;
  setConsultationReferenceId: (referenceId: string | null) => void;

  waitlistJoined: boolean;
  setWaitlistJoined: (joined: boolean) => void;
  resetSubmissions: () => void;
};

export const useSubmissionsStore = create<SubmissionsState>((set) => ({
  consultationReferenceId: null,
  setConsultationReferenceId: (referenceId) => set({ consultationReferenceId: referenceId }),

  waitlistJoined: false,
  setWaitlistJoined: (joined) => set({ waitlistJoined: joined }),

  resetSubmissions: () => set({ consultationReferenceId: null, waitlistJoined: false }),
}));
