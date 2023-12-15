import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchUserList } from './FetchUser';

const FetchData = () => {
  const user = useSelector((state) => state.fetch.data);
  console.log(user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserList());
  }, []);

  return (
    <>
      <div className='border border-2 border-gray row rounded-3 p-0 m-0'>
        {user.length > 0 &&
          user?.map((item) => (
            <div className='col-md-3 mb-2 mt-4 products' key={item.id}>
              <div className='card p-2 rounded-3 product-card'>
                {/* <div>
                  <img
                    src={item.url}
                    className='card-img-top'
                    alt={item.title}
                    height={200}
                  />
                </div> */}
                <div className='card-body'>
                  <p className='card-title mb-2'>UserId: {item.id}</p>
                  <p className='card-title mb-2'>Name: {item.name}</p>
                  <p className='card-title mb-2'>User Name: {item.username}</p>
                  <p className='card-title mb-2'>User Name: {item.address.city}</p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
  // return data1.loading ? (
  //   <h2>Loading</h2>
  // ) : data1.error ? (
  //   <h2>{data1.error}</h2>
  // ) : (
  //   <div className='row my-3 mx-0 ms-4'>
  //     <h2 className='text-dark mb-4 mt-3'>User Details😉</h2>
  //     <button className='btn btn-warning'>clickMe</button>
  //     <div className='border border-2 border-gray row rounded-3'>
  //       {data1 &&
  //         data1.users &&
  //         data1.users.map((item) => (
  //           <div className='col-md-3 mb-2 mt-4 products' key={item.id}>
  //             <div className='card p-2 rounded-3 product-card'>
  //               <div className='card-body'>
  //                 <h5 className='card-title mb-2'>{item.id}</h5>
  //               </div>
  //             </div>
  //           </div>
  //         ))}
  //     </div>
  //   </div>
  // );
};
// const mapStatetoprops = (state) => {
//   return {
//     fetchImg: state.fetch.users,
//   };
// };

// const mapDispatchtoprops = (dispatch) => {
//   return {
//     fetchUsers: () => dispatch(fetchUserList()),
//   };
// };

export default FetchData;
