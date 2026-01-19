import LoginCard from "@/components/LoginCard";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center font-sans bg-white">
      <main className="flex min-h-screen w-full bg-white">
        <div className="flex justify-center items-center w-full">
          <LoginCard/>
        </div>
      </main>
    </div>
  );
}
