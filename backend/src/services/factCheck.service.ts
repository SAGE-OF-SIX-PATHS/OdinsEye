
import axios from "axios";

export const performFactCheck = async (claim: string): Promise<{ claim: string; result: string }> => {
  try {
    const apiKey = process.env.GOOGLE_FACT_CHECK_API_KEY;
    
    const response = await axios.get(
      `https://factchecktools.googleapis.com/v1alpha1/claims:search`,
      {
        params: {
          query: claim,
          key: apiKey,
        },
      }
    );

    const claims = response.data.claims || [];

    if (claims.length === 0) {
      return {
        claim,
        result: "No fact check found for this claim.",
      };
    }

    const firstClaim = claims[0];
    const text = firstClaim.text || "No description available.";
    const claimRating = firstClaim.claimReview?.[0]?.text || "No rating found.";

    return {
      claim: text,
      result: claimRating,
    };

  } catch (error) {
    console.error("Error while fact checking:", error);
    return {
      claim,
      result: "Error occurred while checking this claim.",
    };
  }
};