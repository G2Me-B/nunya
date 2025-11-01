import React from "react";
import SignupForm from "../../components/auth/SignupForm";
import { motion } from "motion/react";

const Signup = () => {
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
        <SignupForm />
      </motion.div>
    </div>
  );
};

export default Signup;
