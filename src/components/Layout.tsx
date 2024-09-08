const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      style={{ backgroundColor: "red" }}
      className="mx-auto min-h-screen max-w-screen-xl font-sans px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0"
    >
      <div
        style={{ backgroundColor: "green" }}
        className="lg:flex lg:justify-between lg:gap-4"
      >
        {children}
      </div>
    </div>
  );
};

export { Layout };
