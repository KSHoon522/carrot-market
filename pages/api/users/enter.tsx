import twilio from "twilio";
import client from "@/libs/server/client";
import withHandler, { ResponseType } from "@/libs/server/withHandler";
import { NextApiRequest, NextApiResponse } from "next";
import smtpTransport from "@/libs/server/email";

const twilioClient = twilio(process.env.TWILIO_SID, process.env.TWILIO_TOKEN);

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const { phone, email } = req.body;
  const user = phone ? { phone: +phone } : email ? { email } : null;
  if (!user) return res.status(400).json({ ok: false });
  const payload = Math.floor(100000 + Math.random() * 900000) + "";
  const token = await client.token.create({
    data: {
      payload: payload,
      user: {
        connectOrCreate: {
          where: {
            ...user,
          },
          create: {
            name: "Anonymous",
            ...user,
          },
        },
      },
    },
  });
  console.log(token);
  /* let user;
  if (email) {
    user = await client.user.findUnique({
      where: {
        email,
      },
    });
    if (user) console.log("Found user");
    if (!user) {
      console.log("Did not find. Will create");
      user = await client.user.create({
        data: {
          name: "Anonymous",
        },
      });
    }
    console.log(user);
  }
  if (phone) {
    user = await client.user.findUnique({
      where: {
        phone: +phone,
      },
    });
    if (user) console.log("Found user");
    if (!user) {
      console.log("Did not find. Will create");
      user = await client.user.create({
        data: {
          name: "Anonymous",
          phone: +phone,
        },
      });
    }
    console.log(user);
  } */
  if (phone) {
    const message = await twilioClient.messages.create({
      messagingServiceSid: process.env.TWILIO_SERVICE_SID,
      to: process.env.MY_PHONE_NUMBER!,
      body: `Your login token is ${payload}`,
    });
    console.log(message);
  }
  if (email) {
    const mailOptions = {
      from: process.env.MAIL_ID,
      to: email,
      subject: "Nomad Carrot Authentication Email",
      text: `Authentication Code : ${payload}`,
    };
    const result = smtpTransport.sendMail(mailOptions, (error, responses) => {
      if (error) {
        console.log(error);
        return null;
      } else {
        console.log(responses);
        return null;
      }
    });
    smtpTransport.close();
    console.log(result);
  }
  return res.json({
    ok: true,
  });
}

export default withHandler("POST", handler);
