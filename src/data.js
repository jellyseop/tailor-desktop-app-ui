let dataArr = [
  {
    id: 13,
    date: "2023-07-03",
    isValid: true,
    visitedAt: "13:10",
    name: "홍길동",
    phone: "010-3445-1161",
    code: 355412,
    memo: "배가 많이 고픔. 좀 졸리네 이거 과연 끄타지 갈까? 제발....",
  },
  {
    id: 2,
    visitedAt: "13:12",
    name: "김복자",
    date: "2023-07-03",
    isValid: true,
    phone: "010-1234-5678",
    code: 277481,
    memo: "오늘이 마지막",
  },
  {
    id: 3,
    visitedAt: "13:14",
    name: "이준섭",
    phone: "010-9876-5432",
    code: 138721,
    memo: "디자인 끝",
  },
];

export const findByDate = (date) => {
  return dataArr.filter((data) => data.date === date.format("YYYY-MM-DD"));
};

const findById = (id) => {
  return dataArr.find((data) => data.id === id);
};

export const deleteById = (id) => {
  dataArr = dataArr.filter((data) => data.id !== id);
  return { ok: true };
};

export const create = (formInput) => {
  dataArr.push({
    id: dataArr.length + 1,
    ...formInput,
  });
  return { ok: true };
};

export const toggleValidById = (id) => {
  const visitor = findById(id);
  console.log("visitor :>> ", visitor);
  deleteById(id);
  console.log("findById(id)", findById(id));
  dataArr.push({ ...visitor, isValid: !visitor.isValid });
  return { ok: true };
};
