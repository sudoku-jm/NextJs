import ClientComponent from "@/components/client-component";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q } = await searchParams;
  console.log("props============", q);
  return (
    <div>
      search page : {q}
      <ClientComponent>
        <></>
      </ClientComponent>
    </div>
  );
}

//=============================
// type SearchPageProps = {
//   searchParams : Promise<{q?: string}>
// }
// export default async function Page({
//   searchParams,} : SearchPageProps) {
//   const {q} = await searchParams;
//   console.log('props==========3==',q)
//   return <div>search page</div>
// }

//=============================
// export default async function Page({
//   searchParams,} : {
//     searchParams : Promise<{q?:string}>;
//   }) {
//   const resolvedParams = await searchParams;
//   console.log(resolvedParams.q)
//   return <div>search page</div>
// }
