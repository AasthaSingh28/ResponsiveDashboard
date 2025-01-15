import PageTitle from "@/components/PageTitle";
import { Activity, CreditCard, DollarSign, Users } from "lucide-react";
import Card, { CardContent, CardProps } from "@/components/Card"
import BarChart from "@/components/ui/BarChart";
import SalesCard, { SalesProps } from "@/components/ui/SalesCard";

const cardData: CardProps[] = [
  {
    label: "Total Revenue",
    value: "$1,000,000",
    description: "+20.1% from last month",
    icon: DollarSign,
  },
  {
    label: "Subscription",
    value: "+2,500",
    description: "+180.1% from last month",
    icon: Users,
  },
  {
    label: "Sale",
    value: "+12,334",
    description: "+20.1% from last month",
    icon: CreditCard,
  },
  {
    label: "Active Now",
    value: "+456",
    description: "+201 from last hour",
    icon: Activity,
  },
]

const userSalesData: SalesProps[] = [
  {
    name: "John Doe",
    email: "qbc@gmail.com",
    saleamount: "+$1,445"
  },
  {
    name: "Jack Lee",
    email: "qbc@gmail.com",
    saleamount: "+$1,445"
  },
  {
    name: "Olivia Doe",
    email: "qbc@gmail.com",
    saleamount: "+$1,445"
  },
  {
    name: "John Martin",
    email: "qbc@gmail.com",
    saleamount: "+$1,445"
  },
]

export default function Home() {
  return (
    <div className="flex flex-col gap-5 w-full" >
      <PageTitle title="Dashboard" />
      <section className="grid gap-4 grid-cols-1 w-full gap-x-8 transition-all sm:grid-cols-2 xl:grid-cols-4">
        {cardData.map((d, i) => (
          <Card key={i}
            value={d.value}
            description={d.description}
            icon={d.icon}
            label={d.label}
          />
        ))}
      </section>
      <section className="grid grid-cols-1 gap-4 transition-all lg:grid-cols-2">
        <CardContent>
          <p className="p-4 font-semibold">Overview</p>
          <BarChart />
        </CardContent>
        <CardContent className="flex justify-between gap-4">
          <section>
            <p>Recent Sales</p>
            <p className="text-sm text-gray-500">You made 265 sales this month.</p>
          </section>
          {userSalesData.map((d, i) => (
            <SalesCard key={i}
              name={d.name}
              email={d.email}
              saleamount={d.saleamount}
            />
          ))}

        </CardContent>
      </section>
    </div>
  );
}
