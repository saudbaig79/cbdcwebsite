import type { Metadata } from "next"
import { TrackerDashboard } from "@/components/tracker-dashboard"

export const revalidate = 300

export const metadata: Metadata = {
  title: "World Tracker | CBDC LLC",
  description: "Track central bank digital currency projects worldwide with CBDC LLC.",
}

export default function TrackerPage() {
  return <TrackerDashboard />
}
