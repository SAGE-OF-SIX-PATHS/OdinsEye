
export const performFactCheck = async (claim: string): Promise<{ claim: string; result: string }> => {
  // Mock logic for fact checking
  return {
    claim,
    result: Math.random() > 0.5 ? "Likely True" : "Likely False",
  };
};
