'use server';
import nodemailer from 'nodemailer';

export async function sendConfirmationMail(toEmail: string, name: string) {
  console.log(toEmail, name);
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.NODEMAILER_EMAIL,
      pass: process.env.NODEMAILER_PASS,
    },
  });

  var mailOptions = {
    from: process.env.NODEMAILER_EMAIL,
    to: toEmail,
    subject: `${name}, thank you for contacting me!`,
    text: 'Jorge Coronilla - front-end developer',
    html: `
      <head>
      <style>
      @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap')
      </style>
    </head>
    <body style="margin: 0; padding: 0">
      <div
        style="display: flex; flex-direction: row; justify-content: space-between"
      >
        <div style="width: 100%">
          <img
            src="https://tvup.media/wp-content/uploads/2019/07/0_HICLyAdNSIyT0ODU.jpg"
            alt="Developer working"
            style="width: 100%"
          />
        </div>
      </div>

      <main style="padding: 0 10%">

        <h3
          style="
            font-size: 1.2em;
            font-family: Plus_Jakarta_Sans, sanss-serif;
            text-align: center;
          "
        >
          ¡Thanks for contacting me!
        </h3>

        <h6
          style="
            font-size: 1.2em;
            font-family: Plus_Jakarta_Sans, sans-serif;
            color: rgb(66, 66, 66);
          "
        >
          <span
            style="
              font-size: 1.6em;
              font-family: Plus_Jakarta_Sans, sans-serif;
              font-weight: 900s;
              color: rgb(121, 52, 212);
            "
            >H</span
          >i ${name}!
        </h6>

        <p
          style="
            font-size: 1em;
            font-family: Plus_Jakarta_Sans, sans-serif;
            color: rgb(66, 66, 66);
          "
        >
        I'll get in touch with you as soon as possible. In the meantime, you can check out my latest project.
        </p>

        <a
          href="https://share-it-omega.vercel.app/"
          style="
            font-size: 1em;
            font-family: Plus_Jakarta_Sans, sans-serif;
            color: rgb(226, 226, 226);
            border-radius: 6px;
            background-color: black;
            padding: 1em 2em;
            margin: 2em auto;
            display: block;
            width: 10em;
            text-align: center;
            text-decoration: none;
            font-weight: 600;
            font-size: 0.8em;
            box-shadow: rgba(0, 0, 0, 0.288) 0px 2px 8px 0px;
          "
          >Enjoy it!</a
        >

        <p
          style="
            font-size: 1em;
            font-family: Plus_Jakarta_Sans, sans-serif;
            color: rgb(66, 66, 66);
          "
        >
          Regards,
        </p>
        <p
          style="
            font-size: 1em;
            font-family: Plus_Jakarta_Sans, sans-serif;
            color: rgb(66, 66, 66);
          "
        >
Jorge Coronilla        </p>

        <br />
        <p
          style="
            font-size: 1em;
            font-family: Plus_Jakarta_Sans, sans-serif;
            color: rgb(66, 66, 66);
            font-weight: 900;
          "
        >
        Remember that you can contact me at:
        </p>

        <p
          style="
            font-size: 1em;
            font-family: Plus_Jakarta_Sans, sans-serif;
            color: rgb(66, 66, 66);
          "
        >
         Email to: 
          <a href="mailto:shareit.rizedev@gmail.com">shareit.rizedev@gmail.com</a>.
        </p>
      </main>
      <br />
      <footer
        style="height: 4em; background-color: black; color: rgb(226, 226, 226) s"
      >
        <p
          style="
            font-size: 0.8em;
            font-family: Plus_Jakarta_Sans, sans-serif;
            color: white;
            font-weight: 700;
            padding: 2em;
            text-align: center;
          "
        >
       Jorge Coronilla 2024 - Todos los derechos reservados
        </p>
      </footer>
    </body>

    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Email Sent');
    return { success: 'Email Sent' };
  } catch (error) {
    console.log(error);
    return { error: (error as Error).message };
  }
}

export async function sendMessageToAdmin(
  email: string,
  name: string,
  phone: string,
  message: string
) {
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.NODEMAILER_EMAIL,
      pass: process.env.NODEMAILER_PASS,
    },
  });

  var mailOptions = {
    from: process.env.NODEMAILER_EMAIL,
    to: process.env.NODEMAILER_EMAIL,
    subject: `Mensaje recibido de ${name}`,
    text: 'Web contact',
    html: `
    <head>
    <style>
    @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap')
    </style>
  </head>
  <body style="margin: 0; padding: 0">
    <div
      style="display: flex; flex-direction: row; justify-content: space-between"
    >
      <div style="width: 100%">
        <img
          src="https://i.ibb.co/YNymX3C/Captura-desde-2024-01-25-11-22-52.png"
          alt="Share-it"
          style="width: 100%"
        />
      </div>
    </div>
  
    <main style="padding: 0 15%">
    
      <h6
        style="
          font-size: 1.2em;
          font-family: Plus_Jakarta_Sans, sans-serif;
          color: rgb(66, 66, 66);
        "
      >
        <span
          style="
            font-size: 1.6em;
            font-family: Plus_Jakarta_Sans, sans-serif;
            font-weight: 900s;
            color: rgb(121, 52, 212);
          "
          >H</span
        >ola<span
          style="
            font-size: 1.6em;
            font-family: Plus_Jakarta_Sans, sans-serif;
            font-weight: 900s;
            color: rgb(121, 52, 212);
          "
          >!</span
        >
      </h6>
  
      <h3
        style="
          font-size: 1.2em;
          font-family: Plus_Jakarta_Sans, sans-serif;
          text-align: center;
        "
      >
        Tienes un nuevo mensaje
      </h3>
      <p
        style="
          font-size: 1em;
          font-family: Plus_Jakarta_Sans, sans-serif;
          color: rgb(66, 66, 66);
        "
      >
        ${name} te ha escrito y ha dejado estos datos: email - ${email}, teléfono - ${phone}
      </p>
      <p
        style="
          font-size: 1em;
          font-family: Plus_Jakarta_Sans, sans-serif;
          color: rgb(66, 66, 66);
        "
      >
        Este es el mensaje:
      </p>
  
      <p
      style="
        font-size: 1em;
        font-family: Plus_Jakarta_Sans, sans-serif;
        color: rgb(66, 66, 66);
      "
    >
      ${message}
    </p>
  
      <p
        style="
          font-size: 1em;
          font-family: Plus_Jakarta_Sans, sans-serif;
          color: rgb(66, 66, 66);
        "
      >
        Saludos,
      </p>
      <p
        style="
          font-size: 1em;
          font-family: Plus_Jakarta_Sans, sans-serif;
          color: rgb(66, 66, 66);
        "
      >
Tu web ;)      </p>
  
      <br />
      <p
        style="
          font-size: 1em;
          font-family: Plus_Jakarta_Sans, sans-serif;
          color: rgb(66, 66, 66);
          font-weight: 900;
        "
      >
        ¿Tienes alguna duda?
      </p>
  
      <p
        style="
          font-size: 1em;
          font-family: Plus_Jakarta_Sans, sans-serif;
          color: rgb(66, 66, 66);
        "
      >
        Escribe a:
        <a href="mailto:shareit.rizedev@gmail.com">shareit.rizedev@gmail.com</a>.
      </p>
    </main>
    <br />
    <footer
      style="height: 4em; background-color: black; color: rgb(226, 226, 226) s"
    >
      <p
        style="
          font-size: 0.8em;
          font-family: Plus_Jakarta_Sans, sans-serif;
          color: white;
          font-weight: 700;
          padding: 2em;
          text-align: center;
        "
      >
        Jorge Coronilla 2024 - Todos los derechos reservados
      </p>
    </footer>
  </body>
  
  
  `,
  };
  try {
    await transporter.sendMail(mailOptions);
    console.log('Email Sent');
    return { success: 'Email Sent' };
  } catch (error) {
    console.log(error);
    return { error: (error as Error).message };
  }
}
