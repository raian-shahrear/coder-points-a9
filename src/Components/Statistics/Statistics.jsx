import React, { useContext } from 'react';
import { ItemContext } from '../../Utilities/Main';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
const Statistics = () => {
  const items = useContext(ItemContext);
  console.log(items)

  return (
    <section className='w-11/12 mx-auto my-24'>
      <h1 className='text-center mb-6 text-4xl font-semibold'>The <span className='text-amber-500'>Line Chart</span> is showing the total number of quiz for each tech</h1>
      <div className='flex justify-center'>
        <LineChart 
          width={800} 
          height={500} 
          data={items} 
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="total" stroke="rgb(234 179 8)" activeDot={{ r: 8 }} />
        </LineChart>
      </div>
    </section>
  );
};

export default Statistics;