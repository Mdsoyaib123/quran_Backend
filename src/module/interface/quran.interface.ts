export interface TSurah {
  id: number;
  name_ar: string;
  name_en: string;
  verses_count: number;
}

export interface TVerse {
  chapter: number;
  verse: number;
  text: string;
}

export interface TVersesMap {
  [key: string]: TVerse[];
}