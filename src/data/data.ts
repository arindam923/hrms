export const upComingInterViews = [
  {
    id: 0,
    name: "Culture Fit Interview",
    candidate: "Darleene Robortson",
    time_slot: "12:00-13:00",
    time_left: "05:15:25",
    date: "3 jan",
  },
  {
    id: 1,
    name: "Technical Interview",
    candidate: "John Smith",
    time_slot: "14:30-15:30",
    time_left: "07:45:10",
    date: "3 jan",
  },
  {
    id: 2,
    name: "HR Round",
    candidate: "Emily Chen",
    time_slot: "10:00-11:00",
    time_left: "03:30:45",
    date: "3 jan",
  },
  {
    id: 3,
    name: "Final Interview",
    candidate: "Michael Johnson",
    time_slot: "16:00-17:00",
    time_left: "09:20:30",
    date: "3 jan",
  },
];

export interface JOB {
  title: string;
  location: string;
  type: string;
  stages: {
    name: string;
    value: number | null;
    color: string;
  }[];
}

export const jobs: JOB[] = [
  {
    title: "Research and Development Officer",
    location: "Jogja",
    type: "Fulltime",
    stages: [
      { name: "Applying Period", value: 55, color: "bg-red-500" },
      { name: "Screening", value: 40, color: "bg-blue-500" },
      { name: "Background Check", value: 32, color: "bg-yellow-500" },
      { name: "Interviews", value: 28, color: "bg-rose-400" },
      { name: "Technical Test", value: 14, color: "bg-zinc-400" },
      { name: "Onboarding", value: null, color: "bg-gray-300" },
    ],
  },
  {
    title: "Golang Back End Developer",
    location: "Jogja",
    type: "Fulltime",
    stages: [
      { name: "Applying Period", value: 35, color: "bg-red-500" },
      { name: "Screening", value: 30, color: "bg-blue-500" },
      { name: "Background Check", value: 16, color: "bg-yellow-500" },
      { name: "Interviews", value: 9, color: "bg-blue-400" },
      { name: "Technical Test", value: null, color: "bg-gray-300" },
      { name: "Onboarding", value: null, color: "bg-gray-300" },
    ],
  },
  {
    title: "Principal Designer",
    location: "Purwokerto",
    type: "Fulltime",
    stages: [
      { name: "Applying Period", value: 40, color: "bg-red-500" },
      { name: "Screening", value: 35, color: "bg-blue-500" },
      { name: "Background Check", value: 25, color: "bg-yellow-500" },
      { name: "Interviews", value: null, color: "bg-gray-300" },
      { name: "Technical Test", value: null, color: "bg-gray-300" },
      { name: "Onboarding", value: null, color: "bg-gray-300" },
    ],
  },
  {
    title: "Social Media Specialist",
    location: "Jogja",
    type: "Fulltime",
    stages: [
      { name: "Applying Period", value: 55, color: "bg-red-500" },
      { name: "Screening", value: 30, color: "bg-blue-500" },
      { name: "Background Check", value: null, color: "bg-gray-300" },
      { name: "Interviews", value: null, color: "bg-gray-300" },
      { name: "Technical Test", value: null, color: "bg-gray-300" },
      { name: "Onboarding", value: null, color: "bg-gray-300" },
    ],
  },
];
