import {
  BellIcon,
  BookingIcon,
  HelpIcon,
  InviteIcon,
  LanguageIcon,
  PaymentIcon,
  ProfileIcon,
  ShieldCheckIcon,
} from "@/components/icons";

export const settings = [
  [
    {
      title: "My Bookings",
      icon: BookingIcon,
    },
    {
      title: "Payments",
      icon: PaymentIcon,
    },
  ],
  [
    {
      title: "Profile",
      icon: ProfileIcon,
    },
    {
      title: "Notifications",
      icon: BellIcon,
    },
    {
      title: "Security",
      icon: ShieldCheckIcon,
    },
    {
      title: "Language",
      icon: LanguageIcon,
    },
    {
      title: "Help Center",
      icon: HelpIcon,
    },
    {
      title: "Invite Friends",
      icon: InviteIcon,
    },
  ],
] as const;
