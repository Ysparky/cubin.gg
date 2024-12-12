import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

export const generateScramble = async (
  puzzleType: string = "THREE"
): Promise<{ scramble: string; svg: string }> => {
  try {
    const response = await axios.get(`${API_URL}/get-scramble`, {
      params: { puzzle: puzzleType },
    });

    return { scramble: response.data.scramble, svg: response.data.svg };
  } catch (error) {
    console.error("Error generating scramble:", error);
    throw error;
  }
};
