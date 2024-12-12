import java from "java";
import { Scramble } from "../types";

export class ScrambleService {
  private static instance: ScrambleService;
  private readonly PuzzleRegistry: any;

  private constructor() {
    java.classpath.push("scrambles-0.19.2-all.jar");
    this.PuzzleRegistry = java.import(
      "org.worldcubeassociation.tnoodle.scrambles.PuzzleRegistry"
    );
  }

  public static getInstance(): ScrambleService {
    if (!ScrambleService.instance) {
      ScrambleService.instance = new ScrambleService();
    }
    return ScrambleService.instance;
  }

  private validatePuzzleType(puzzleType: string): void {
    if (!this.PuzzleRegistry[puzzleType]) {
      throw new Error(`Invalid puzzle type: ${puzzleType}`);
    }
  }

  public getScramble(puzzleType: string): Scramble {
    this.validatePuzzleType(puzzleType);

    const puzzleEntry = this.PuzzleRegistry[puzzleType];
    const scrambler = puzzleEntry.getScramblerSync();
    const scramble = scrambler.generateScrambleSync();
    const svg = scrambler.drawScrambleAsStringSync(scramble, null);

    return { scramble, svg };
  }

  public getMultipleScrambles(
    puzzleType: string,
    count: number = 5
  ): Scramble[] {
    this.validatePuzzleType(puzzleType);

    const puzzleEntry = this.PuzzleRegistry[puzzleType];
    const scrambler = puzzleEntry.getScramblerSync();
    const scrambles = scrambler.generateScramblesSync(count);

    return scrambles.map((scramble: string) => ({
      scramble,
      svg: scrambler.drawScrambleAsStringSync(scramble, null),
    }));
  }
}
