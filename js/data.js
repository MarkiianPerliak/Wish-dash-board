const user = {
  name: "Маркіян",
  surname: "Перляк",
  userPhoto: "photo.jpg",
  qrQode: "qr-code.svg",
  dreams: [
    { src: "lamborghini_huracan.jpg", alt: "Авто моєї мрії" },
    { src: "room.jpg", alt: "Затишна квартира в Києві" },
    { src: "blog_python.jpg", alt: "Вивчити якусь складну мову програмування наприклад phyton" },
  ],
};

// arr це середня місячна платня по рокам
const arr = [
  500,
  1000,
  1200,
  1500,
  2000,
  2100,
  2050,
  2100,
  2400,
  3000,
  3050,
  3300,
];

const necessaryExpenses = 800;

const todo = [
  { month: "Червень", skill: "JavaScript" },
  { month: "Липень", skill: "Java" },
  { month: "Серпень", skill: "Python" },
  { month: "Вересень", skill: "Самостійність" },
  { month: "Жовтень", skill: "Попробую зробити свій сайт" },
  { month: "Листопад", skill: "Не зупинятися" },
  { month: "Грудень", skill: "Креативність" },
  { month: "Січень", skill: "Вивчу коди" },
  { month: "Лютий", skill: "Нетворкінг" },
  { month: "Березень", skill: "Буду вчити Англійську" },
  { month: "Квітень", skill: "Управління фінансами" },
  { month: "Травень", skill: "Виставити свій 1 сайт" },
];

export { user, arr, necessaryExpenses, todo };
