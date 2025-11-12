console.log("Bài 1:");
const products = [
  { id: 1, name: "Laptop", category: "Electronics", price: 1200 },
  { id: 2, name: "Phone", category: "Electronics", price: 800 },
  { id: 3, name: "Shirt", category: "Clothing", price: 40 },
  { id: 4, name: "Shoes", category: "Clothing", price: 60 },
  { id: 5, name: "Headphones", category: "Electronics", price: 150 },
];
const product = products.filter(function (value) {
  if (value.category === "Electronics") {
    return value;
  }
});
console.log(product);

const tong = product.map(function (value) {
  return value.price;
});
const total = tong.reduce(function (acc, cur) {
  return acc + cur;
});
console.log(total);

console.log("Bài 2:");
const students = [
  { id: 1, name: "An", scores: { math: 8, english: 7, science: 9 } },
  { id: 2, name: "Bình", scores: { math: 6, english: 8, science: 7 } },
  { id: 3, name: "Châu", scores: { math: 9, english: 6, science: 8 } },
];
const tong2 = students.map(function (value) {
  const diemTungHocSinh = Object.values(value.scores);
  const total2 = diemTungHocSinh.reduce(function (acc, cur) {
    return acc + cur;
  });
  value.scores = total2 / diemTungHocSinh.length;
  return value;
});
console.log(tong2);

const trungBinhDiemLonNhat = tong2.reduce(function (acc, cur) {
  // console.log(acc.scores);
  if (acc.scores < cur.scores) {
    return cur;
  } else {
    return acc;
  }
});
console.log(trungBinhDiemLonNhat);

const diemGiamDan = tong2.sort(function (a, b) {
  return b.scores - a.scores;
});
console.log(diemGiamDan);

console.log("Bài 3:");
const orders = [
  {
    orderId: 101,
    customer: "John",
    items: [{ name: "Laptop", price: 1000, quantity: 1 }],
  },
  {
    orderId: 102,
    customer: "Alice",
    items: [
      { name: "Phone", price: 500, quantity: 2 },
      { name: "Charger", price: 50, quantity: 3 },
    ],
  },
  {
    orderId: 103,
    customer: "Bob",
    items: [{ name: "Headphones", price: 200, quantity: 2 }],
  },
];

console.log("Bài 4:");
const employees = [
  { id: 1, name: "Mai", department: "IT", salary: 1200 },
  { id: 2, name: "Nam", department: "HR", salary: 800 },
  { id: 3, name: "Hà", department: "IT", salary: 1500 },
  { id: 4, name: "Linh", department: "Marketing", salary: 900 },
  { id: 5, name: "Phúc", department: "IT", salary: 1100 },
];

const totalSalaryByDept = employees.reduce(function (acc, cur) {
  acc[cur.department] = (acc[cur.department] || 0) + cur.salary;
  return acc;
  // console.log(acc[cur.department]);
}, {});
console.log(totalSalaryByDept);

const highestSalaryByDept = employees.reduce(function (acc, cur) {
  // if(acc[cur.department].salary < cur.salary {

  // })
  console.log(cur.department);
}, {});

console.log(highestSalaryByDept);

console.log("Bài 5");
const watchHistory = [
  { userId: 1, videoId: "A1", duration: 10 },
  { userId: 2, videoId: "B1", duration: 15 },
  { userId: 1, videoId: "A1", duration: 20 },
  { userId: 3, videoId: "C1", duration: 30 },
  { userId: 2, videoId: "B1", duration: 5 },
  { userId: 1, videoId: "A2", duration: 25 },
  { userId: 3, videoId: "C1", duration: 15 },
];

const totalWatchVideo = watchHistory.reduce(function (acc, cur) {
  // console.log(cur);
  // console.log(cur.videoId);
  // console.log(acc[cur.videoId]);
  acc[cur.videoId] = (acc[cur.videoId] || 0) + cur.duration;
  return acc;
}, {});
console.log(totalWatchVideo);

const topWatchVideo = Object.entries(totalWatchVideo).reduce(function (
  acc,
  cur
) {
  return cur[1] > acc[1] ? cur : acc;
});
console.log(topWatchVideo);

const groupWatchVideo = function (watchHistory) {
  return watchHistory.reduce(function (acc, cur) {
    acc[cur.userId] = acc[cur.userId] || {};
    acc[cur.userId][cur.videoId] =
      (acc[cur.userId][cur.videoId] || 0) + cur.duration;
    return acc;
  }, {});
};
console.log(groupWatchVideo(watchHistory));

console.log("Bài 6");
const matches = [
  { teamA: "A", teamB: "B", scoreA: 2, scoreB: 1 },
  { teamA: "C", teamB: "D", scoreA: 1, scoreB: 3 },
  { teamA: "A", teamB: "C", scoreA: 2, scoreB: 2 },
  { teamA: "B", teamB: "D", scoreA: 0, scoreB: 1 },
  { teamA: "A", teamB: "D", scoreA: 3, scoreB: 1 },
];

