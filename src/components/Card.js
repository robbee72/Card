import React from 'react';
import Carddata from '../data/Carddata.json';

const Card = props => {
  return (
    <div>
      {Carddata.map((hole, index) => {
        return (
          <div key={hole.id}>
            <table>
              <tbody>
                <tr>
                  <td>{hole.holenumber}</td>
                </tr>
                <tr>
                  <td>{hole.name}</td>
                </tr>
                <tr>
                  <td>{hole.par}</td>
                </tr>
                <tr>
                  <td>{hole.championshipTees}</td>
                </tr>
                <tr>
                  <td>{hole.middleTees}</td>
                </tr>
                <tr>
                  <td>{hole.frontTees}</td>
                </tr>
                <tr>
                  <td>{hole.handicap}</td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      })}
    </div>
  );
};

export default Card;

/* <table className="scorecard">
        <tbody className="cell">
          <Carddata />
          <tr>
            <th>Player</th>
            <th>1</th>
            <th>2</th>
            <th>3</th>
            <th>4</th>
            <th>5</th>
            <th>6</th>
            <th>7</th>
            <th>8</th>
            <th>9</th>
            <th>Out</th>
          </tr>
          <tr>
            <th>Name</th>
            <th>4</th>
            <th>4</th>
            <th>4</th>
            <th>4</th>
            <th>4</th>
            <th>4</th>
            <th>4</th>
            <th>4</th>
            <th>4</th>
            <th>
              <div className="out">36</div>
            </th>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>
              <div className="player">Tiger Woods</div>
            </td>
            <td>
              <div className="double-border">6</div>
            </td>
            <td>
              <div className="par">4 </div>
            </td>
            <td>
              <div className="circle">3</div>
            </td>
            <td>
              <div className="double-border">6</div>
            </td>
            <td>
              <div className="par">4 </div>
            </td>
            <td>
              <div className="circle">3</div>
            </td>
            <td>
              <div className="double-border">6</div>
            </td>
            <td>
              <div className="par">4 </div>
            </td>
            <td>
              <div className="circle">3</div>
            </td>
            <td>
              <div className="out">45</div>
            </td>
          </tr>
          <tr>
            <td>
              <div className="player">Brooks Koepka</div>
            </td>
            <td>
              <div className="par">4</div>
            </td>
            <td>
              <div className="par">4 </div>
            </td>
            <td>
              <div className="circle">3</div>
            </td>
            <td>
              <div className="par">4</div>
            </td>
            <td>
              <div className="par">4 </div>
            </td>
            <td>
              <div className="par">4</div>
            </td>
            <td>
              <div className="par">4</div>
            </td>
            <td>
              <div className="par">4 </div>
            </td>
            <td>
              <div className="par">4</div>
            </td>
            <td>
              <div className="out">35</div>
            </td>
          </tr>
        </tbody>
      </table> */
