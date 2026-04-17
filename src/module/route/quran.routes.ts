import { Router } from "express";
import { QuranController } from "../controller/quran.controller";


const router = Router();

router.get("/surahs", QuranController.getAllSurahs);
router.get("/surah/:id", QuranController.getSingleSurah);

router.get("/search", QuranController.searchAyahs);

export const QuranRoutes = router;