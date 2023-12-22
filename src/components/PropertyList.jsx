import React from 'react'
import PropertyCard from './PropertyCard'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

export default function PropertyList() {
    const [properties, setProperties] = useState([]);

    // This method fetches the records from the database.
    useEffect(() => {
        async function getProperties() {
            const response = await fetch(`http://localhost:5000/properties/`);
            if (!response.ok) {
                const message = `An error occurred: ${response.statusText}`;
                window.alert(message);
                return;
            }
            const properties = await response.json();
            setProperties(properties);
        }
        getProperties();
        return;
    }, [properties.length]);
    // This method will delete a property
    async function deleteProperty(id) {
        await fetch(`http://localhost:5000/${id}`, {
            method: "DELETE"
        });
        const newProperties = properties.filter((el) => el._id !== id);
        setProperties(newProperties);
    }

    return (
        <>
            <Box sx={{
                flexGrow: 1,
                p: 3,
                backgroundImage: 'linear-gradient(#8ECAE6 , #24c5f3)'
            }}
            >
                <Grid container spacing={2}>
                    {
                        properties.map((property, index) => {
                            return (
                                <Grid item xs={6} md={3}>
                                    <PropertyCard key={index} property={property} />
                                </Grid>
                            )
                        })
                    }
                </Grid>
            </Box>
        </>
    )
}


// export default function RecordList() {
//     // This method fetches the records from the database.
//     useEffect(() => {
//         async function getProperties() {
//             const response = await fetch(`http://localhost:5000/record/`);
//             if (!response.ok) {
//                 const message = `An error occurred: ${response.statusText}`;
//                 window.alert(message);
//                 return;
//             }
//             const records = await response.json();
//             setProperties(properties);
//         }
//         getProperties();
//         return;
//     }, [properties.length]);
//     // This method will delete a property
//     async function deleteProperty(id) {
//         await fetch(`http://localhost:5000/${id}`, {
//             method: "DELETE"
//         });
//         const newProperties = properties.filter((el) => el._id !== id);
//         setProperties(newProperties);
//     }
//   // This method will map out the properties on the table
//  function propertyList() {
//    return properties.map((record) => {
//      return (
//        <Record
//          record={record}
//          deleteRecord={() => deleteRecord(record._id)}
//          key={record._id}
//        />
//      );
//    });
//  }
//   // This following section will display the table with the records of individuals.
//  return (
//    <div>
//      <h3>Record List</h3>
//      <table className="table table-striped" style={{ marginTop: 20 }}>
//        <thead>
//          <tr>
//            <th>Name</th>
//            <th>Position</th>
//            <th>Level</th>
//            <th>Action</th>
//          </tr>
//        </thead>
//        <tbody>{recordList()}</tbody>
//      </table>
//    </div>
//  );
// }


// const propertyTemp = [
//     {
//         name: 'Property 1',
//         description: 'This is property 1',
//         image: 'https://dummyimage.com/300x200/000/fff'
//     },
//     {
//         name: 'Property 2',
//         description: 'This is property 2',
//         image: 'https://dummyimage.com/300x200/000/fff'
//     },
//     {
//         name: 'Property 3',
//         description: 'This is property 3',
//         image: 'https://dummyimage.com/300x200/000/fff'
//     },
//     {
//         name: 'Property 4',
//         description: 'This is property 4',
//         image: 'https://dummyimage.com/300x200/000/fff'
//     },
//     {
//         name: 'Property 5',
//         description: 'This is property 5',
//         image: 'https://dummyimage.com/300x200/000/fff'
//     },
//     {
//         name: 'Property 6',
//         description: 'This is property 6',
//         image: 'https://dummyimage.com/300x200/000/fff'
//     },
//     {
//         name: 'Property 7',
//         description: 'This is property 7',
//         image: 'https://dummyimage.com/300x200/000/fff'
//     },
// ]
