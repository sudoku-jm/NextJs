import ClientComponent from "@/components/client-component";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  console.log("id???", id);
  return (
    <div>
      book/[id] page 입니다 : {id}
      <ClientComponent>
        <></>
      </ClientComponent>{" "}
    </div>
  );
}
