import { ScrambleService } from "../services/scrambleService";
import { Request, Response } from "express";

export class ScrambleController {
  private scrambleService: ScrambleService;

  constructor() {
    this.scrambleService = ScrambleService.getInstance();
  }

  public getScramble = (req: Request, res: Response): void => {
    try {
      const puzzleType = (req.query.puzzle as string) || "THREE";
      const result = this.scrambleService.getScramble(puzzleType);
      res.json(result);
    } catch (error) {
      console.error("Error generating scramble:", error);
      res.status(500).json({ error: (error as Error).message });
    }
  };

  public getMultipleScrambles = (req: Request, res: Response): void => {
    try {
      const puzzleType = (req.query.puzzle as string) || "THREE";
      const result = this.scrambleService.getMultipleScrambles(puzzleType);
      res.json(result);
    } catch (error) {
      console.error("Error generating multiple scrambles:", error);
      res.status(500).json({ error: (error as Error).message });
    }
  };
}
