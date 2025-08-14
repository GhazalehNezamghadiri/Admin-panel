'use client'
import { 
    IconButton, List, ListItem, Typography, 
    Dialog, DialogTitle, DialogContent, DialogActions, 
    Button, TextField, Box, useMediaQuery 
} from "@mui/material";
import { useState, useEffect } from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useTheme } from "@mui/material/styles";

export default function Users() {
    const [users, setUsers] = useState([]);
    const [load, setLoad] = useState(true);
    const [open, setOpen] = useState(false);
    const [edit, setEdit] = useState({ email: '', first: '', last: '', age: '' });
    const [search, setSearch] = useState('');

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    useEffect(() => {
        fetch('https://randomuser.me/api/?results=20')
            .then(res => res.json())
            .then(data => {
                setUsers(data.results);
                setLoad(false);
            })
            .catch(err => console.log('Error fetching data', err));
    }, []);

    const deleteUser = (email) => {
        if (window.confirm('Are you sure?')) {
            setUsers(users.filter((user) => user.email !== email));
        }
    };

    const EditOpen = (user) => {
        setEdit({
            email: user.email,
            first: user.name.first,
            last: user.name.last,
            age: user.dob.age
        });
        setOpen(true);
    };

    const EditClose = () => setOpen(false);

    const Save = () => {
        setUsers((prev) =>
            prev.map((u) =>
                u.email === edit.email 
                ? { ...u, name: { ...u.name, first: edit.first, last: edit.last }, dob: { ...u.dob, age: edit.age } }
                : u
            )
        );
        setOpen(false);
    };

    const searchuser = users.filter(user =>
        user.name.first.toLowerCase().includes(search.toLowerCase()) ||
        user.name.last.toLowerCase().includes(search.toLowerCase()) ||
        user.email.toLowerCase().includes(search.toLowerCase())
    );

    if (load) return <div>Loading...</div>

    return (
        <>
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: isMobile ? 2 : 8 }}>
                <TextField 
                    label='Search' 
                    variant="outlined"
                    size="small"
                    sx={{ width: isMobile ? '95%' : '90%'  , backgroundColor:'#f5f5f5'}}  
                    value={search} 
                    onChange={(e) => setSearch(e.target.value)} 
                />
            </Box>

            <List sx={{ width: '100%', mt: isMobile ? 2 : 8 }}>
                {!isMobile && (
                    <ListItem sx={{ borderBottom: '1px solid #ddd', py: 2 }}>
                        <Typography sx={{ flex: 2, fontWeight: 'bold' }}>First Name</Typography>
                        <Typography sx={{ flex: 2, fontWeight: 'bold' }}>Last Name</Typography>
                        <Typography sx={{ flex: 1, fontWeight: 'bold' }}>Age</Typography>
                        <Typography sx={{ flex: 3, fontWeight: 'bold' }}>Email</Typography>
                        <Typography sx={{ flex: 2, fontWeight: 'bold' }}>Action</Typography>
                    </ListItem>
                )}

                {searchuser.map((user, i) => (
                    <ListItem 
                        key={i} 
                        sx={{ 
                            display: 'flex', 
                            flexDirection: isMobile ? 'column' : 'row', 
                            alignItems: isMobile ? 'flex-start' : 'center', 
                            borderBottom: '1px solid #ddd', 
                            py: 1, gap: 1 
                        }}
                    >
                        {isMobile ? (
                            <>
                                <Typography><b>First:</b> {user.name.first}</Typography>
                                <Typography><b>Last:</b> {user.name.last}</Typography>
                                <Typography><b>Age:</b> {user.dob.age}</Typography>
                                <Typography><b>Email:</b> {user.email}</Typography>
                                <Box>
                                    <IconButton color="error" size="small" onClick={() => deleteUser(user.email)}>
                                        <DeleteIcon />
                                    </IconButton>
                                    <IconButton color="success" size="small" onClick={() => EditOpen(user)}>
                                        <EditIcon />
                                    </IconButton>
                                </Box>
                            </>
                        ) : (
                            <>
                                <Typography sx={{ flex: 2 }}>{user.name.first}</Typography>
                                <Typography sx={{ flex: 2 }}>{user.name.last}</Typography>
                                <Typography sx={{ flex: 1 }}>{user.dob.age}</Typography>
                                <Typography sx={{ flex: 3 }}>{user.email}</Typography>
                                <Typography sx={{ flex: 2 }}>
                                    <IconButton color="error" size="small" onClick={() => deleteUser(user.email)}>
                                        <DeleteIcon />
                                    </IconButton>
                                    <IconButton color="success" size="small" onClick={() => EditOpen(user)}>
                                        <EditIcon />
                                    </IconButton>
                                </Typography>
                            </>
                        )}
                    </ListItem>
                ))}
            </List>

            <Dialog open={open} onClose={EditClose} fullWidth={isMobile}>
                <DialogTitle>Edit User info</DialogTitle>
                <DialogContent sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 2 }}>
                    <TextField
                        label="First Name"
                        value={edit.first}
                        onChange={(e) => setEdit({ ...edit, first: e.target.value })}
                    />
                    <TextField
                        label="Last Name"
                        value={edit.last}
                        onChange={(e) => setEdit({ ...edit, last: e.target.value })}
                    />
                    <TextField
                        label="Age"
                        type="number"
                        value={edit.age}
                        onChange={(e) => setEdit({ ...edit, age: e.target.value })}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={EditClose}>Cancel</Button>
                    <Button variant="contained" sx={{ backgroundColor: '#795549' }} onClick={Save}>Save</Button>
                </DialogActions>
            </Dialog>
        </>
    );
}