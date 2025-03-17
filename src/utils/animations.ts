
export const fadeInUp = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export const staggerChildren = (delay = 0.1) => ({
  animate: {
    transition: {
      staggerChildren: delay,
    },
  },
});

export const cardHoverEffect = {
  rest: {
    scale: 1,
    boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
    transition: {
      duration: 0.2,
      type: "tween",
      ease: "easeOut",
    },
  },
  hover: {
    scale: 1.02,
    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
    transition: {
      duration: 0.2,
      type: "tween",
      ease: "easeIn",
    },
  },
};

export const smoothReveal = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
    }
  }
};

export const smoothRevealLeft = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
    }
  }
};

export const smoothRevealRight = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
    }
  }
};
