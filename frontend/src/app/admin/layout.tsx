export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen  flex  flex-col border   justify-center items-center ">
      {children}
    </div>
  );
}
