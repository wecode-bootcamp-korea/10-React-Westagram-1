const storyData = [
  {
    id: "yojuyoon",
    imageUrl: "/images/yoonjiyoung/profile1.jpg",
  },
  {
    id: "cho_puke",
    imageUrl: "/images/yoonjiyoung/profile2.jpg",
  },
  {
    id: "yeijih",
    imageUrl: "/images/yoonjiyoung/profile3.jpg",
  },
  {
    id: "voohje",
    imageUrl: "/images/yoonjiyoung/profile4.jpg",
  },
  {
    id: "hi_semiing",
    imageUrl: "/images/yoonjiyoung/profile5.jpg",
  },
  {
    id: "alllcotton",
    imageUrl: "/images/yoonjiyoung/profile6.jpg",
  },
  {
    id: "chch.letter",
    imageUrl: "/images/yoonjiyoung/profile7.jpg",
  },
  {
    id: "iji.boo",
    imageUrl: "/images/yoonjiyoung/profile8.jpg",
  },
  {
    id: "oottoogi",
    imageUrl: "/images/yoonjiyoung/profile9.jpg",
  },
  {
    id: "teje.official",
    imageUrl: "/images/yoonjiyoung/profile10.jpg",
  },
  {
    id: "blastmagazine",
    imageUrl: "/images/yoonjiyoung/profile11.jpg",
  },
  {
    id: "sing_ai_",
    imageUrl: "/images/yoonjiyoung/profile12.jpg",
  },
  {
    id: "gangculture",
    imageUrl: "/images/yoonjiyoung/profile13.jpg",
  },
  {
    id: "lma_jewelry",
    imageUrl: "/images/yoonjiyoung/profile14.jpg",
  },
  {
    id: "dkff.office",
    imageUrl: "/images/yoonjiyoung/profile15.jpg",
  },
  {
    id: "miakerin",
    imageUrl: "/images/yoonjiyoung/profile16.jpg",
  },
];

const random = (data) => {
  let i = data.length - 1;
  for (; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = data[i];
    data[i] = data[j];
    data[j] = temp;
  }
  return data;
};
random(storyData);

export const randomData = random(storyData);
