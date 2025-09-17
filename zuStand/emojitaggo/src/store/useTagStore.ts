import { create } from "zustand";
import { Tag } from "../types/index";

type TagsState = {
  tags: Tag[];
  addTag: (tag: Tag) => void;
};

export const useTagsStore = create<TagsState>((set) => ({
  tags: [],
  addTag: (tag) => set((state) => ({ tags: [...state.tags, tag] })),
}));
