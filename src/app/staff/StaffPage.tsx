import { CharacterCard } from "@/components/CharacterCard";
import { Container } from "@/components/Container";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Skeleton } from "@/components/ui/skeleton";
import { useGetALlStaff } from "@/lib/api/hooks/query-hooks";
import { AlertCircle } from "lucide-react";

export const StaffPage: React.FC = () => {
  const { isLoading, isError, data } = useGetALlStaff();

  return (
    <Container>
      <h1 className="text-2xl font-bold">Staff</h1>

      {isLoading && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
          {Array.from({ length: 10 }).map((_, index) => (
            <Skeleton key={index} className="w-full h-56" />
          ))}
        </div>
      )}

      {isError && (
        <Alert variant="destructive" className="mt-4">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>Error loading staff</AlertDescription>
        </Alert>
      )}

      {data && (
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-4">
          {data.map((staff) => (
            <CharacterCard key={staff.id} character={staff} />
          ))}
        </div>
      )}
    </Container>
  );
};
