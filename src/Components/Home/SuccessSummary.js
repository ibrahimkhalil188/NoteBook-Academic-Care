import React from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';


const SuccessSummary = () => {

    const number = [
        {
            id: 1,
            name: "Medical",
            number: 9678
        },
        {
            id: 1,
            name: "DU",
            number: 16000
        },
        {
            id: 1,
            name: "RU",
            number: 32000
        },
        {
            id: 1,
            name: "JU",
            number: 23600
        },
        {
            id: 1,
            name: "CU",
            number: 34000
        },
    ]

    return (
        <div className='mt-24 text-5xl text-center uppercase font-bold text-black'>
            <h1 className='my-6'>Success Summary</h1>
            <div className='flex gap-4 my-12'>

                {
                    number.map(n => <div class="card w-1/5">
                        <div class="card-body text-black">
                            <div className="content" />
                            <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
                                {({ isVisible }) => (
                                    <div className="text-center">
                                        <h1 className='text-4xl'>{isVisible ? <CountUp end={n.number} /> : null}+</h1>
                                        <h1 className='text-xl'>{n.name}</h1>
                                    </div>

                                )}
                            </VisibilitySensor>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default SuccessSummary;