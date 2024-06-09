const captureWebsite = require("capture-website");
const websites = require("./websites.json");
const fs = require("fs");

const deleteAllImages = async () => {
  const directory = process.cwd() + "/public/website-screenshots/";
  const files = fs.readdirSync(directory);

  for (const file of files) {
    console.log("Deleting " + file);
    fs.unlinkSync(directory + file);
  }
};

const captureWebsiteImage = async (url: string, fileName: string) => {
  await captureWebsite.default.file(
    url,
    "./public/website-screenshots/" + fileName + ".png"
  );
  console.log("Captured " + fileName + " website at " + fileName + ".png");
};

const captureAllWebsites = async () => {
  await deleteAllImages();
  for (const website of websites) {
    await captureWebsiteImage(website.url, website.name);
  }
};

captureAllWebsites();
