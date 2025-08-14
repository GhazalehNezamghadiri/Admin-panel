import { Card, CardContent, Typography, Box } from "@mui/material"
import CreditCardIcon from "@mui/icons-material/CreditCard"
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"




export default function StatBoxes() {
  return (
    <Box display="flex" gap={2} sx={{ flexDirection: { xs: 'column', md: 'row' }, }}>


      <Card sx={{ background: "linear-gradient(135deg, #1E3A8A, #3B82F6)", color: "#fff", flex: 1, width: '100%' }}>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 1,
          }} >


          <CreditCardIcon sx={{ fontSize: 40, opacity: 0.9 }} />
          <Typography variant="h4" fontWeight="bold">
            $400
          </Typography>
          <Typography variant="h6">Total Earning</Typography>
        </CardContent>

      </Card>



      <Card sx={{ background: "linear-gradient(135deg, #065F46, #10B981)", color: "#fff", flex: 1, width: { xs: '100%', md: "700px" } }}>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            minHeight: 150,
            gap: 1,
          }}
        >
          <ShoppingCartIcon sx={{ fontSize: 40, opacity: 0.9 }} />
          <Typography variant="h4" fontWeight="bold">
            $800
          </Typography>
          <Typography variant="h6">Total Order</Typography>
        </CardContent>
      </Card>

    </Box>
  )
}