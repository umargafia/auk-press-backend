import express from "express";
const router = express.Router();
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

router.get("/", async (req, res) => {
  try {
    const note = await prisma.notes.findMany();
    res.status(200).json({ note });
  } catch (error) {
    console.log("first")
  }
});

router.post("/", async (req, res) => {
  const { title, details, category } = req.body;

  try {
    const sendNote = await prisma.notes.create({
      data: {
        title,
        details,
        category,
      },
    });
    res.status(200).json(sendNote);
  } catch (error) {}

  res.status(200).json(title, details, category);
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    await prisma.notes.delete({
      where: {
        id: parseInt(id),
      },
    });
  } catch (error) {
    console.log(error);
  }
  res.status(200).json({ message: "deleted successfully" });
});

export default router;
