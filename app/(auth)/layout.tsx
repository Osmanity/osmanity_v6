const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full flex items-center justify-center flex-1">
      {children}
    </div>
  );
};

export default AuthLayout;
