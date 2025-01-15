"use client";
import React from "react";
import { DataTable } from "@/components/DataTable"; // Ensure this path is correct
import { ColumnDef } from "@tanstack/react-table";
import PageTitle from "@/components/PageTitle"; // Ensure this path is correct

export default function Settingspage() {
    // Static data for testing
    const data: Setting[] = [
        { category: "Account", value: "true" },
        { category: "Notification", value: "true" },
        { category: "Theme", value: "Light" },
        { category: "Language", value: "English" },
    ];

    return (
        <div className="flex flex-col gap-5 w-full">
            <PageTitle title="Settings" />
            <DataTable columns={columns} data={data} />
        </div>
    );
}

// Renamed and updated type definition
type Setting = {
    category: string;
    value: string;
};

// Columns definition
const columns: ColumnDef<Setting>[] = [
    {
        accessorKey: "category",
        header: "Category",
    },
    {
        accessorKey: "value",
        header: "Value",
    },
];
