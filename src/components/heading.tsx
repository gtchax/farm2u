const Heading = ({ title='', subtitle='' }) => {
  return (
    <div className="relative h-48">
      <h2 className="text-xl font-bold z-20 pl-4">{title}</h2>
      <p className="-z-10 absolute top-[12px] left-0 uppercase font-bold font-mono text-4xl text-[#f6e4d1]">{subtitle}</p>
    </div>
  );
};

export default Heading;
