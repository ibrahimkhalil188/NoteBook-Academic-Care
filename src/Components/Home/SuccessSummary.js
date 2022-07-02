import React from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';


const SuccessSummary = () => {

    const number = [1600, 570, 1490, 455, 2444]

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
                                    <div className="text-4xl text-center">

                                        {isVisible ? <CountUp end={n} /> : null}+
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