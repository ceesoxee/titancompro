import PageClient from "./page.client";

export default async function ProductDetail({params}:{params:Promise<{id:string}>}) {
    const param = await params;
  <PageClient productId= {param.id} />
}
