import React from "react";
import { Box, Typography } from "@mui/material";

export default function VisitorCards() {
  const cards = [
    { label: "Visitors", count: 22000, subtext: "Since last week", bgColor: "#1e3a8a", textColor: "#fff" },
    { label: "New Users", count: 22000, subtext: "Since last month", bgColor: "#16a34a", textColor: "#fff" }, 
    { label: "Page views", count: 20000, subtext: "Since yesterday", bgColor: "#1e40af", textColor: "#fff" }, 
    { label: "Active users", count: 12000, subtext: "Since last 24 hours", bgColor: "#22c55e", textColor: "#fff" }, 
  ]

  return (
    <Box sx={{ display: "flex",flexWrap:'wrap',width:{xs:'90%',md:'40%'}, gap: 2, marginTop:'80px' , mr:{md:5} }}>
      {cards.map((card, i) => (
        <Box
          key={i}
           sx={{
            flex: 1,
            backgroundColor: card.bgColor,
            color: card.textColor,
            borderRadius: 2,
            p: 3,
            boxShadow: 3,
          }}
        >
          <Typography variant="subtitle2" sx={{ opacity: 0.8 }}>
            {card.label}
          </Typography>

          <Typography variant="h5" fontWeight="bold" mt={1}>
            {card.count.toLocaleString()}
          </Typography>

          <Typography variant="body2" sx={{ opacity: 0.7, mt: 1 }}>
            {card.subtext}
          </Typography>

        </Box>
      ))}
    </Box>
  );
}
