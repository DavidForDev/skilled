const Container = ({ children, style }) => {
  return <div className={`w-full h-auto px-6 py-32 ${style}`}>{children}</div>;
};

export default Container;
