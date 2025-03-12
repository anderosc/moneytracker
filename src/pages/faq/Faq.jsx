import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';


function Faq() {
  return  (
    <div style={{margin : "5%"}}>
      {[
        {
          title: "How does the budget tracking work?",
          content:
            "Our budget tracker allows you to input your total budget and categorize expenses. It calculates your spending and shows remaining savings.",
        },
        {
          title: "Can I edit or delete transactions?",
          content:
            "Yes! You can modify or remove any income or expense entries through the dashboard with just a few clicks.",
        },
        {
          title: "How do I add a new expense category?",
          content:
            "Go to the customization section and simply add a new category. You can later assign expenses to it.",
        },
        {
          title: "Is my financial data stored permanently?",
          content:
            "Currently, data is stored in the context state of the application. Once you refresh the page, the data will be lost.",
        },
        {
          title: "Can I see my spending in a chart?",
          content:
            "Yes! Your expenses and incomes are displayed visually in a dynamic graph for easy tracking.",
        },
        {
          title: "How do I update my total budget?",
          content:
            "In the budget section, simply enter your total budget amount. The system will automatically adjust your spending analysis.",
        },
        {
          title: "What happens if my expenses exceed the budget?",
          content:
            "The application will alert you if your spending exceeds the set budget, helping you stay within limits.",
        },
        {
          title: "Is there a way to export my financial data?",
          content:
            "At the moment, exporting is not supported, but future updates may include CSV or PDF export options.",
        },
        {
          title: "Can I reset all my data?",
          content:
            "You can manually clear each category or refresh the page to reset the data as it's stored temporarily.",
        },
        {
          title: "What technologies were used to build this app?",
          content:
            "This application is built with React, using Context API for state management and Material-UI components for UI design.",
        },
      ].map((item, index) => (
        <Accordion key={index}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${index}-content`}
            id={`panel${index}-header`}
          >
            <Typography component="span">{item.title}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{item.content}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
  </div>
    
  )
}

export default Faq