"use client"
import StepperForm from '@/components/StepperForm/StepperFrom';
import GurdianInfo from '@/components/StudentForms/GurdianInfo';
import LocalGurdianInfo from '@/components/StudentForms/LocalGurdianInfo';
import StudentBasicInfo from '@/components/StudentForms/StudentBasicInfo';
import StudentInfo from '@/components/StudentForms/StudentInfo';
import React from 'react';

const CreateStudentPage = () => {
    const steps = [
        {
            title: '🪪 Student Information',
            content: <StudentInfo />,
        },
        {
            title: 'Basic Information',
            content: <StudentBasicInfo />
        },
        {
            title: 'Gardian Information',
            content: <GurdianInfo />
        },
        {
            title: ' Local Gardian Information',
            content: <LocalGurdianInfo />
        },
    ];

    const handleStudentSubmit = async (data: any) => {
        try {
            console.log(data);
        } catch (err) {
            console.error(err);
        }
    };



    return (
        <div>
            <h1 style={{ textAlign: 'center' ,marginBottom:'15px' }}>Create Student 🧑‍🎓</h1>
            <StepperForm
                submitHandler={(value) => {
                    handleStudentSubmit(value);
                }}
                steps={steps} />
        </div>
    );
};

export default CreateStudentPage;