import type { Metadata } from "next";
import { EntityPage } from "@/components/EntityPage";
import { getEntity } from "@/lib/entities";

export const metadata: Metadata = {
  title: "Ninety5 Properties | Real Estate Investment & Management",
  description:
    "Ninety5 Properties invests in and actively manages real estate assets, focusing on value creation through acquisition, operations, and selective development.",
};

export default function PropertiesPage() {
  return <EntityPage entity={getEntity("properties")} />;
}
