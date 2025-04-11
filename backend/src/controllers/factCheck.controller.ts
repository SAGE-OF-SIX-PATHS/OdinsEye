import { Request, Response } from "express";
import { performFactCheck } from "../services/factCheck.service";

export const factCheck = async (req: Request, res: Response): Promise<void> => {
  try {
    const { claim } = req.body;

    if (!claim || typeof claim !== "string") {
      res.status(400).json({ error: "A valid claim string is required." });
      return;
    }

    const result = await performFactCheck(claim);

    if (!result) {
      res.status(404).json({ error: "No fact check results found for this claim." });
      return;
    }

    res.status(200).json({
      success: true,
      data: result,
    });

  } catch (error) {
    console.error("Fact Check Error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
