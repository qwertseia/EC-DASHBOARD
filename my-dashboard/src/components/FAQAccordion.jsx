import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import {
  ExpandMore as ExpandMoreIcon,
  Help as HelpIcon,
  Photo as PhotoIcon,
  PhoneAndroid as PhoneIcon,
  Sort as SortIcon,
} from "@mui/icons-material";

// Array of FAQ objects containing question, answer, and icon for each frequently asked question
const faqs = [
  {
    q: "What is this dashboard?",
    a: "This dashboard shows cards, tables, and accordions made with Material UI.",
    icon: <HelpIcon sx={{ color: "primary.main" }} />,
  },
  {
    q: "Can I change the profile photo?",
    a: "Yes, just replace the image file in src/assets/profile.jpg.",
    icon: <PhotoIcon sx={{ color: "secondary.main" }} />,
  },
  {
    q: "Is it responsive?",
    a: "Yes! It's built with MUI Grid and automatically adapts to all screen sizes.",
    icon: <PhoneIcon sx={{ color: "primary.main" }} />,
  },
  {
    q: "How do I sort the table?",
    a: "Click on the column headers (Name or Role) to sort the data in ascending or descending order.",
    icon: <SortIcon sx={{ color: "secondary.main" }} />,
  },
];

// FAQAccordion component renders a list of expandable FAQ items with icons and smooth animations
function FAQAccordion() {
  return (
    <>
      {faqs.map((faq, i) => (
        <Accordion
          key={i}
          sx={{
            mb: 1,
            borderRadius: 2,
            border: "1px solid rgba(211, 47, 47, 0.1)",
            backgroundColor: "rgba(255, 255, 255, 0.5)",
            backdropFilter: "blur(10px)",
            transition: "all 0.3s ease-in-out",
            "&:hover": {
              boxShadow: "0px 4px 12px rgba(211, 47, 47, 0.15)",
              transform: "translateY(-2px)",
            },
            "&:before": {
              display: "none",
            },
            "&.Mui-expanded": {
              boxShadow: "0px 8px 24px rgba(255, 152, 0, 0.2)",
            },
          }}
        >
          <AccordionSummary
            expandIcon={
              <ExpandMoreIcon
                sx={{
                  color: "primary.main",
                  transition: "transform 0.3s ease-in-out",
                  "&.Mui-expanded": {
                    transform: "rotate(180deg)",
                  },
                }}
              />
            }
            sx={{
              "& .MuiAccordionSummary-content": {
                alignItems: "center",
              },
            }}
          >
            {faq.icon}
            <Typography
              fontWeight={600}
              sx={{
                ml: 2,
                color: "text.primary",
                transition: "color 0.3s ease-in-out",
              }}
            >
              {faq.q}
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              pt: 0,
              animation: "slideDown 0.3s ease-out",
            }}
          >
            <Typography
              color="text.secondary"
              sx={{
                fontWeight: 500,
                lineHeight: 1.6,
              }}
            >
              {faq.a}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}

      {/* Slide down animation */}
      <style jsx global>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
}

export default FAQAccordion;
