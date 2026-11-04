import type { Metadata } from "next";
import { EntityPage } from "@/components/EntityPage";
import { getEntity } from "@/lib/entities";

export const metadata: Metadata = {
  title: "Ninety5 Capital | Stocks & Crypto Investments",
  description:
    "Ninety5 Capital is the investment arm of Ninety5 Holdings. We invest in public equities and digital assets with a long-term, research-driven approach.",
};

export default function CapitalPage() {
  return <EntityPage entity={getEntity("capital")} />;
}
