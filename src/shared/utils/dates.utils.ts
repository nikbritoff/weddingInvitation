import { format } from "date-fns";
import { DateFormats } from "../shared.constants";

export const getFormattedDate = (
  date: string | number | Date,
  pattern: (typeof DateFormats)[keyof typeof DateFormats] = DateFormats.Simple,
) => {
  return format(date, pattern);
};
