# Email Setup Instructions

## Gmail Configuration for Nodemailer

To enable email sending functionality in your portfolio, you need to set up Gmail with an App Password:

### Step 1: Enable 2-Factor Authentication

1. Go to your Google Account settings: https://myaccount.google.com/
2. Navigate to "Security" in the left sidebar
3. Under "Signing in to Google", click on "2-Step Verification"
4. Follow the prompts to enable 2FA if not already enabled

### Step 2: Generate App Password

1. In the same "Security" section, look for "App passwords"
2. Click on "App passwords"
3. Select "Mail" as the app and "Other" as the device
4. Enter "Portfolio Contact Form" as the device name
5. Click "Generate"
6. Copy the 16-character password that appears

### Step 3: Update Environment Variables

1. Open the `.env.local` file in your project root
2. Replace `your_gmail_app_password_here` with the App Password you just generated
3. Make sure `EMAIL_USER` is set to your Gmail address: `tanishqjoshi140@gmail.com`

### Step 4: Security Notes

- Never commit the `.env.local` file to version control
- The `.env.local` file should already be in your `.gitignore`
- Use the App Password, not your regular Gmail password
- If you change your Google password, you'll need to regenerate the App Password

### Step 5: Testing

1. Start your development server: `npm run dev`
2. Navigate to the contact section of your portfolio
3. Fill out and submit the contact form
4. Check your Gmail inbox for the message

## Email Template Features

- Professional HTML formatting
- Sender's contact information clearly displayed
- Easy reply functionality (reply-to is set to sender's email)
- Responsive design that works in all email clients
- Plain text fallback for accessibility

## Troubleshooting

- If emails aren't sending, check the browser console for errors
- Verify your App Password is correct
- Ensure 2FA is enabled on your Google account
- Check that the environment variables are loaded correctly
