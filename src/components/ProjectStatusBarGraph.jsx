import React, { useEffect, useState } from "react";
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { format, parseISO } from "date-fns";
import { useSelector } from "react-redux";

export const ProjectStatusBarGraph = () => {
    const [monthlyProjectData, setMonthlyProjectData] = useState([]);
    const {projects} = useSelector((store) => store.projects);

    // Define month order for sorting
    const monthOrder = {
        'Jan': 1, 'Feb': 2, 'Mar': 3, 'Apr': 4, 'May': 5, 'Jun': 6,
        'Jul': 7, 'Aug': 8, 'Sep': 9, 'Oct': 10, 'Nov': 11, 'Dec': 12
    };

    useEffect(() => {
        if (!projects || projects.length === 0) return;

        // Group projects by month and status
        const projectsByMonth = projects.reduce((acc, project) => {
            // Use start date or created date for grouping
            const date = project?.start_date || project?.createdAt;
            if (!date) return acc;

            const month = format(parseISO(date), 'MMM yyyy');
            if (!acc[month]) {
                acc[month] = {
                    month,
                    total: 0,
                    completed: 0,
                    ongoing: 0,
                    on_hold: 0,
                    planned: 0,
                    cancelled: 0
                };
            }
            acc[month].total++;
            acc[month][project?.status.toLowerCase()]++;
            return acc;
        }, {});

        // Convert to array and sort by date correctly
        const sortedData = Object.values(projectsByMonth).sort((a, b) => {
            // Split month and year
            const [monthA, yearA] = a.month.split(' ');
            const [monthB, yearB] = b.month.split(' ');

            // First compare years
            if (yearA !== yearB) {
                return parseInt(yearA) - parseInt(yearB);
            }

            // If years are the same, compare months
            return monthOrder[monthA] - monthOrder[monthB];
        });

        setMonthlyProjectData(sortedData);
    }, [projects]);

    return (
        <div className="w-full h-96">
            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                    data={monthlyProjectData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip
                        contentStyle={{ backgroundColor: '#f9f9f9' }}
                        labelStyle={{ fontWeight: 'bold' }}
                    />
                    <Legend />
                    <Bar dataKey="completed" fill="#82ca9d" name="Completed" />
                    <Bar dataKey="ongoing" fill="#ffc658" name="Ongoing" />
                    <Bar dataKey="on_hold" fill="#ff7300" name="On Hold" />
                    <Bar dataKey="planned" fill="#0088fe" name="Planned" />
                    <Bar dataKey="cancelled" fill="#ff0000" name="Cancelled" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};