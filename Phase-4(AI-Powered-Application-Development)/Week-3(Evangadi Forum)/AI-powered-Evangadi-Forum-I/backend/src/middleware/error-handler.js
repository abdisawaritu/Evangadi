import { StatusCodes } from 'http-status-codes';
import CustomAPIError from '../utils/errors/index.js';

export const errorHandler = (err, req, res, next) => {
  if (err?.code === 'ER_DUP_ENTRY') {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ msg: 'Duplicate value entered for a unique field' });
  }

  if (err instanceof CustomAPIError) {
    return res.status(err.statusCode).json({ msg: err.message });
  }

  console.error('Unhandled API error:', err);
  return res
    .status(StatusCodes.INTERNAL_SERVER_ERROR)
    .json({ msg: 'Something went wrong try again later' });
};
