import { Button } from "@/components/ui/button";

const HomePage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Welcome to Our App</h1>
      <p className="text-xl mb-6">This is a simple, bare-bones application that you can easily modify and build upon.</p>
      <Button>Get Started</Button>
    </div>
  );
};

export default HomePage;