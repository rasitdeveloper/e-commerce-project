import React from 'react'
import { Grid, Box, Flex, Button } from "@chakra-ui/react";
import Card from '../../components/Card'
import { useInfiniteQuery } from 'react-query'
import { getTwelveProducts } from '../../api'

function Products() {

    const { 
        data,
		error,
		fetchNextPage,
		hasNextPage,
		isFetchingNextPage,
		status, } = useInfiniteQuery('product', getTwelveProducts, {
        getNextPageParam: (lastPage, pages) => {
            const morePagesExist = lastPage?.length === 12;
            if(!morePagesExist) return;
            return pages.length + 1;
        }
    })
    // https://react-query.tanstack.com/guides/infinite-queries
    if (status === "loading") return "Loading...";

    if (status === "error") return "An error has occurred: " + error.message;


  return (
    <div>
        <Grid templateColumns="repeat(3, 1fr)" gap={4}>
            {data.pages.map((group, i) => (
			    <React.Fragment key={i}>
					{group.map((item) => (
						<Box w="100%" key={item._id}>
							<Card item={item} />
						</Box>
					))}
				</React.Fragment>
			))}
        </Grid>
        <Flex mt="10" justifyContent="center">
		    <Button
				onClick={() => fetchNextPage()}
				isLoading={isFetchingNextPage}
				disabled={!hasNextPage || isFetchingNextPage}
			>
				{isFetchingNextPage
					? "Loading more..."
					: hasNextPage
					? "Load More"
					: "Nothing more to load"}
			</Button>
		</Flex>
    </div>
  )
}

export default Products