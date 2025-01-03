export type LinkListProps = {
  id: number;
  name: string;
  iconPath: string;
  bgColor: string;
  value: string
  url?:string
};

const LinkList: LinkListProps[] = [
  {
    id: 1,
    name: "GitHub",
    iconPath: "/images/icon-github.svg",
    bgColor: "#1A1A1A",
    value: "github",
  },
  {
    id: 2,
    name: "Frontend Mentor",
    iconPath: "/images/icon-frontend-mentor.svg",
    bgColor: "#ffffff",
    value: "frontendmentor",
  },
  {
    id: 3,
    name: "Twitter",
    iconPath: "/images/icon-twitter.svg",
    bgColor: "#43B7E9",
    value: "twitter",
  },
  {
    id: 4,
    name: "LinkedIn",
    iconPath: "/images/icon-linkedin.svg",
    bgColor: "#2D68FF",
    value: "linkedin",
  },
  {
    id: 5,
    name: "YouTube",
    iconPath: "/images/icon-youtube.svg",
    bgColor: "#EE3939",
    value: "youtube",
  },
  {
    id: 6,
    name: "Facebook",
    iconPath: "/images/icon-facebook.svg",
    bgColor: "#2442AC",
    value: "facebook",
  },
  {
    id: 7,
    name: "Twitch",
    iconPath: "/images/icon-twitch.svg",
    bgColor: "#EE3FC8",
    value: "twitch",
  },
  {
    id: 8,
    name: "Dev.to",
    iconPath: "/images/icon-devto.svg",
    bgColor: "#333333",
    value: "devto",
  },

  {
    id: 9,
    name: "Codewars",
    iconPath: "/images/icon-codewars.svg",
    bgColor: "#8A1A50",
    value: "codewars",
  },
  {
    id: 10,
    name: "Codepen",
    iconPath: "/images/icon-codepen.svg",
    bgColor: "#080808",
    value: "codepen",
  },
  {
    id: 11,
    name: "freeCodeCamp",
    iconPath: "/images/icon-freecodecamp.svg",
    bgColor: "#302267",
    value: "freecodecamp",
  },
  {
    id: 12,
    name: "GitLab",
    iconPath: "/images/icon-gitlab.svg",
    bgColor: "#EB4925",
    value: "gitlab",
  },
  {
    id: 13,
    name: "Hashnode",
    iconPath: "/images/icon-hashnode.svg",
    bgColor: "#0330D1",
    value: "hashnode",
  },
  {
    id: 14,
    name: "Stack Overflow",
    iconPath: "/images/icon-stack-overflow.svg",
    bgColor: "#EC7100",
    value: "stackoverflow",
  },
];

export default LinkList;