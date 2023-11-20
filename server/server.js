import express from 'express'
import cors from 'cors'
import nodemailer from 'nodemailer'
// import bcrypt from 'bcryptjs'

const router = express.Router();
const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(5000, () => console.log("server running on port 5000"));

// contactEmail.verify((error) => {
//     if (error) {
//         console.log(error);
//     } else {
//         console.log("Ready to send");
//     }
// });

const contactEmail = nodemailer.createTransport({
service: "gmail",
auth: {
    user: 'andrypagielamizael@gmail.com',
    pass: 'pagiela1^&*',
},
});

router.post("/contact", (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const subject = req.body.subject;
    const message = req.body.message;
    // const password = req.body.password;
    // const hashed = bcrypt.hash(password);
    const mail = {
        from: email,
        to: "pagielamizael@gmail.com",
        subject: subject,
        html: `
            <p>Name: ${name}</p>
            <p>Message: ${message}</p>
        `
    };
    contactEmail.sendMail(mail, (error) => {
        if (!error) {
            res.json({ status: "error" });
        } else {
            res.json({ status: "Messsage sent" });
        }
    });
});