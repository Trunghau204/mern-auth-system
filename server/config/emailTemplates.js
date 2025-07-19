const emailTemplates = {
  welcomeEmail: (name, otp) => `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f4f4f4;">
      <div style="background-color: #ffffff; padding: 20px; border-radius: 8px; text-align: center;">
        <h1 style="color: #333;">Welcome to TrungHau!</h1>
        <p style="color: #555; font-size: 16px;">Hi ${name},</p>
        <p style="color: #555; font-size: 16px;">Thank you for joining TrungHau! To complete your registration, please verify your email address using the OTP below.</p>
        <div style="background-color: #e0e7ff; padding: 15px; margin: 20px 0; border-radius: 5px;">
          <h2 style="color: #4f46e5; font-size: 24px; margin: 0;">${otp}</h2>
          <p style="color: #555; font-size: 14px;">This OTP is valid for 24 hours.</p>
        </div>
        <p style="color: #555; font-size: 14px;">If you didn’t sign up for TrungHau, please ignore this email.</p>
        <p style="color: #555; font-size: 14px;">Best regards,<br/>The TrungHau Team</p>
      </div>
      <div style="text-align: center; padding: 10px; color: #777; font-size: 12px;">
        © ${new Date().getFullYear()} TrungHau. All rights reserved.
      </div>
    </div>
  `,

  verifyEmail: (name, otp) => `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f4f4f4;">
      <div style="background-color: #ffffff; padding: 20px; border-radius: 8px; text-align: center;">
        <h1 style="color: #333;">Verify Your Email</h1>
        <p style="color: #555; font-size: 16px;">Hi ${name},</p>
        <p style="color: #555; font-size: 16px;">Please use the OTP below to verify your email address.</p>
        <div style="background-color: #e0e7ff; padding: 15px; margin: 20px 0; border-radius: 5px;">
          <h2 style="color: #4f46e5; font-size: 24px; margin: 0;">${otp}</h2>
          <p style="color: #555; font-size: 14px;">This OTP is valid for 24 hours.</p>
        </div>
        <p style="color: #555; font-size: 14px;">If you didn’t request this OTP, please ignore this email.</p>
        <p style="color: #555; font-size: 14px;">Best regards,<br/>The TrungHau Team</p>
      </div>
      <div style="text-align: center; padding: 10px; color: #777; font-size: 12px;">
        © ${new Date().getFullYear()} TrungHau. All rights reserved.
      </div>
    </div>
  `,

  resetPasswordEmail: (name, otp) => `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f4f4f4;">
      <div style="background-color: #ffffff; padding: 20px; border-radius: 8px; text-align: center;">
        <h1 style="color: #333;">Password Reset Request</h1>
        <p style="color: #555; font-size: 16px;">Hi ${name},</p>
        <p style="color: #555; font-size: 16px;">You requested to reset your password. Please use the OTP below to proceed.</p>
        <div style="background-color: #e0e7ff; padding: 15px; margin: 20px 0; border-radius: 5px;">
          <h2 style="color: #4f46e5; font-size: 24px; margin: 0;">${otp}</h2>
          <p style="color: #555; font-size: 14px;">This OTP is valid for 15 minutes.</p>
        </div>
        <p style="color: #555; font-size: 14px;">If you didn’t request a password reset, please ignore this email.</p>
        <p style="color: #555; font-size: 14px;">Best regards,<br/>The TrungHau Team</p>
      </div>
      <div style="text-align: center; padding: 10px; color: #777; font-size: 12px;">
        © ${new Date().getFullYear()} TrungHau. All rights reserved.
      </div>
    </div>
  `,
};

export default emailTemplates;
