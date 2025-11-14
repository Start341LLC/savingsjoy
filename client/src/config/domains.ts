import { Domain } from "@shared/schema";
import apartmentRentalImg from "@assets/generated_images/Apartment_rental_domain_thumbnail_13b36437.png";
import incomeTaxImg from "@assets/generated_images/Income_tax_domain_thumbnail_0fae0d98.png";
import partyRentalsImg from "@assets/generated_images/Party_rentals_domain_thumbnail_f4bc630d.png";
import trainScheduleImg from "@assets/generated_images/Train_schedule_domain_thumbnail_58731284.png";

export const premiumDomains: Domain[] = [
  {
    name: "ApartmentRental.com",
    description: "Premium domain for apartment rental listings and property management services",
    category: "Real Estate",
    imageUrl: apartmentRentalImg
  },
  {
    name: "IncomeTax.com",
    description: "Authoritative domain for tax preparation, filing services, and tax advice",
    category: "Finance",
    imageUrl: incomeTaxImg
  },
  {
    name: "PartyRentals.com",
    description: "Premier destination for party equipment, event rentals, and celebration supplies",
    category: "Events",
    imageUrl: partyRentalsImg
  },
  {
    name: "TrainSchedule.com",
    description: "Essential resource for train schedules, railway timetables, and transit information",
    category: "Transportation",
    imageUrl: trainScheduleImg
  },
];
