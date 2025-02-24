import { Container } from "@/components/Container";
import { Skeleton } from "@/components/ui/skeleton";

const Characters: React.FC = () => {
  return (
    <Container>
      <h1 className="text-2xl font-bold">Characters</h1>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {Array.from({ length: 10 }).map((_, index) => (
          <Skeleton key={index} className="w-full h-56" />
        ))}
      </div>
    </Container>
  );
};

export { Characters };
