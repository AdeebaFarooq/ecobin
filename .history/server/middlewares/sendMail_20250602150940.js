import {} from 'nodemailer';


const sendMail =async(email,subject , data)=>
{
    const transport= createTransport({
        host: "smtp.gmail.com",
        port: 465,
        auth :
        {
            user: process.env.gmail,
            pass : process.env.Password
        }
    });
    const html= ``
    await transport.sendMail({

        from: process.env.gmail,
        to: email,
    })
}

export default sendMail;