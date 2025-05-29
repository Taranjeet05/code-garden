import SplitText from "../ReactBits/SplitText/SplitText";

const header = () => {
  return (
    <div className="flex items-center justify-center p-10 ">
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
  );
};

export default header;
