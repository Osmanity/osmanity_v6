import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Courses - Osmanity ",
  description: "Courses by osmanity",
};

export default function CourseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className={`${inter.className} h-full bg-black`}>
      {/* Content with black background */}
      {children}
    </section>
  );
}
