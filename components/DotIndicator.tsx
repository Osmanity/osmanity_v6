import { motion } from "framer-motion";

type DotIndicatorProps = {
  sections: number;
  currentSection: number;
};

const DotIndicator: React.FC<DotIndicatorProps> = ({
  sections,
  currentSection,
}) => {
  return (
    <div className="absolute left-12 top-1/2 transform -translate-y-1/2 flex flex-col space-y-2 ">
      {Array.from({ length: sections }, (_, index) => (
        <motion.div
          key={index}
          animate={{
            scale: index === currentSection ? 1.2 : 1,
          }}
          className={`w-2 h-4 rounded-full ${
            index === currentSection
              ? "bg-black/60 h-6 animate-pulse"
              : "bg-gray-400"
          }`}
        />
      ))}
    </div>
  );
};

export default DotIndicator;
