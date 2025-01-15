"use client"
import React from 'react';
import { DataTable } from '@/components/DataTable'; // Corrected import


import { ColumnDef } from "@tanstack/react-table";
import PageTitle from '@/components/PageTitle'; // Ensure this path is correct
import { cn } from '@/lib/utils';

type Props = {};
export default function Settingspage({ }: Props) {
    // Example static data for testing
    const data: Payment[] = [
        { category: "Account", value: "true" },
        { category: "Notification", value: "true" },
        { category: "Theme", value: "Light" },
        { category: "Language", value: "English" }



    ];

    return (
        <div className='flex flex-col gap-5 w-full'>
            <PageTitle title='Settings' />
            <DataTable columns={columns} data={data} />
        </div>
    );
}

export type Payment = {
    category: string;
    value: string;
}

export const columns: ColumnDef<Payment>[] = [
    {
        accessorKey: "category",
        header: "Category",

    },

    {
        accessorKey: "value",
        header: "Value",
    },
];


