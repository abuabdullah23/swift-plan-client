import React from 'react';

const FAQ = () => {
    const faqs = [
        {
            question: 'How do I create a new task?',
            answer: 'To create a new task, click on the "New Task" button on the dashboard and fill in the required details.'
        },
        {
            question: 'Can I edit an existing task?',
            answer: 'Yes, you can edit an existing task by clicking on the "Edit" button next to the task details.'
        },
        {
            question: 'What is the deadline feature for?',
            answer: 'The deadline feature allows you to set a due date for your tasks, helping you prioritize and manage your time effectively.'
        },
        {
            question: 'Is the task management platform free?',
            answer: 'Yes, our task management platform offers a free plan with essential features. You can also explore premium plans for advanced functionalities.'
        },
    ];

    return (
        <div className="py-16">
            <div className="container mx-auto">
                <h2 className="text-3xl font-semibold mb-8 text-center">Frequently Asked Questions</h2>

                <div className="grid gap-6">
                    {faqs.map((faq, index) => (
                        <div key={index} className="p-6 rounded-lg shadow-lg">
                            <h3 className="text-xl font-semibold mb-4">{faq.question}</h3>
                            <p>{faq.answer}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FAQ;
