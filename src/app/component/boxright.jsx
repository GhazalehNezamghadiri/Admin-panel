import { Box, Card, CardContent, Typography, Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import CreditCardIcon from "@mui/icons-material/CreditCard"



export default function RightPanel() {
  return (
    <Box display="flex" flexDirection="column" gap={2} sx={{width:{xs:'100%',lg:'450px'}}}>
    
      <Card
        sx={{
          background: "linear-gradient(135deg, #1E3A8A, #3B82F6)",
          color: "#fff",
        }}
      >
        <CardContent
          sx={{
            display: "flex",
            flexWrap:'wrap',
            gap:2
          
          }}
        >
          <CreditCardIcon sx={{ fontSize: 30, opacity: 0.9 }} />
          <Typography variant="h6" fontWeight="bold">
            $4,200
          </Typography>
          <Typography variant="h6">Total Income</Typography>
        </CardContent>
      </Card>

      

      <Box>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ backgroundColor: "#f0f0f0" }}>
            <Typography> By Source </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>Product Sales: $3,000 <br />Services: $800 <br /> Subscriptions: $400 </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ backgroundColor: "#f0f0f0" }}>
            <Typography>By Period</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>This Month: $1,200 <br /> Last Month: $950 <br /> Last 3 Month: $4,200</Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ backgroundColor: "#f0f0f0" }}>
            <Typography>By Region</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>Tehran: $2,500 <br /> Shiraz: $700 <br /> Isfan: 1,000$ </Typography>
          </AccordionDetails>
        </Accordion>

      </Box>

    </Box>
  )

}