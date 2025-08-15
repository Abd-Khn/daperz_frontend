// Calendly Configuration
export const CALENDLY_CONFIG = {
  // Replace this with your actual Calendly URL
  // Format: `https://calendly.com/your-username/event-type-name`
  MEETING_SCHEDULER_URL: "https://calendly.com/team-daperz/30min",
  
  // Widget customization options
  WIDGET_OPTIONS: {
    hideEventTypeDetails: true,
    hideLandingPageDetails: true,
    hideGdprBanner: true,
    hideCookieBanner: true,
    hideBookingNote: false,
    hideBranding: true,
    hideHeader: false,
    hideFooter: false,
    // Color customization to match website theme
    primaryColor: "FFE100", // Yellow accent color (matches website CTA buttons)
    backgroundColor: "14181D", // Dark background (matches website dark sections)
    textColor: "FFFFFF", // White text
    linkColor: "FDD90B", // Yellow for links (matches website yellow theme)
  },
  
  // Meeting types (optional - for reference)
  MEETING_TYPES: [
    "Initial Consultation",
    "Project Discussion",
    "Technical Review",
    "Follow-up Meeting"
  ],
  
  // Default meeting duration (in minutes)
  DEFAULT_DURATION: 30,
  
  // Timezone (will use user's local timezone by default)
  DEFAULT_TIMEZONE: "UTC",
};

export default CALENDLY_CONFIG;