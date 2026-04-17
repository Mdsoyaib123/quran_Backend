import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { QuranService } from "../service /quran.service";


const getAllSurahs = catchAsync(
  async (req: Request, res: Response) => {
    const result = QuranService.getAllSurahs();

    sendResponse(res, 200, {
      success: true,
      message: "Surahs fetched successfully",
      data: result,
    });
  }
);

const getSingleSurah = catchAsync(
  async (req: Request, res: Response) => {
    const id = Number(req.params.id);

    const result = QuranService.getSingleSurah(id);

    sendResponse(res, 200, {
      success: true,
      message: "Surah fetched successfully",
      data: result,
    });
  }
);

const searchAyahs = catchAsync(
  async (req: Request, res: Response) => {
    const q = String(req.query.q || "");
    const surahId = req.query.surahId as unknown as number

    const result = QuranService.searchAyahs(q, surahId);

    sendResponse(res, 200, {
      success: true,
      message: "Search completed",
      data: result,
    });
  }
);

export const QuranController = {
  getAllSurahs,
  getSingleSurah,
  searchAyahs,
};