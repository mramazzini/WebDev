"use server";
import fs from "fs";
import path from "path";

export const getWebsiteImages = async () => {
  const directory = process.cwd() + "/public/website-screenshots/";
  const files = fs.readdirSync(directory);

  return files.map((file) => {
    return "/website-screenshots/" + file;
  });
};

export async function createPath(filename: string) {
  const directory = process.cwd() + "/public/website-screenshots/";
  const filePath = path.join(directory, filename);

  return filePath;
}
