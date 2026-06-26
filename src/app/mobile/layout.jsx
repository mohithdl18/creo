import "./mobile.css";

export const metadata = {
  title: "CREO",
  description: "CREO Mobile",
};

export default function MobileLayout({ children }) {
  return (
    <main className="mobile-root">
      {children}
    </main>
  );
}