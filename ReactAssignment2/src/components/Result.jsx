import React from 'react';

const Result = ({ props}) => {
  return (
    <table border="1"  style={{ marginTop: '20px',  }}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Math</th>
          <th>Science</th>
          <th>English</th>
          <th>Total</th>
          <th>Percentage</th>
        </tr>
      </thead>
      <tbody>
        

 {props.map((student , index)=>{
   const total = student.math +student.science +student.english;
   const percentage = ((total/300)*100).toFixed(2);


          return (
            <tr key={index}>
              <td>{student.name}</td>
              <td>{student.math}</td>
              <td>{student.science}</td>
              <td>{student.english}</td>
              <td>{total}</td>
              <td>{percentage}%</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Result;
