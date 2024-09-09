const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="antialiased bg-slate-900 leading-relaxed text-slate-400 selection:bg-teal-300 selection:text-teal-900">
      <div className="mx-auto min-h-screen max-w-screen-xl font-sans px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">{children}</div>
      </div>
    </div>
  );
};

export { Layout };
