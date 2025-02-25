import { Container } from "@/components/Container";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Skeleton } from "@/components/ui/skeleton";
import { useGetCharacterById } from "@/lib/api/hooks/query-hooks";
import { AlertCircle } from "lucide-react";
import { useParams } from "react-router";

export const CharacterDetailsPage: React.FC = () => {
  const { id } = useParams();
  const { isLoading, isError, data } = useGetCharacterById(id!);

  if (isLoading) {
    return (
      <Container>
        <div className="flex gap-4">
          <Skeleton className="w-32 h-44 rounded-md" />

          <div>
            <Skeleton className="w-64 h-8 rounded-[10px]" />

            <Skeleton className="w-32 h-4 rounded-[10px] mt-3" />
            <Skeleton className="w-32 h-4 rounded-[10px] mt-1" />
            <Skeleton className="w-32 h-4 rounded-[10px] mt-1" />
          </div>
        </div>
      </Container>
    );
  }

  if (isError) {
    return (
      <Alert variant="destructive" className="mt-4">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>Error loading character</AlertDescription>
      </Alert>
    );
  }

  return (
    <Container>
      <div className="flex gap-4" data-testid="character-details-page-content">
        <div className="w-32 h-44 rounded-md border overflow-hidden">
          {data?.image ? (
            <img
              src={data?.image}
              alt={data?.name}
              className="w-auto h-auto object-cover rounded-md m-auto"
            />
          ) : (
            <div className="flex items-center justify-center h-full text-xs">
              {data?.name}
            </div>
          )}
        </div>

        <div>
          <h1 className="text-xl font-bold">{data?.name}</h1>

          <div>{data?.house}</div>
          <div>{data?.hogwartsStudent && "Student"}</div>
          <div>{data?.hogwartsStaff && "Staff"}</div>
        </div>
      </div>

      <div className="mt-4">
        <h2 className="text-lg font-bold">Additional Information</h2>
        {data?.actor && <div>Actor: {data.actor}</div>}
        {data?.species && <div>Species: {data.species}</div>}
        {data?.gender && <div>Gender: {data.gender}</div>}
        {data?.dateOfBirth && <div>Date of birth: {data.dateOfBirth}</div>}
        {data?.ancestry && <div>Ancestry: {data.ancestry}</div>}
        {data?.eyeColour && <div>Eye colour: {data.eyeColour}</div>}
        {data?.hairColour && <div>Hair colour: {data?.hairColour}</div>}
        {data?.patronus && <div>Patronus: {data.patronus}</div>}
        <div>Wizard: {data?.wizard ? "Yes" : "No"}</div>
        <div>Alive: {data?.alive ? "Yes" : "No"}</div>

        {data?.wand &&
          (data.wand.core || !!data.wand.length || data.wand.wood) && (
            <div>
              <h2 className="text-md font-bold mt-4">Wand</h2>
              <div>Wood: {data.wand.wood}</div>
              <div>Core: {data.wand.core}</div>
              <div>Length: {data.wand.length}</div>
            </div>
          )}

        {data?.alternate_names && data.alternate_names.length > 0 && (
          <div>
            <h2 className="text-md font-bold mt-4">Alternate names</h2>
            {data.alternate_names.map((name) => (
              <div key={name}>{name}</div>
            ))}
          </div>
        )}
      </div>
    </Container>
  );
};
