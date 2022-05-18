import sharp from "sharp";
import express from "express";
import fs from "fs";

const resize = async (
  req: express.Request,
  res: express.Response,
  next: () => void
) => {
  if (fs.existsSync(`${req.query.filename}${req.query.width}${req.query.height}.jpg`)) {
    await fs.readFile(
      `${req.query.filename}${req.query.width}${req.query.height}.jpg`,
      (err, data) => {
        if (err) res.status(400).end(err); // fail
        else res.status(200).end(data); // success
      });
  }
   else {
    if (fs.existsSync(`./imgs/${req.query.filename}.jpg`)){
     await sharp(`./imgs/${req.query.filename}.jpg`)
       .resize(
         parseInt(req.query.width as unknown as string),
         parseInt(req.query.height as unknown as string)
       )
       .toFile(`${req.query.filename}${req.query.width}${req.query.height}.jpg`)
       .catch(() => {
         res.status(400).end("unexpected error found");
       });
      }
      else{
        res.status(404).end("image not found")
      }
     next();
  }
};

const send = async (
  req: express.Request,
  res: express.Response,
  next: () => void
) => {
  await fs.readFile(
    `${req.query.filename}${req.query.width}${req.query.height}.jpg`,
    (err, data) => {
      if (err) res.status(400).end(err); // fail
      else res.status(200).end(data); // success
    }
  );
  next();
};

export { resize };
export { send };
