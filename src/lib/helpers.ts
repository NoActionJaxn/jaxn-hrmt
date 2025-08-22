import { LOCALE, LOCALE_FORMAT_OPTIONS } from "../constants/dateLocale";

export function formatDate(date: Date): string {
  return date.toLocaleString(LOCALE, LOCALE_FORMAT_OPTIONS);
}
