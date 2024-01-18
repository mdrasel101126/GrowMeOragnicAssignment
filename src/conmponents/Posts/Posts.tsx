import { Box, Container } from "@mui/material";
import { useEffect, useState } from "react";
import { DataGrid, GridColDef } from '@mui/x-data-grid';

interface IPost{
  id:number;
  body:string;
  title:string;
  userId:number;
}


const Posts = () => {
  const [posts,setPosts]=useState<IPost[]>([]);
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res=>res.json())
    .then((data)=>{
      if(data.length>0){
        setPosts(data);
      }
    })
    .catch(err=>{
      console.log(err)
    })
  },[])

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'userId', headerName: 'User ID', width: 90 },
    {
      field: 'title',
      headerName: 'Title',
      width: 200,
      editable: true,
    },
    {
      field: 'body',
      headerName: 'Description',
      width: 550,
      editable: true,
    },
  ];



  //console.log(departments);
   
    return (
      <Container>
         <Container>
         <Box sx={{ height:"400", width: '100%' }}>
            <DataGrid
              rows={posts}
              columns={columns}
              initialState={{
                pagination: {
                  paginationModel: {
                    pageSize: 5,
                  },
                },
              }}
              pageSizeOptions={[5]}
              checkboxSelection
              disableRowSelectionOnClick
            />
         </Box>
         </Container>
         <Container>
           
         </Container>
      </Container>
    );
};

export default Posts;