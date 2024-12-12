import axios from "axios";

export const generateScramble = async (
  puzzleType: string = "THREE"
): Promise<{ scramble: string; svg: string }> => {
  try {
    const response = await axios.get("http://192.168.18.9:5000/get-scramble", {
      params: { puzzle: puzzleType },
    });

    return { scramble: response.data.scramble, svg: response.data.svg };
  } catch (error) {
    console.error("Error generating scramble:", error);
    throw error;
  }
};
