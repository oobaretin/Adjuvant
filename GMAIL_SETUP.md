# Gmail App Password Setup Guide

This guide explains how to set up Gmail App Password to send emails from your website forms.

## Overview

Your website forms will send emails using **YOUR Gmail account's App Password** (for authentication). All emails will be sent **TO** `wisamchreidi@gmail.com` (your client's email address).

**How it works:**
- **GMAIL_USER**: Your Gmail account (used for authentication/sending)
- **GMAIL_APP_PASSWORD**: Your App Password (from your Gmail account)
- **RECIPIENT_EMAIL**: Client's email (`wisamchreidi@gmail.com`) - who receives the emails

**Important**: 
- You use YOUR Gmail App Password to authenticate and send emails
- Your client (`wisamchreidi@gmail.com`) receives all form submissions
- The "from" address will show as "Adjuvant Ambulance Transport" but will use your Gmail address for sending

## Step-by-Step Setup

### 1. Enable 2-Step Verification on YOUR Gmail Account

Gmail requires 2-Step Verification to generate App Passwords:

1. Go to [Google Account Security](https://myaccount.google.com/security)
2. Sign in with **YOUR OWN Gmail account** (not wisamchreidi@gmail.com)
3. Under "Signing in to Google", click **2-Step Verification**
4. Follow the prompts to enable 2-Step Verification
5. You'll need your phone to complete this step

### 2. Generate App Password

1. Go back to [Google Account Security](https://myaccount.google.com/security)
2. Under "Signing in to Google", click **App passwords**
   - If you don't see this option, make sure 2-Step Verification is enabled
3. Select **Mail** as the app
4. Select **Other (Custom name)** as the device
5. Enter a name like: "Adjuvant Website"
6. Click **Generate**
7. **Copy the 16-character password** (it will look like: `abcd efgh ijkl mnop`)
   - ⚠️ **Important**: Copy this password immediately - you won't be able to see it again!

### 3. Add to Vercel Environment Variables

1. Go to your Vercel project dashboard
2. Navigate to **Settings** → **Environment Variables**
3. Add these two variables:

   **Variable 1:**
   - **Name**: `GMAIL_USER`
   - **Value**: `[YOUR Gmail address]` (e.g., `yourname@gmail.com`)
   - **Environments**: Production, Preview, Development
   - ⚠️ **This is YOUR Gmail account** (the one with the App Password you generated)

   **Variable 2:**
   - **Name**: `GMAIL_APP_PASSWORD`
   - **Value**: `[Your 16-character app password]` (remove spaces if any)
   - **Environments**: Production, Preview, Development
   - ⚠️ **This is the App Password from YOUR Gmail account**

   **Variable 3 (Optional):**
   - **Name**: `RECIPIENT_EMAIL`
   - **Value**: `wisamchreidi@gmail.com`
   - **Environments**: Production, Preview, Development
   - ⚠️ **Optional**: Defaults to `wisamchreidi@gmail.com` if not set

4. Click **Save** for each variable

### 4. Redeploy

1. Go to your Vercel project
2. Click **Deployments**
3. Click the three dots on the latest deployment
4. Select **Redeploy**

Or push a new commit to trigger automatic deployment.

## How It Works

- **Authentication**: Uses YOUR Gmail account + YOUR App Password (for sending capability)
- **Contact Form** (`/contact`): Sends emails TO wisamchreidi@gmail.com (your client)
- **Booking Form** (`/emergency`): Sends emails TO wisamchreidi@gmail.com (your client)
- **From Address**: Shows as "Adjuvant Ambulance Transport" (uses your Gmail for sending)
- **To Address**: Always sent to wisamchreidi@gmail.com (your client receives them)
- **Reply-To**: Set to customer's email (so your client can reply directly to customers)

**Key Point**: Gmail SMTP requires authenticating with YOUR account, but emails go TO your client's email address.

## Testing

1. Fill out a form on your website
2. Submit it
3. Check wisamchreidi@gmail.com inbox (your client's email)
4. Your client should receive an email with the form details

## Troubleshooting

### "Email service is not configured"

- Check that both `GMAIL_USER` and `GMAIL_APP_PASSWORD` are set in Vercel
- Make sure they're added for the correct environment (Production/Preview/Development)
- Verify the values are correct (no extra spaces)

### "Invalid login" or authentication errors

- Double-check the App Password is correct (16 characters, no spaces)
- Make sure 2-Step Verification is enabled on YOUR Gmail account
- Try generating a new App Password
- Verify `GMAIL_USER` is YOUR Gmail address (not wisamchreidi@gmail.com)
- Make sure you're using the App Password from YOUR account, not the client's account

### Emails not arriving?

1. Check spam/junk folder
2. Check Vercel function logs for errors
3. Verify the App Password hasn't been revoked
4. Make sure Gmail account isn't locked or restricted

### Need to regenerate App Password?

1. Go to [App Passwords](https://myaccount.google.com/apppasswords)
2. Find your "Adjuvant Website" app password
3. Click the delete icon to revoke it
4. Generate a new one
5. Update `GMAIL_APP_PASSWORD` in Vercel

## Security Notes

- **Never commit** the App Password to git
- App Passwords are stored securely in Vercel environment variables
- You can revoke App Passwords at any time from Google Account settings
- Each App Password is specific to one app/device

## Support

- Google Account Help: https://support.google.com/accounts
- Gmail SMTP Settings: smtp.gmail.com:587 (TLS)

