"use client"
import React from 'react';
import { DataTable } from '@/components/DataTable'; // Corrected import


import { ColumnDef } from "@tanstack/react-table";
import PageTitle from '@/components/PageTitle'; // Ensure this path is correct

type Props = {};
export default function Userspage({ }: Props) {
    // Example static data for testing
    const data: Payment[] = [
        { name: "John", last: "22-01-2025", method: "Credit Card", email: "user1@example.com" },
        { name: "Rony", last: "12-01-2025", method: "Pay Pal", email: "user1@example.com" },
        { name: "Joacob", last: "02-01-2025", method: "COD", email: "user1@example.com" },
        { name: "Jackson", last: "27-01-2025", method: "COD", email: "user1@example.com" },
        { name: "Olivia", last: "22-02-2025", method: "Credit Card", email: "user1@example.com" },
        { name: "Lily", last: "24-02-2025", method: "Pay Pal", email: "user1@example.com" },
        { name: "Streak", last: "28-02-2025", method: "Credit Card", email: "user1@example.com" },
        { name: "Streak", last: "28-02-2025", method: "Credit Card", email: "user1@example.com" },
        { name: "Streak", last: "28-02-2025", method: "Credit Card", email: "user1@example.com" },
        { name: "Streak", last: "28-02-2025", method: "Credit Card", email: "user1@example.com" },
        { name: "Streak", last: "28-02-2025", method: "Credit Card", email: "user1@example.com" }, { name: "Streak", last: "28-02-2025", method: "Credit Card", email: "user1@example.com" },


        { name: "Streak", last: "28-02-2025", method: "Credit Card", email: "user1@example.com" },
        { name: "Streak", last: "28-02-2025", method: "Credit Card", email: "user1@example.com" },
        { name: "Streak", last: "28-02-2025", method: "Credit Card", email: "user1@example.com" },
        { name: "Streak", last: "28-02-2025", method: "Credit Card", email: "user1@example.com" },
        { name: "Streak", last: "28-02-2025", method: "Credit Card", email: "user1@example.com" },
        { name: "Streak", last: "28-02-2025", method: "Credit Card", email: "user1@example.com" },

    ];

    return (
        <div className='flex flex-col gap-5 w-full'>
            <PageTitle title='Users' />
            <DataTable columns={columns} data={data} />
        </div>
    );
}

export type Payment = {
    name: string;
    last: string;
    method: string;
    email: string;
}

export const columns: ColumnDef<Payment>[] = [
    {
        accessorKey: "name",
        header: "Name",
        cell: ({ row }) => {
            return <div className='flex gap-2 items-center'>
                <img className='h-10 w-10'
                    src={`https://api.dicebear.com/9.x/lorelei/svg?seed=${row.getValue("name")}`} />
                <p>{row.getValue("name")}</p></div>;
        }
    },
    {
        accessorKey: "email",
        header: "Email",
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
