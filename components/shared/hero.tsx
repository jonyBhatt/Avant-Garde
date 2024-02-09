import Image from "next/image";
import { Button } from "../ui/button";
import styles from "@/components/css/hero.module.css";
import { cn } from "@/lib/utils";

const Hero = () => {
  return (
    <section className="py-20 px-24 container relative">
      <div className={cn(styles.gradientBg)}></div>
      <div className="flex items-center justify-around my-8 ">
        <div className="title">
          <h2 className="text-2xl md:text-5xl font-bold font-rubik">
            <span className="text-white">Hire anyone</span>, <br />
            <span className="text-gray-400">anywhere</span>
          </h2>
        </div>
        <div className="flex items-start flex-col gap-4">
          <span className="text-sm font-inter leading-5">
            Payroll benefits and complains for remote teams, in one secure
            platform. <br /> Easily onboard and pay employees and contraction
            worldwide.
          </span>
          <Button className="rounded-full px-8">Get Started</Button>
        </div>
      </div>
      <div className="mt-14">
        <Image
          src="/images/hero.jpg"
          alt="hero image"
          width="2000"
          height="100"
          className="rounded-lg h-[500px] shadow-md shadow-accent"
        />
      </div>
    </section>
  );
};
export default Hero;
