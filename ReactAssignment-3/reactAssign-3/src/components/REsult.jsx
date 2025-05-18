import React, { Component } from 'react';
import Pass from './Pass';
import Fail from './Fail';
import 'bootstrap/dist/css/bootstrap.min.css';

class Result extends Component {
  render() {
    const { props: students } = this.props; 

    return (
      <div className="container mt-4">
        <table className="table table-bordered table-striped">
          <thead className="table-dark">
            <tr>
              <th>Name</th>
              <th>Math</th>
              <th>Science</th>
              <th>English</th>
              <th>Total</th>
              <th>Percentage</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => {
              const total = student.math + student.science + student.english;
              const percentage = ((total / 300) * 100).toFixed(2);

              return (
                <tr key={index}>
                  <td>{student.name}</td>
                  <td>{student.math}</td>
                  <td>{student.science}</td>
                  <td>{student.english}</td>
                  <td>{total}</td>
                  <td>{percentage}%</td>
                  <td>{percentage >= 40 ? <Pass /> : <Fail />}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Result;