import React, { useEffect } from "react";
import RecommendationSurvey from "../../components/auth/SurveyForm";
import { motion } from "motion/react";

const Survey = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <motion.div
        initial={{ translateX: -100, opacity: 0 }}
        animate={{
          translateX: 0,
          opacity: 1,
          transition: { duration: 0.8 },
        }}
      >
        <RecommendationSurvey />
      </motion.div>
    </div>
  );
};

export default Survey;
