import { Response } from "express";

interface TResponse<T> {
  success: boolean;
  message: string;
  data?: T;
  meta?: any;
}

const sendResponse = <T>(
  res: Response,
  statusCode: number,
  payload: TResponse<T>
) => {
  res.status(statusCode).json(payload);
};

export default sendResponse;