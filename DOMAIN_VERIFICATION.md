# Domain Verification Guide for contact@adjuvantambulancetransport.com

This guide explains how to verify your domain in Resend so emails can be sent from `contact@adjuvantambulancetransport.com`.

## Why Verify the Domain?

Once verified, all emails from your website forms will appear to come from `contact@adjuvantambulancetransport.com` instead of `onboarding@resend.dev`. This makes your emails look more professional and trustworthy.

## Step-by-Step Instructions

### 1. Verify Domain in Resend

1. Go to [Resend Dashboard](https://resend.com/domains)
2. Click **Add Domain**
3. Enter your domain: `adjuvantambulancetransport.com`
4. Click **Add Domain**

### 2. Add DNS Records

Resend will provide you with DNS records to add. You'll need to add these to your domain's DNS settings:

**Where to add DNS records:**
- If you bought your domain from: GoDaddy, Namecheap, Google Domains, etc.
- Go to your domain registrar's DNS management page
- Look for "DNS Settings", "DNS Management", or "Name Servers"

**Records to add:**
Resend will show you specific records like:
- **TXT record** for domain verification
- **SPF record** (TXT)
- **DKIM record** (TXT)
- **DMARC record** (TXT) - optional but recommended

**Example format:**
```
Type: TXT
Name: @ (or adjuvantambulancetransport.com)
Value: [provided by Resend]
TTL: 3600 (or default)
```

### 3. Wait for Verification

- DNS changes can take 5 minutes to 48 hours to propagate
- Resend will automatically check and verify your domain
- You'll see a "Verified" status in the Resend dashboard when ready

### 4. Update Vercel (Optional)

Once verified, you can optionally add this environment variable in Vercel:
- **Name**: `RESEND_FROM_EMAIL`
- **Value**: `contact@adjuvantambulancetransport.com`

**Note**: The code already defaults to `contact@adjuvantambulancetransport.com`, so this step is optional unless you want to use a different email address.

### 5. Test

1. Submit a form on your website
2. Check `wisamchreidi@gmail.com`
3. The email should show as coming from `contact@adjuvantambulancetransport.com`

## Troubleshooting

### Domain not verifying?

1. **Check DNS propagation**: Use [dnschecker.org](https://dnschecker.org) to see if your DNS records have propagated globally
2. **Double-check records**: Make sure you copied the exact values from Resend
3. **Wait longer**: Sometimes DNS can take up to 48 hours
4. **Check for typos**: Ensure the domain name is spelled correctly

### Still using onboarding@resend.dev?

- This means the domain isn't verified yet
- Emails will still work and go to `wisamchreidi@gmail.com`
- Once verified, they'll automatically switch to `contact@adjuvantambulancetransport.com`

## Email Forwarding (Separate Setup)

If you want people to be able to send emails **directly** to `contact@adjuvantambulancetransport.com` and have them forwarded to `wisamchreidi@gmail.com`, you'll need to set up email hosting:

**Options:**
1. **Google Workspace** - Set up email forwarding
2. **Microsoft 365** - Set up email forwarding  
3. **Email forwarding service** - Many domain registrars offer this
4. **Resend Inbound** - Resend offers inbound email handling (paid feature)

**Note**: This is separate from the website form emails. Website forms already send to `wisamchreidi@gmail.com` - this is just for direct emails to the address.

## Need Help?

- Resend Support: https://resend.com/docs
- Check Resend dashboard for specific DNS records needed
- Contact your domain registrar if you need help with DNS settings

