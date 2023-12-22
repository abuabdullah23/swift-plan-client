import React from 'react';
import useMyTasks from '../../../hooks/useMyTasks';
import Chart from 'react-apexcharts';

const Dashboard = () => {
    const { myAllTask, refetch, isLoading } = useMyTasks();

    const toDoTasks = myAllTask.filter((tasks) => tasks?.status === 'to-do');
    const onGoingTasks = myAllTask.filter((tasks) => tasks?.status === 'on-going');
    const completedTasks = myAllTask.filter((tasks) => tasks?.status === 'completed');

    const taskStatistics = [
        { count: myAllTask?.length, label: 'Total Tasks' },
        { count: toDoTasks?.length, label: 'ToDo Tasks' },
        { count: onGoingTasks?.length, label: 'Ongoing Tasks' },
        { count: completedTasks?.length, label: 'Completed Tasks' },
    ]


    // for chart
    const state = {
        series: [
            {
                name: "Counts",
                data: [myAllTask?.length, toDoTasks?.length, onGoingTasks?.length, completedTasks?.length, myAllTask?.length, toDoTasks?.length, onGoingTasks?.length, completedTasks?.length]
            },
            {
                name: "length",
                data: [toDoTasks?.length, myAllTask?.length, completedTasks?.length, onGoingTasks?.length, toDoTasks?.length, myAllTask?.length, completedTasks?.length, onGoingTasks?.length]
            },
            {
                name: "Counts",
                data: [myAllTask?.length, toDoTasks?.length, onGoingTasks?.length, completedTasks?.length, myAllTask?.length, toDoTasks?.length, onGoingTasks?.length, completedTasks?.length]
            },

        ],
        options: {
            color: ['#181ee8', '#181ee8'],
            plotOptions: {
                radius: 30
            },
            chart: {
                background: 'transparent',
                foreColor: '#d0d2d6'
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                show: true,
                curve: ['smooth', 'straight', 'stepline'],
                lineCap: 'butt',
                colors: '#f0f0f0',
                width: .5,
                dashArray: 0
            },
            xaxis: {
                tasks: ['Total', 'To DO', 'On Going', 'Completed']
            },
            legend: {
                position: 'top'
            },
            // ========= Responsive chart ===========
            responsive: [
                {
                    breakpoint: 565,
                    yaxis: {
                        tasks: ['Total', 'To DO', 'On Going', 'Completed']
                    },
                    options: {
                        plotOptions: {
                            bar: {
                                horizontal: true
                            }
                        },
                        chart: {
                            height: '550px'
                        },
                    }
                }
            ]
            // ========= Responsive ===========
        }
    }


    return (
        <div className='px-2 lg:px-4 py-4'>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-7'>
                {
                    taskStatistics.map((task, i) => <div key={i} className='shadow-lg rounded flex flex-col items-center gap-3 p-4 bg-[var(--secondary)] hover:scale-105 duration-200'>
                        <p className='text-4xl font-semibold'>{task?.count}</p>
                        <p className='text-lg font-normal'>{task?.label}</p>
                    </div>)
                }

            </div>

            <div className='w-full mt-5'>
                <div className='w-full bg-[var(--body)] p-4 rounded-md'>
                    <Chart options={state.options} series={state.series} type='bar' height={400} />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;