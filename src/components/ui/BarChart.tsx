"use client";
import React from "react";
import { Bar, BarChart as BarGraph, ResponsiveContainer, XAxis, YAxis } from "recharts";

// Removed unused Props type and unnecessary empty object type
const data = [
    { name: "Jan", total: Math.floor(Math.random() * 5000) + 1000 },
    { name: "Feb", total: Math.floor(Math.random() * 5000) + 1000 },
    { name: "March", total: Math.floor(Math.random() * 5000) + 1000 },
    { name: "April", total: Math.floor(Math.random() * 5000) + 1000 },
    { name: "May", total: Math.floor(Math.random() * 5000) + 1000 },
    { name: "June", total: Math.floor(Math.random() * 5000) + 1000 },
    { name: "July", total: Math.floor(Math.random() * 5000) + 1000 },
    { name: "Aug", total: Math.floor(Math.random() * 5000) + 1000 },
    { name: "Sep", total: Math.floor(Math.random() * 5000) + 1000 },
    { name: "Oct", total: Math.floor(Math.random() * 5000) + 1000 },
    { name: "Nov", total: Math.floor(Math.random() * 5000) + 1000 },
    { name: "Dec", total: Math.floor(Math.random() * 5000) + 1000 },
];

export default function BarChart() {
    return (
        <ResponsiveContainer width="100%" height={350}>
            <BarGraph data={data}>
                <XAxis
                    dataKey="name"
                    tickLine={false}
                    axisLine={false}
                    stroke="#888888"
                    fontSize={12}
                />
                <YAxis
                    tickLine={false}
                    axisLine={false}
                    stroke="#888888"
                    fontSize={12}
                />
                <Bar dataKey="total" radius={[4, 4, 0, 0]} />
            </BarGraph>
        </ResponsiveContainer>
    );
}
