'use client'
import { useEffect, useState } from "react";
import { List, ListItem, Avatar, Typography, IconButton, Box } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'

export default function Products() {
    const [products, setProducts] = useState([])
    const [load, setLoad] = useState(true)

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
                setLoad(false)
            })
            .catch(err => {
                console.log('Error fetching products')
                setLoad(false)
            })
    }, [])

    const deleteItem = (id) => {
        const sure = window.confirm('Are you sure?')
        if (sure) {
            const filtered = products.filter(product => product.id !== id)
            setProducts(filtered)
        }
    }

    if (load) {
        return <Typography>Loading...</Typography>
    }

    return (
        <List sx={{ width: {xs:'90%',md:'80%',lg:'80%'}, margin: '80px auto 0 auto' , marginLeft:{xs:0,md:'280px'}}}>
            <ListItem sx={{ display: 'flex', borderBottom: '1px solid #ddd', py: 1 }}>
                <Typography sx={{ flex: 3, fontWeight: 'bold' }}>Product</Typography>
                <Typography sx={{ flex: 1, fontWeight: 'bold' }}>Price</Typography>
                <Typography sx={{ flex: 2, fontWeight: 'bold' }}>Category</Typography>
                <Typography sx={{ width: 60, fontWeight: 'bold', textAlign: 'center' }}>Action</Typography>
            </ListItem>
            {products.map(product => (
                <ListItem
                    key={product.id}
                    sx={{ display: 'flex', alignItems: 'center', borderBottom: '1px solid #ddd', py: 1 }}
                >
                    <Box sx={{ flex: 3, display: 'flex', alignItems: 'center', gap: 2 }}>
                        <Avatar
                            src={product.image}
                            sx={{ width: 60, height: 60 }}
                            variant="circular"
                        />
                        <Typography sx={{ fontWeight: 'bold' }}>
                            {product.title}
                        </Typography>
                    </Box>

                    <Typography sx={{ flex: 1, fontWeight: 'bold' ,px:1}}>
                        ${product.price}
                    </Typography>

                    <Typography sx={{ flex: 2 }}>
                        {product.category}
                    </Typography>

                    <Box sx={{ width: 60, display: 'flex', justifyContent: 'center' }}>
                        <IconButton color="error" onClick={() => deleteItem(product.id)}>
                            <DeleteIcon />
                        </IconButton>
                    </Box>

                </ListItem>
            ))}
        </List>
    )
}