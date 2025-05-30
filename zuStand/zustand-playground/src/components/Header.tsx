import SplitText from "../ReactBits/SplitText/SplitText";
import ScrambledText from "../ReactBits/ScrambledText/ScrambledText";
import BearCount from "./BearCount";

const Header = () => {
  return (
    <div>
      <div className="flex items-center justify-center p-10">
        <SplitText
          text="ZuStand"
          className="text-5xl text-center font-extrabold leading-snug"
          delay={100}
          duration={0.6}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
        />
      </div>

      <div className="flex items-center justify-center gap-[1.2rem]">
        <ScrambledText
          className="scrambled-text-demo mt-6 text-xl md:text-2xl font-semibold bg-white rounded-lg px-6 py-3 shadow-lg border border-orange-300 flex items-center justify-center gap-2"
          radius={120}
          duration={1.5}
          speed={0.4}
          scrambleChars=".:"
        >
          <span role="img" aria-label="bear">
            🐻
          </span>
          <span className="mx-2 font-extrabold text-orange-500 drop-shadow-[0_1.5px_0_rgba(255,140,0,0.7)] animate-pulse">
            Let's
          </span>
          <span className="mx-2 font-extrabold text-white bg-green-600 px-2 py-1 rounded shadow-lg animate-bounce">
            calculate
          </span>
          <span className="mx-2 font-extrabold text-green-600 drop-shadow-[0_1.5px_0_rgba(0,128,0,0.7)] animate-pulse">
            the
          </span>
          <span className="mx-2 font-extrabold text-orange-600 bg-white px-2 py-1 rounded shadow-md border border-orange-200 animate-bounce">
            Zustand bears
          </span>
          <span role="img" aria-label="bear">
            🐻
          </span>
        </ScrambledText>
        <BearCount />
      </div>
    </div>
  );
};

export default Header;