const results = function (matches) {
  const team = {};
  matches.forEach(function (match) {
    [match.teamA, match.teamB].forEach(function (item) {
      team[item] = team[item] || {
        win: 0,
        draw: 0,
        loss: 0,
        point: 0,
        goal: 0,
      };
    });
    team[match.teamA].goal += match.scoreA;
    team[match.teamB].goal += match.scoreB;
    if (match.scoreA > match.scoreB) {
      team[match.teamA].win++;
      team[match.teamA].point += 3;
      team[match.teamB].loss++;
    } else if (match.scoreA < match.scoreB) {
      team[match.teamB].win++;
      team[match.teamB].point += 3;
      team[match.teamA].loss++;
    } else {
      team[match.teamA].draw++;
      team[match.teamB].draw++;
      team[match.teamA].point++;
      team[match.teamB].point++;
    }
  });
  return team;
};
console.log(results(matches));

const ranking = function (matches) {
  const team = results(matches);
  const teamPoint = Object.entries(team).map(function (item) {
    return Object.assign(
      {},
      {
        team: item[0],
      },
      item[1]
    );
  });
  return teamPoint.sort(function (a, b) {
    return b.point - a.point;
  });
};

console.log(ranking(matches));

const teamHighestGoal = function (matches) {
  return ranking(matches).reduce(function (acc, cur) {
    return cur.goal > acc.goal ? cur : acc;
  });
};
console.log(teamHighestGoal(matches));

console.log("Bài 7");
const employeess = [
  { id: 1, name: "An", projects: ["P1", "P2"] },
  { id: 2, name: "Bình", projects: ["P2", "P3"] },
  { id: 3, name: "Châu", projects: ["P1", "P3", "P4"] },
  { id: 4, name: "Dũng", projects: ["P4"] },
];

const memberOfProject = function (employeess) {
  return employeess.reduce(function (acc, cur) {
    cur.projects.forEach(function (item) {
      acc[item] = acc[item] || [];
      acc[item].push(cur.name);
    });
    return acc;
  }, {});
};
console.log(memberOfProject(employeess));

const topMemberProject = function (employeess) {
  return Object.entries(memberOfProject(employeess)).reduce(
    function (acc, cur) {
      const projectName = cur[0];
      const list = cur[1];
      if (list.length > acc.count) {
        return {
          project: projectName,
          count: list.length,
        };
      }
      return acc;
    },
    {
      count: 0,
    }
  );
};
console.log(topMemberProject(employeess));

function convertData(employeess) {
  const grouped = memberOfProject(employeess);
  const result = {};
  for (const key in grouped) {
    result[key] = grouped[key];
  }
  return result;
}
console.log(convertData(employeess));

console.log("Bài 8");
const reviews = [
  { productId: "P1", userId: "U1", rating: 5 },
  { productId: "P2", userId: "U2", rating: 4 },
  { productId: "P1", userId: "U3", rating: 3 },
  { productId: "P3", userId: "U1", rating: 4 },
  { productId: "P2", userId: "U3", rating: 2 },
  { productId: "P1", userId: "U2", rating: 4 },
];

const average = function (reviews) {
  const grouped = reviews.reduce(function (acc, cur) {
    acc[cur.productId] = acc[cur.productId] || [];
    acc[cur.productId].push(cur.rating);
    return acc;
  }, {});

  return Object.entries(grouped).map(function (item) {
    const productId = item[0];
    const ratingList = item[1];
    return {
      productId,
      avg:
        ratingList.reduce(function (acc, cur) {
          return acc + cur;
        }, 0) / ratingList.length,
    };
  });
};
console.log(average(reviews));

const searchTopProduct = function (reviews) {
  return average(reviews).reduce(function (acc, cur) {
    if (cur.avg > acc.avg) {
      return cur;
    }
    return acc;
  });
};
console.log(searchTopProduct(reviews));

const listReview = function (reviews) {
  return reviews.reduce(function (acc, cur) {
    acc[cur.productId] = acc[cur.productId] || [];
    acc[cur.productId].push({
      user: cur.userId,
      rating: cur.rating,
    });
    return acc;
  }, {});
};
console.log(listReview(reviews));

console.log("Bài 9");
const transactions = [
  { id: 1, account: "A", type: "deposit", amount: 1000 },
  { id: 2, account: "B", type: "withdraw", amount: 200 },
  { id: 3, account: "A", type: "withdraw", amount: 500 },
  { id: 4, account: "C", type: "deposit", amount: 700 },
  { id: 5, account: "B", type: "deposit", amount: 300 },
];

const lastBalance = function (transactions) {
  return transactions.reduce(function (acc, cur) {
    acc[cur.account] = acc[cur.account] || 0;
    acc[cur.account] += cur.type === "deposit" ? cur.amount : -cur.amount;
    return acc;
  }, {});
};
console.log(lastBalance(transactions));

const highestAcc = function (transactions) {
  return Object.entries(lastBalance(transactions)).reduce(
    function (acc, cur) {
      const accountName = cur[0];
      const balance = cur[1];
      if (balance > acc.balance) {
        return {
          account: accountName,
          balance,
        };
      }
      return acc;
    },
    {
      balance: 0,
    }
  );
};
console.log(highestAcc(transactions));
