export type SeasonalCategory = '추석' | '동지' | '기타';

export type BackgroundMood = 'hanji' | 'autumn' | 'winter';

export interface EntryImage {
  url: string;
  caption?: string;
}

export interface EncyclopediaEntry {
  id: string;
  title: string;
  category: SeasonalCategory;
  timing: string;
  topicType: string;
  keywords: string[];
  summary: string;
  explanation: string[];
  wisdom: string;
  inquiryQuestion: string;
  inquiryHint: string;
  imageUrl: string;
  imageCaption: string;
  images?: EntryImage[];
  relatedIds: string[];
  updatedAt?: string;
}

export interface StudentNote {
  entryId: string;
  answer: string;
  updatedAt: string;
}

export interface ClassSettings {
  classTitle: string;
  teacherMessage: string;
  backgroundMood: BackgroundMood;
}

export function getEntryImages(entry: EncyclopediaEntry): EntryImage[] {
  if (entry.images && entry.images.length > 0) {
    return entry.images.filter((img) => Boolean(img.url?.trim()));
  }
  if (entry.imageUrl) {
    return [{ url: entry.imageUrl, caption: entry.imageCaption }];
  }
  return [];
}
