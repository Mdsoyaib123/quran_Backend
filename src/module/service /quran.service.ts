import surahs from "../../data/surahs.json";
import versesArabic from "../../data/verses_arabic.json";
import versesEnglish from "../../data/verses_english.json";
import { TSurah, TVersesMap } from "../interface/quran.interface";



const surahData = surahs as TSurah[];
const arabicData = versesArabic as TVersesMap;
const englishData = versesEnglish as TVersesMap;

const getAllSurahs = () => {
  return surahData;
};

const getSingleSurah = (id: number) => {
  const surah = surahData.find((item) => item.id === id);

  if (!surah) {
    throw new Error("Surah not found");
  }

  const ar = arabicData[String(id)] || [];
  const en = englishData[String(id)] || [];

  const verses = ar.map((ayah, index) => ({
    chapter: ayah.chapter,
    verse: ayah.verse,
    arabic: ayah.text,
    translation: en[index]?.text || "",
  }));

  return {
    surah,
    verses,
  };
};

const searchAyahs = (query: string) => {
  if (!query.trim()) return [];

  const results: any[] = [];

  Object.keys(englishData).forEach((key) => {
    englishData[key].forEach((item, index) => {
      if (
        item.text.toLowerCase().includes(query.toLowerCase())
      ) {
        results.push({
          surah_id: Number(key),
          verse: item.verse,
          arabic: arabicData[key]?.[index]?.text || "",
          translation: item.text,
        });
      }
    });
  });

  return results;
};

export const QuranService = {
  getAllSurahs,
  getSingleSurah,
  searchAyahs,
};