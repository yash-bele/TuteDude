import { data } from '../data';

const Cards = () => {
  return (
    <>
      <section className='cards'>
        <h2>
          Friends who Enrolled<span>(3)</span>
        </h2>
        <div>
          {data.map((i) => {
            const { name, date, courses, tech, amount } = i;
            return (
              <div className='card' key={name}>
                <div>
                  <p>{name}</p>
                  <p>{date}</p>
                </div>
                <p>Courses Enrolled({courses})</p>
                <div>
                  {tech.map((j, k) => {
                    return (
                      <div key={k}>
                        <p>{j}</p>
                      </div>
                    );
                  })}
                </div>
                <p>
                  Referral Amount <span>₹{amount}</span>
                </p>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Cards;
