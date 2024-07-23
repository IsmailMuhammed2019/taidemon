import Card from "@/app/components/card";
import Link from "next/link";

export default function DefaultArchievedAnalytics  () {
    return (
        <Card>
            <h1>Archied Notifications</h1>
            <Link href="/complex-dashboard">Default notifications</Link>
        </Card>
    )
}