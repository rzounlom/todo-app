import Header from "@/components/header/Header";

export default function Home() {
  return (
    <div className="container-fluid h-screen bg-[url('/images/bg-mobile-light.jpg')] md:bg-[url('/images/bg-desktop-light.jpg')] bg-no-repeat bg-[length:100%_30%]">
      <Header />
    </div>
  );
}
