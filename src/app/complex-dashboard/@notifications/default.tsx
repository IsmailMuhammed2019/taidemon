import Card from "@/app/components/card";
import Link from "next/link";

export default function DefaultNotifications () {
    return (
        <Card>
            <h1>Notifications </h1>
            <Link href="/complex-dashboard/archieved">Archieved notifications</Link>
            
        </Card>
    )
}