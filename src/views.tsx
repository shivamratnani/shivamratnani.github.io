import express, { Request, Response } from 'express';
import { google } from 'googleapis';
import request from 'request-promise';

// Load service account details directly for this example
const serviceAccount = {
    "type": "service_account",
    "project_id": "eminent-century-376000",
    "private_key_id": "2ea63eccf96a302a8cfb404f7b8e557e25e870eb",
    "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEuwIBADANBgkqhkiG9w0BAQEFAASCBKUwggShAgEAAoIBAQDQukcGb6jWeQuv\nF2J1bTncJNYY6L3fgqavewe7/phXKA44vFwOz4UPGtIBfIZQY6a9MDnwbSMu3UoO\n5bGTah8jmDjIyBjwfXk3JA6o85pfiRJtxliC0hfM9v3JIS/j6XfyoZEtbOCkj9Pb\no6VFSzbUn1n7NKJwGXJ/hgxXlg6Kjmww9KPKitJptiXw2XFAjxSEHOQMqEGFf0vK\n9X+JYICXCpMR5jsML6uXl7ZHuQ/6sHciewFqj6qlSL8WiaJXabj9lbeMCePNLlaq\nInludRufGeIGkS9Ft0SSmOvE0PgJVbCTsfTUcIg/NnqzBVY5GqDhnnBTDR3QCLAu\nClabPmRHAgMBAAECgf8vJRLxDtxEd21hbKboq3S338hqxA8+D9sRb8Qdg6e9b8Nz\nOYDPE8g76Eet6eNC4IoCsRkiToEKFnR/womBc2VKaF6f/Se+DaxiP20G/xILPU46\nsN/7ElVprIKBGBC8EivFEqynDWAIyXByZPjWqvXSTC6Hd3LXS5F8OFgUSrWmyfET\nVv0kbAIy1TeKb1GP4ul192+dvEqTByxC1ky6e0ILFgmlaKX8whSgLIc2qeRY3Ola\nBcOIT9RK0oe7lAUeiDFdgs+D8YhTluh0GaxexG3zZC5EjKdBeNg+ekvFrT6RJsWO\nFhBuWc3Uos1wASHjhX2+65GqX9gX0nCfhOJe08UCgYEA619djjImr+dMwavSwciM\nhdvj0Kj2IIU3UYBkGRUN6l4egt8wit01iWqALpdhAofEcTpoqXaSRf44xyNbRBul\n+TCAk3MhUyemqzimswkNEJQnf4zhm7eo63z9m0blDu5YQcAm1V/3XJH4R2yb9nbO\nUF3n/clHiFCdTqQyLMcYwzUCgYEA4wUg2i47yvId0iIV2qbQMuF9+/XK5P5Iskh8\nwxGkhIj0fZ47TXyWqLGYtHukg5yHGQRCn9J0to9kBtXd0iOtGbMzbA2J93J0DANR\nptUIV3DY66EhXvsdJapgNZr3717xE6fk1B7DZNz/Fdoccd3kJA26nRZnRnKx19Bq\no0vtHQsCgYB2qjjPpOcuTg27orX57vMx1X+Qxm54TNFr7LAKmTvPyi3Vy1J84DPK\nmQAQ/U7yaKKYd1sm/NmYIihb9a5gsxPFgzd/n07Qzq/PqRsaLlkA38DeJJfl2v11\n5Ckz7NU05uNmGss5Tk22xP0IfXBQHOu9RurcX2sKBaKZcFy/iI0qdQKBgALUgIlX\nxDUOeaKx/BXCuJu5xelLMiFSrjNSxgNkh+mDD5E1VMXthK9Lr3yoge+GFwUP0YjO\nhdf0x6lyJxbEjRbh7gUt0gd8rMetjuoGg9kbNgkR9CmL9dwPWK2yZd7dDyJQmICw\ndX0faCqskmg0/PAaH7Zvng/5xA/NsFaizqzrAoGBAMsFAPcsJh1h5ZURQf0mLyTL\nyBt30r2CTj5tUuwnMV5QwS9jUBARY2v6a3elkJ6jcO1NEkEWL6vPTRb0V9gJcCjm\nAYD3IeGJbIOV6T6Pc9Q9y3rnlYU891N7j2aVr2i/Yn1rIF13uI7/8TPJJuhxYQoK\nxCIU5Do8//BMz6IZdbq8\n-----END PRIVATE KEY-----\n",
    "client_email": "368282447165-compute@developer.gserviceaccount.com",
    "client_id": "110907972047276414519",
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://oauth2.googleapis.com/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/368282447165-compute%40developer.gserviceaccount.com",
    "universe_domain": "googleapis.com"

};

const router = express.Router();

router.get('/viewCount', async (req: Request, res: Response) => {
  try {
    const token = await getToken();
    const viewCount = await totalPageView(token.access_token);
    res.json({ count: viewCount });
  } catch (error) {
    res.status(500).send('Error retrieving view count');
  }
});

async function getToken(): Promise<any> {
  const jwtClient = new google.auth.JWT(
    serviceAccount.client_email,
    undefined,
    serviceAccount.private_key,
    ["https://www.googleapis.com/auth/analytics.readonly"],
    undefined
  );

  const token = await jwtClient.authorize();
  return token;
}

async function totalPageView(accessToken: string): Promise<any> {
    const endDate = new Date().toISOString().slice(0, 10); // assuming `this.endDate` is today
    const startDate = new Date(new Date(endDate).getTime() - 7 * 24 * 60 * 60 * 1000).toISOString().slice(0, 10); // set startDate to a week before endDate
    const url = `https://www.googleapis.com/analytics/v3/data/ga4?metrics=G-9F649HZLZH&start-date=${startDate}&end-date=${endDate}&limit=1`;
    
    const options = {
        url,
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        },
        auth: {
            "bearer": accessToken
        }
    };

    const response = await request(options);
    const parsedResponse = JSON.parse(response);
    const pageviews = parsedResponse.totalsForAllResults["ga:pageviews"];
    return pageviews;
}

export default router;