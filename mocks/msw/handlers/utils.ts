import { delay, HttpResponse } from "msw";

export const withDelay = async () => {
  const ms = Math.floor(Math.random() * 1000) + 200;
  await delay(ms);
};

export const maybeError = () => {
  if (Math.random() < 0.1) {
    return HttpResponse.json({ message: "Temporary server error" }, { status: 500 });
  }
  return null;
};
