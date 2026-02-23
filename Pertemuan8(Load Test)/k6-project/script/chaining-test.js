import http from 'k6/http';
import { check } from 'k6';
import { textSummary } from "https://jslib.k6.io/k6-summary/0.0.1/index.js";
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";

export const options = {
  vus: 1,
  iterations: 1,
};

export function handleSummary(data) {
  return {
    "report/result.html": htmlReport(data),
    stdout: textSummary(data, { indent: " ", enableColors: true }),
  };
}

export default function () {
  const baseUrl = 'https://belajar-bareng.onrender.com/api';

  // =====================
  // POST LOGIN
  // =====================
  const loginRes = http.post(
    `${baseUrl}/login`,
    JSON.stringify({
      username: 'admin',
      password: 'admin',
    }),
    {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );

  check(loginRes, {
    'Login status code is 200 or 201': (r) =>
      r.status === 200 || r.status === 201,
    'Login response time < 1s': (r) => r.timings.duration < 1000,
  });

  const token = loginRes.json('token');

  // =====================
  // GET USERS
  // =====================
  const usersRes = http.get(`${baseUrl}/users`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  check(usersRes, {
    'Get users status code is 200': (r) => r.status === 200,
    'Get users response time < 1s': (r) => r.timings.duration < 1000,
  });
}
