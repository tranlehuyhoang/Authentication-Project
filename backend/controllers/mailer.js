import nodemailer from 'nodemailer';
import Mailgen from 'mailgen';
import asyncHandler from 'express-async-handler';
import dotenv from 'dotenv';
dotenv.config(); // Load environment variables from .env file


const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
});

// Rest of your code...

// Hàm gửi email

export const registerMail = asyncHandler(async (req, res) => {
    try {
        const { userEmail, subject, text } = req.body;
        console.log(text)

        // Create a Mailgen instance
        const mailGenerator = new Mailgen({
            theme: 'default', // You can choose a theme here (e.g., 'salted', 'cerberus', 'default')
            product: {
                // Customize the product details shown in the email
                name: 'Your Product',
                link: 'https://example.com',
                logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Vitejs-logo.svg/1039px-Vitejs-logo.svg.png'
            }
        });

        // Generate an email template
        const email = {
            body: {
                // Customize the email content here
                name: 'John Doe',
                intro: 'Welcome to our platform!',
                action: {
                    instructions: text,
                    button: {
                        color: '#22BC66', // Customize the button color

                    }
                },
                outro: 'If you have any questions, feel free to reach out to us.'
            }
        };

        // Generate the HTML email using the Mailgen template
        const emailBody = mailGenerator.generate(email);

        // Convert the HTML email to a text-based email
        const emailText = mailGenerator.generatePlaintext(email);

        // Set up the email options
        const mailOptions = {
            from: process.env.EMAIL,
            to: userEmail,
            subject: subject,
            html: emailBody,
            text: emailText
        };

        // Send the email
        await transporter.sendMail(mailOptions);

        // Send a success response
        res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
        // Send an error response if there's an error
        res.status(500).json({ error: 'An error occurred while sending the email' });
    }
});