import { useMemo } from 'react'
import { useQuery, useMutation, useQueryClient } from "react-query"
import { getAllProduct, deleteProduct } from '../../../api'
import { Text } from '@chakra-ui/react'
import { Table, Popconfirm } from 'antd'
import { Link } from "react-router-dom"

function Products() {
  const queryClient = useQueryClient();

  const { isLoading, isError, data, error } = useQuery('admin:products', getAllProduct)

  // for refetch, edit process, update the table
  const deleteMutation = useMutation(deleteProduct, {
		onSuccess: () => queryClient.invalidateQueries("admin:products"),
	});
  
  // https://ant.design/components/table/
  const columns = useMemo(() => {
    return [
      {
        title:'Title',
        dataIndex:'title',
        key:'title'
      },{
        title:'Price',
        dataIndex:'price',
        key:'price'
      },{
        title:'Created At',
        dataIndex:'createdAt',
        key:'createdAt'
      },{
        title:'Action',
        key:'action',
        render: (text,record) => (
          <>
            <Link to={`/admin/products/${record._id}`}>Edit</Link>
            <Popconfirm 
              title='Are you sure' 
              onConfirm={() => {
                deleteMutation.mutate(record._id, {
                  onSuccess: () => {
                    console.log("success");
                  },
                });
              }}
              onCancel={() => console.log('Cancelled')}
              okText='Yes'
              cancelText='No'
              placement='left'
            >
              <a href="/#" style={{ marginLeft: 12 }}>Delete</a>
            </Popconfirm>
          </>
        )
      }
    ]
  }, []) // eslint-disable-line react-hooks/exhaustive-deps


  if(isLoading)
    return <div>Loading...</div>
  
  if(isError)
    return <div>Error {error.message}</div>

  

  return (
    <div>
      <Text fontSize='22' p='12'>Products</Text>
      <Table dataSource={data} columns={columns} rowKey="_id"></Table>
    </div>
  )
}

export default Products