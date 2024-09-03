import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import Swal from 'sweetalert2'

const JobDetails = () => {
    const {id} = useParams();
    const [job,setJob] = useState([])
    // console.log(id)
    useEffect(() => {
        fetch(`http://localhost:3000/all-jobs/${id}`).then(res => res.json()).then(data => setJob(data))
    },[])

    const handleApply = async() => {
        const { value: url } = await Swal.fire({
            input: "url",
            inputLabel: "URL address",
            inputPlaceholder: "Enter the URL"
          });
          if (url) {
            Swal.fire(`Entered URL: ${url}`);
          }
    }


  return (
    <div className='max-w-screen-lg mx-auto xl:px-24 px-4 py-8'>
            <h2 className='text-2xl font-bold mb-4'>Job Details</h2>
            <h1 className='text-3xl font-semibold mb-4'>{job?.jobTitle}</h1>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <div className='bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105'>
                    <h3 className='text-xl font-semibold mb-2'>Job Details</h3>
                    <p className='text-gray-700'>
                        {job?.description || "Detailed information about the job will be available here."}
                    </p>
                </div>

                <div className='bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105'>
                    <h3 className='text-xl font-semibold mb-2'>Job Benefits</h3>
                    <ul className='list-disc list-inside text-gray-700'>
                        <li>Competitive salary and benefits package</li>
                        <li>Flexible working hours and remote work options</li>
                        <li>Health insurance and wellness programs</li>
                        <li>Opportunities for career growth and development</li>
                    </ul>
                </div>

                <div className='bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105'>
                    <h3 className='text-xl font-semibold mb-2'>Job Outline</h3>
                    <ul className='list-disc list-inside text-gray-700'>
                        <li>Design and implement new features</li>
                        <li>Collaborate with cross-functional teams</li>
                        <li>Maintain and improve existing codebase</li>
                        <li>Participate in code reviews and team meetings</li>
                    </ul>
                </div>

                <div className='bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105'>
                    <h3 className='text-xl font-semibold mb-2'>Future Growth</h3>
                    <p className='text-gray-700'>
                        This role offers significant opportunities for professional development and advancement within the company. You will have the chance to work on high-impact projects, acquire new skills, and progress in your career.
                    </p>
                </div>
            </div>

            <button className='bg-[#3575E2] px-8 py-2 text-white font-semibold rounded-lg hover:bg-[#2a5bb7] mt-6' onClick={handleApply}>
                Apply Now
            </button>
        </div>
  )
}

export default JobDetails
