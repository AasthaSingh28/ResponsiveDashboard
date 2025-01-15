"use client"
import React from 'react';
import { DataTable } from '@/components/DataTable'; // Corrected import


import { ColumnDef } from "@tanstack/react-table";
import PageTitle from '@/components/PageTitle'; // Ensure this path is correct
import { cn } from '@/lib/utils';

type Props = {};
export default function Orderspage({ }: Props) {
    // Example static data for testing
    const data: Payment[] = [
        { order: "OR001", status: "Pending", last: "28-02-2025", method: "Credit Card" },
        { order: "OR002", status: "Processing", last: "15-01-2025", method: "PayPal" },
        { order: "OR003", status: "Completed", last: "05-01-2025", method: "Bank Transfer" },
        { order: "OR004", status: "Pending", last: "20-12-2024", method: "Debit Card" },
        { order: "OR005", status: "Processing", last: "18-01-2025", method: "Cash on Delivery" },
        { order: "OR006", status: "Completed", last: "10-01-2025", method: "Credit Card" },
        { order: "OR007", status: "Pending", last: "12-01-2025", method: "PayPal" },
        { order: "OR008", status: "Processing", last: "25-12-2024", method: "Bank Transfer" },
        { order: "OR009", status: "Completed", last: "05-01-2025", method: "Credit Card" },
        { order: "OR010", status: "Pending", last: "02-01-2025", method: "Debit Card" }



    ];

    return (
        <div className='flex flex-col gap-5 w-full'>
            <PageTitle title='Orders' />
            <DataTable columns={columns} data={data} />
        </div>
    );
}

export type Payment = {
    order: string;
    last: string;
    method: string;
    status: string;
}

export const columns: ColumnDef<Payment>[] = [
    {
        accessorKey: "order",
        header: "Order",

    },
    {
        accessorKey: "status",
        header: "Status",
        cell: ({ row }) => {
            return <div className={cn("font-medium w-fit px-4 py-2 rounded-lg", {
                "bg-green-500 text-white": row.original.status === "Completed",
                "bg-orange-500 text-white": row.original.status === "Processing",
                "bg-red-500 text-white": row.original.status === "Pending",
            })}>

                {row.getValue("status")}</div>;
        }

    },
    {
        accessorKey: "last",
        header: "Last Order",
    },
    {
        accessorKey: "method",
        header: "Method",
    },
];

