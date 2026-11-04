import type { Metadata } from "next";
import { EntityPage } from "@/components/EntityPage";
import { getEntity } from "@/lib/entities";

export const metadata: Metadata = {
  title: "Ninety5 Foundation | Charity Arm of Ninety5 Holdings",
  description:
    "Ninety5 Foundation is the charitable arm of Ninety5 Holdings. We invest in people — education, opportunity, and dignity — so more families across West Africa can build the futures they choose.",
};

export default function FoundationPage() {
  return (
    <EntityPage
      entity={getEntity("foundation")}
      closingNote={
        <p>
          If you share this vision — as a partner, a community organization, or someone who simply believes talent should never be left behind — we would be glad to hear from you.
        </p>
      }
    />
  );
}
