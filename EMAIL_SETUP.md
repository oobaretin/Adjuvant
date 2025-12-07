# Email Setup Guide

This guide explains how to set up email functionality for the contact and booking forms.

## Overview

When customers submit forms on the website, emails are sent to **wisamchreidi@gmail.com** using the Resend email service. The emails appear to come from `contact@adjuvantambulancetransport.com` (even though this email doesn't exist - it's just the display name).

## Setup Steps

### 1. Get a Resend API Key

1. Go to [https://resend.com](https://resend.com)
2. Sign up for a free account (100 emails/day free)
3. Navigate to **API Keys** in your dashboard
4. Create a new API key
5. Copy the API key (starts with `re_`)

### 2. Add API Key to Vercel

1. Go to your Vercel project dashboard
2. Navigate to **Settings** → **Environment Variables**
3. Add a new environment variable:
   - **Name**: `RESEND_API_KEY`
   - **Value**: Your Resend API key (e.g., `re_abc123...`)
4. Make sure to add it for **Production**, **Preview**, and **Development** environments
5. Click **Save**

### 3. Verify Domain (Optional)

To use a custom domain like `contact@adjuvantambulancetransport.com`:

1. In Resend dashboard, go to **Domains**
2. Add your domain: `adjuvantambulancetransport.com`
3. Follow the DNS setup instructions
4. Once verified, add environment variable in Vercel:
   - **Name**: `RESEND_FROM_EMAIL`
   - **Value**: `contact@adjuvantambulancetransport.com`
5. Redeploy

**Note**: By default, the system uses `onboarding@resend.dev` which works immediately without domain verification. Emails will still work and go to your Gmail.

### 4. Redeploy

After adding the environment variable:
1. Go to your Vercel project
2. Click **Deployments**
3. Click the three dots on the latest deployment
4. Select **Redeploy**

Or simply push a new commit to trigger a new deployment.

## How It Works

- **Contact Form** (`/contact`): Sends emails to wisamchreidi@gmail.com with customer inquiry details
- **Booking Form** (`/emergency`): Sends emails to wisamchreidi@gmail.com with transport booking requests

Both forms include:
- Customer information (name, email, phone)
- Form-specific details (message or booking details)
- Reply-to set to customer's email (so you can reply directly)

## Testing

1. Fill out the contact form on your website
2. Submit it
3. Check wisamchreidi@gmail.com inbox
4. You should receive an email with the form details

## Troubleshooting

### Emails not sending?

1. Check that `RESEND_API_KEY` is set in Vercel environment variables
2. Verify the API key is correct in Resend dashboard
3. Check Vercel function logs for errors
4. Make sure you haven't exceeded Resend's free tier limits (100 emails/day)

### Need to change the recipient email?

Edit these files:
- `src/app/api/contact/route.ts` - Line with `to: ['wisamchreidi@gmail.com']`
- `src/app/api/booking/route.ts` - Line with `to: ['wisamchreidi@gmail.com']`

## Support

For Resend support, visit: https://resend.com/docs

